import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Prisma } from '@prisma/client';

//this is done so we don't have to hard code 'price' every where in our code.
//access the prisma client -> locate the model -> find the property that you would want to use
const name = Prisma.ProductScalarFieldEnum.price;

type PriceInputProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  return (
    <div className='mb-2'>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        Price ($)
      </Label>
      <Input
        name={name}
        id={name}
        type='number'
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
};

export default PriceInput;
