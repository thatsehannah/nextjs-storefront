import ProductsContainer from '@/components/products/components/ProductsContainer';
import React from 'react';

type SearchParams = {
  searchParams: {
    layout?: string;
    search?: string;
  };
};

const ProductsPage = async ({ searchParams }: SearchParams) => {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';

  return (
    <ProductsContainer
      layout={layout}
      search={search}
    />
  );
};

export default ProductsPage;
