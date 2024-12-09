import ProductsContainer from '@/components/products/components/ProductsContainer';
import React from 'react';

type SearchParams = {
  searchParams: {
    layout?: string;
    search?: string;
  };
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
