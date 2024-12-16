import React, { Suspense } from 'react';
import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';

//This is the landing page
const HomePage = () => {
  return (
    <>
      <Hero />
      {/* Suspense component lets you display a fallback until its children have finished loading. We need to  wrap or async components in this in order for it to work */}
      {/* The fallback prop specifies what component to render while the child components (FeaturedProducts) are loading */}
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
};
export default HomePage;
