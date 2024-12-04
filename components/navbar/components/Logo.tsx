import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sofa } from 'lucide-react';

const Logo = () => {
  return (
    <Button
      size='icon'
      asChild
    >
      <Link href='/'>
        <Sofa size={64} />
      </Link>
    </Button>
  );
};

export default Logo;
