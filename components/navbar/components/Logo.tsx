import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sofa } from 'lucide-react';

const Logo = () => {
  return (
    <Button
      size='icon'
      //The asChild prop allows you to replace the default rendered element of a component
      //with a custom one, while still maintaining the styles and behavior of the original
      //component.
      asChild
    >
      <Link href='/'>
        <Sofa size={64} />
      </Link>
    </Button>
  );
};

export default Logo;
