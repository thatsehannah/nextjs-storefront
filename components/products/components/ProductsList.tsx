import { formatCurrency } from '@/utils/format';
import { Product } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import FavoriteToggleButton from './FavoriteToggleButton';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type ProductsListProps = {
  products: Product[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className='pt-12 grid gap-4 grid-rows-1'>
      {products.map((product) => {
        const { name, company, image, price, id } = product;
        const dollarAmount = formatCurrency(price);
        return (
          <article
            key={id}
            className='group relative'
          >
            <Link href={`/products/${id}`}>
              <Card>
                <CardContent className='flex w-full gap-12 p-8'>
                  <div className='w-1/4 h-64 m:h-48 rounded overflow-hidden'>
                    <Image
                      priority
                      className='rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                      width={20}
                      height={20}
                      src={image}
                      alt={name}
                      sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                    />
                  </div>
                  <div className='flex w-3/4 justify-between'>
                    <div>
                      <p className='font-bold capitalize text-2xl'>{name}</p>
                      <p className='text-muted-foreground text-1xl'>
                        {company}
                      </p>
                    </div>
                    <p className='text-muted-foreground capitalize'>
                      {dollarAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute bottom-7 right-7 z-6'>
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsList;
