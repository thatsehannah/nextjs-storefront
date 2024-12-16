'use client';

import { useToast } from '@/hooks/use-toast';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const SignOutLink = () => {
  //This hook is used because we included the Toaster component in the Providers file (providers.tsx)
  //with all of the application's providers
  const { toast } = useToast();

  //logic to display a toast message when the logout button is pressed
  const handleLogout = () => {
    toast({
      description: 'Logout Successful',
    });
  };

  return (
    <SignOutButton>
      <Link
        href='/'
        className='w-full text-left'
        onClick={handleLogout}
      >
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
