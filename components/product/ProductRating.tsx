import { Star } from 'lucide-react';
import React from 'react';

type ProductRatingProps = {
  productId: string;
};

const ProductRating = ({ productId }: ProductRatingProps) => {
  const rating = 4.2; //temp rating
  const count = 24; //temp count

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;

  return (
    <span className={className}>
      <Star className='w-3 h-3' />
      {rating} {countValue}
    </span>
  );
};

export default ProductRating;
