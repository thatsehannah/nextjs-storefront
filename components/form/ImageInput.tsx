import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Prisma } from '@prisma/client';

//this is done so we don't have to hard code 'image' every where in our code.
//access the prisma client -> locate the model -> find the property that you would want to use
const name = Prisma.ProductScalarFieldEnum.image;

const ImageInput = () => {
  return (
    <div className='mb-2'>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        {name}
      </Label>
      <Input
        id={name}
        name={name}
        type='file'
        required
        accept='image/*'
      />
    </div>
  );
};

export default ImageInput;
