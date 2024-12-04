import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';

const CartButton = async () => {
  const numItemsInCart = 6; //temp value; will be doing a database query for this value later

  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link href='/cart'>
        <ShoppingBasket />
        <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
