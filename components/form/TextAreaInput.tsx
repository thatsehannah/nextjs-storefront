import React from 'react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type TextAreaInputProps = {
  nameAttr: string;
  label: string;
  defaultValue?: string;
};

const TextAreaInput = ({
  nameAttr,
  label,
  defaultValue,
}: TextAreaInputProps) => {
  return (
    <div className='mb-2'>
      <Label
        htmlFor={nameAttr}
        className='capitalize'
      >
        {label}
      </Label>
      <Textarea
        name={nameAttr}
        id={nameAttr}
        defaultValue={defaultValue}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  );
};

export default TextAreaInput;
