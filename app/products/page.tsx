import React from 'react';
import ProductsContainer from '@/components/products/ProductsContainer';

//So as a correction to my previous comment, this should be absolutely be named "searchParams"
//because "searchParams" and "params" served as two different objects
//"searchParams" is used for query parameters in the URL and derived from the query string of
//the URL (the part after ?
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
