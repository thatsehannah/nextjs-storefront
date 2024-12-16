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
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { name, company, image, price, id } = product;
        const dollarAmount = formatCurrency(price);

        return (
          <article
            key={id}
            className='group relative'
          >
            <Link href={`/products/${id}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                  <div className='relative h-64 md:h-48 md:w-48'>
                    <Image
                      priority
                      className='rounded-md w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                    />
                  </div>
                  <div>
                    <h2 className='font-semibold capitalize text-xl'>{name}</h2>
                    <h4 className='text-muted-foreground capitalize'>
                      {company}
                    </h4>
                  </div>
                  <p className='text-muted-foreground text-lg md:ml-auto'>
                    {dollarAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute bottom-8 right-8 z-6'>
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsList;
