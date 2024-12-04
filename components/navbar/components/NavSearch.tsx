import { Input } from '@/components/ui/input';
import React from 'react';

const NavSearch = () => {
  return (
    <Input
      type='search'
      placeholder='search product...'
      className='max-w-xs dark:bg-muted'
    />
  );
};

export default NavSearch;
