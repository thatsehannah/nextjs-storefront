import React from 'react';
import ProductsContainer from '@/components/products/ProductsContainer';

type SearchParams = {
  searchParams: Promise<{
    layout?: 'grid' | 'list';
    search?: string;
  }>;
};

const ProductsPage = async ({ searchParams }: SearchParams) => {
  //https://nextjs.org/docs/messages/sync-dynamic-apis#possible-ways-to-fix-it
  const layout = (await searchParams).layout || 'grid';
  const search = (await searchParams).search || '';

  return (
    <ProductsContainer
      layout={layout}
      search={search}
    />
  );
};

export default ProductsPage;
