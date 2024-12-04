import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <main className={cn('mx-auto max-w-6xl xl:max-w-7xl px-8', className)}>
      {children}
    </main>
  );
};

export default Container;
