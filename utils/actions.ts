'use server';

import { redirect } from 'next/navigation';
import db from './db';
import { auth, currentUser } from '@clerk/nextjs/server';
import {
  productImageSchema,
  productSchema,
  validateWithZodSchema,
} from './validationSchemas';
import { uploadImage } from './supabase';
import { revalidatePath } from 'next/cache';

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

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) {
    redirect('/');
  }

  return user;
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
export const fetchProductBySearchTerm = async ({
  search = '',
}: {
  search: string;
}) => {
  const allProducts = await db.product.findMany({
    where: {
      OR: [
        //mode: 'insensitive' makes the search case-insensitive, contains: seach performs a substring search
        { name: { contains: search, mode: 'insensitive' } },
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

//
export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  //Getting the current user's id if they're logged in
  const user = await getAuthUser();

  try {
    //grabbing the key-value pairs from the form inputs
    const rawData = Object.fromEntries(formData);
    const imageFile = formData.get('image') as File;
    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validatedImageFile = validateWithZodSchema(productImageSchema, {
      image: imageFile,
    });

    //uploading the image to supabase bucket first so we can get the public url to save
    //to the database
    const fullPath = await uploadImage(validatedImageFile.image);

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  //redirecting to admin products page after a successful product creation
  redirect('/admin/products');
};

//deleting the product from the db
export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  await getAdminUser();

  try {
    await db.product.delete({
      where: {
        id: productId,
      },
    });
    revalidatePath('/admin/products');
    return { message: 'product removed' };
  } catch (error) {
    return renderError(error);
  }
};

//fetching all of the products for the admin products page to list
export const fetchAdminProducts = async () => {
  await getAdminUser();

  const products = await db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return products;
};
