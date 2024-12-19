'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { FilePen, RotateCw, Trash2 } from 'lucide-react';

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

type IconButtonProps = {
  actionType: 'edit' | 'delete';
};

export const IconButton = ({ actionType }: IconButtonProps) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <FilePen />;
      case 'delete':
        return <Trash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type='submit'
      size='icon'
      variant='link'
      className='p-2 cursor-pointer'
    >
      {pending ? <RotateCw className='animate-spin' /> : renderIcon()}
    </Button>
  );
};
