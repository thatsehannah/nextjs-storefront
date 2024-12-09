import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

type FavoriteToggleButtonProps = {
  productId: string;
};

const FavoriteToggleButton = ({ productId }: FavoriteToggleButtonProps) => {
  return (
    <Button
      size='icon'
      variant='outline'
      className='p-2 cursor-pointer'
      asChild
    >
      <Heart />
    </Button>
  );
};

export default FavoriteToggleButton;
