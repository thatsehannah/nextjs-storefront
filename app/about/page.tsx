import React from 'react';
import db from '@/utils/db';

const AboutPage = async () => {
  await db.testProfile.create({
    data: {
      name: 'random name',
    },
  });

  const users = await db.testProfile.findMany();
  return (
    <div>
      {users.map((user) => {
        return (
          <h2
            key={user.id}
            className='text-2xl font-bold'
          >
            {user.name}
          </h2>
        );
      })}
    </div>
  );
};

export default AboutPage;
