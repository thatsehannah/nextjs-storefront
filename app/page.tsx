import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/components/FeaturedProducts';
import Hero from '@/components/home/components/Hero';
import React, { Suspense } from 'react';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
};
export default HomePage;
