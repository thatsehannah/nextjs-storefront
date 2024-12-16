import React from 'react';
import { User2 } from 'lucide-react';
import { currentUser, auth } from '@clerk/nextjs/server';

const UserIcon = async () => {
  //getting the current logged in user from Clerk. The user could be logged in or not,
  //which is why it could be possibly be null. App must be wrapped in Clerk Provider for
  //this to work
  const user = await currentUser();

  //grabbing the profile image if the user is logged in
  const profileImage = user?.imageUrl;

  //returning the profile image if the user is logged in
  if (profileImage) {
    return (
      <img
        src={profileImage}
        className='w-6 h-6 rounded-full object-cover'
      />
    );
  }

  //returning a custom icon if the user is not logged in
  return <User2 className='w-8 h-8 bg-primary rounded-full text-white' />;
};

export default UserIcon;
