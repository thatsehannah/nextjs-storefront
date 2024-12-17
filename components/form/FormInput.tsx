import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputProps = {
  nameAttr: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({
  nameAttr,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) => {
  return (
    <div className='mb-2'>
      <Label
        className='capitalize'
        htmlFor={nameAttr}
      >
        {label || nameAttr}
      </Label>
      <Input
        id={nameAttr}
        name={nameAttr}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormInput;
