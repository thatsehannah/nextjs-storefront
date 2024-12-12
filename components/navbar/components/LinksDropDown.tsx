import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { links } from '@/utils/links';
import { Button } from '@/components/ui/button';
import { AlignLeft } from 'lucide-react';
import SignOutLink from './SignOutLink';
import UserIcon from './UserIcon';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

const LinksDropdown = async () => {
  const userId = (await auth()).userId;
  const isAdmin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex gap-4 max-w-[100px]'
        >
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-40'
        align='start'
        sideOffset={10}
      >
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Log In</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
            if (link.label === 'dashboard' && !isAdmin) {
              return null;
            }
            return (
              <DropdownMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className='capitalize w-full'
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          {/* Temporary placeholder for logout button 👇🏾 will implement logout functionality later */}
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
