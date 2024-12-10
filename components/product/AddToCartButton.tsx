import { Button } from '@/components/ui/button';
import React from 'react';

type AddToCartProps = {
  productId: string;
};

const AddToCartButton = ({ productId }: AddToCartProps) => {
  return (
    <Button
      className='capitalize mt-8'
      size='lg'
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
