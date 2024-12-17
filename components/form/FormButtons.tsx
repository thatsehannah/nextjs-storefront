'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { RotateCw } from 'lucide-react';

type SubmitFormButtonProps = {
  className?: string;
  text?: string;
  size?: 'default' | 'lg' | 'sm';
};

export const SubmitButton = ({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitFormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
    >
      {pending ? (
        <>
          <RotateCw className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};
