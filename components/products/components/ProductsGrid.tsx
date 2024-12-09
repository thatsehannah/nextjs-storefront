import React from 'react';
import { Product } from '@prisma/client';
import { formatCurrency } from '@/utils/format';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type ProductsGridProp = {
  products: Product[];
};

const ProductsGrid = ({ products }: ProductsGridProp) => {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { name, price, image, id } = product;
        const dollarAmount = formatCurrency(price);
        return (
          <article
            key={id}
            className='group relative'
          >
            <Link href={`/products/${id}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-4'>
                  <div className='relative h-64 md:h-48 rounded overflow-hidden'>
                    <Image
                      priority
                      className='rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                    />
                  </div>
                  <div className='mt-4 text-center'>
                    <h2 className='text-lg capitalize font-bold'>{name}</h2>
                    <p className='text-muted-foreground mt-2'>{dollarAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
