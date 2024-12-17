'use client';

import React from 'react';
import { Checkbox } from '../ui/checkbox';

type CheckboxInputProps = {
  nameAttr: string;
  label: string;
  defaultChecked?: boolean;
};

const CheckboxInput = ({
  nameAttr,
  label,
  defaultChecked = false,
}: CheckboxInputProps) => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        name={nameAttr}
        id={nameAttr}
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={nameAttr}
        className='text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
