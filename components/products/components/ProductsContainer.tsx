import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { fetchAllProducts } from '@/utils/actions';
import { LayoutGrid, LayoutList } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type ProductsContainerProps = {
  layout: 'grid' | 'list';
  search: string;
};

type LayoutButtonProps = ProductsContainerProps & {
  layoutIcon: ReactNode;
  variant: 'default' | 'ghost';
};

const LayoutButton = ({
  layout,
  search,
  layoutIcon,
  variant,
}: LayoutButtonProps) => {
  return (
    <Button
      size='icon'
      variant={variant}
      asChild
    >
      <Link href={`/products?layout=${layout}${search}`}>{layoutIcon}</Link>
    </Button>
  );
};

const ProductsContainer = async ({
  layout,
  search,
}: ProductsContainerProps) => {
  const products = await fetchAllProducts();
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <>
      {/* HEADER */}
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-lg'>
            {products.length} product{products.length > 1 && 's'}
          </h4>
          <div className='flex gap-x-4'>
            {/* LAYOUT BUTTONS */}
            <LayoutButton
              layout='grid'
              variant={layout === 'grid' ? 'default' : 'ghost'}
              search={search}
              layoutIcon={<LayoutGrid />}
            />
            <LayoutButton
              layout='list'
              variant={layout === 'list' ? 'default' : 'ghost'}
              search={search}
              layoutIcon={<LayoutList />}
            />
          </div>
        </div>
        <Separator className='mt-4' />
      </section>
    </>
  );
};

export default ProductsContainer;
