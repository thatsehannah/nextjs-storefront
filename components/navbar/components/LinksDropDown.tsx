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

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex gap-4 max-w-[100px]'
        >
          <AlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-40'
        align='start'
        sideOffset={10}
      >
        {links.map((link) => {
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
