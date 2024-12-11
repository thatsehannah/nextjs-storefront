import React from 'react';
import Image from 'next/image';
import { fetchProductById } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import BreadCrumbs from '@/components/product/BreadCrumbs';
import AddToCartButton from '@/components/product/AddToCartButton';
import ProductRating from '@/components/product/ProductRating';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';

type SearchParams = {
  searchParams: Promise<{ id: string }>;
};

const ProductDetailsPage = async ({ searchParams }: SearchParams) => {
  const productId = (await searchParams).id;
  const product = await fetchProductById(productId);
  const { name, company, description, price, image } = product;
  const dollarAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE COLUMN */}
        <div className='relative h-full'>
          <Image
            priority
            fill
            src={image}
            alt={name}
            className='w-full rounded-lg object-cover'
            sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
          />
        </div>

        {/* PRODUCT INFO COLUMN */}
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='text-3xl capitalize font-bold'>{name}</h1>
            <FavoriteToggleButton productId={productId} />
          </div>
          <ProductRating productId={productId} />
          <h4 className='text-xl mt-2 capitalize'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
            {dollarAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCartButton productId={productId} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
