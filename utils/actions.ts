'use server';

import { redirect } from 'next/navigation';
import db from './db';
import { auth, currentUser } from '@clerk/nextjs/server';
import { productSchema, validateWithZodSchema } from './validationSchemas';

//START - HELPER FUNCTIONS
const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) {
    redirect('/');
  }

  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);

  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};

//END - HELPER FUNCTIONS

//fetches products in the db that have the featured property set to true
export const fetchFeaturedProducts = async () => {
  const featuredProducts = await db.product.findMany({
    where: {
      featured: true,
    },
  });

  return featuredProducts;
};

//fetches products in the db by name or company according to the search term (if provided and not an empty string)
export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
  const allProducts = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } }, //mode: 'insensitive' makes the search case-insensitive, contains: seach performs a substring search
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return allProducts;
};

//fetches a product by its id
export const fetchProductById = async (productId: string) => {
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
  });

  if (!product) {
    redirect('/products');
  }

  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  //Getting the current user's id if they're logged in
  const user = await getAuthUser();

  try {
    //grabbing the key-value pairs from the form inputs
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(productSchema, rawData);

    await db.product.create({
      data: {
        ...validatedFields,
        image: '/images/product3.jpg',
        clerkId: user.id,
      },
    });

    return { message: 'product created' };
  } catch (error) {
    return renderError(error);
  }
};
