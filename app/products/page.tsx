import React from 'react';
import ProductsContainer from '@/components/products/ProductsContainer';

//I introduced a bug here originally by labeling the params object as "searchParams"
//According to Nextjs docs, it should named params, nothing else. I fixed this across
//the application as well
//https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention
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
