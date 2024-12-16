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
  //Getting the current user's id if they're logged in
  const userId = (await auth()).userId;

  //Checking if the current logged in user's ID matches the admin's user ID.
  //User ID is grabbed from Clerk's dashboard
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
        {/* START Signed out links */}
        {/* Links that will be shown if no user is signed out */}
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
        {/* END Signed out links */}

        {/* START Signed in links */}
        {/* Links that will be shown if a user is signed in */}
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
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
        {/* END Signed in links */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
