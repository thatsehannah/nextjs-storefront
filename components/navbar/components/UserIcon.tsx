import React from 'react';
import { User2 } from 'lucide-react';
import { currentUser, auth } from '@clerk/nextjs/server';

const UserIcon = async () => {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        className='w-6 h-6 rounded-full object-cover'
      />
    );
  }

  return <User2 className='w-8 h-8 bg-primary rounded-full text-white' />;
};

export default UserIcon;
