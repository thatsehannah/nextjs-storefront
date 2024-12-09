import EmptyList from '@/components/global/EmptyList';
import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/components/ProductsGrid';
import { fetchFeaturedProducts } from '@/utils/actions';
import React from 'react';

const FeaturedProducts = async () => {
  const featuredProducts = await fetchFeaturedProducts();

  if (featuredProducts.length === 0) {
    return <EmptyList />;
  }

  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid />
    </section>
  );
};

export default FeaturedProducts;
