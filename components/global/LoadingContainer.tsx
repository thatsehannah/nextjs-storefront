import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { Card, CardContent } from '../ui/card';

//We are loading a skeleton card that looks similar to a product component
const LoadingProduct = () => {
  return (
    <Card>
      <CardContent className='p-4'>
        <Skeleton className='h-48 w-full' />
        <Skeleton className='h-4 w-3/4 mt-4' />
        <Skeleton className='h-4 w-1/2 mt-4' />
      </CardContent>
    </Card>
  );
};

//The Loading container is what we will display when we pass it to the fallback prop for a Suspense
//component
const LoadingContainer = () => {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

export default LoadingContainer;
