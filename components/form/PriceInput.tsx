import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

//this is done so we don't have to hard code 'price' every where in our code. If we want
//to change this later, we can do so in one place
const name = 'price';

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
