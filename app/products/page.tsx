import React from 'react';
import ProductsContainer from '@/components/products/ProductsContainer';

type SearchParams = {
  params: Promise<{
    layout?: 'grid' | 'list';
    search?: string;
  }>;
};

const ProductsPage = async ({ params }: SearchParams) => {
  //https://nextjs.org/docs/messages/sync-dynamic-apis#possible-ways-to-fix-it
  const layout = (await params).layout || 'grid';
  const search = (await params).search || '';

  return (
    <ProductsContainer
      layout={layout}
      search={search}
    />
  );
};

export default ProductsPage;
