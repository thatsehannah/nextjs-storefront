import React from 'react';
import { createProductAction } from '@/utils/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AdminCreateProductPage = () => {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <form action={createProductAction}>
          <div className='mb-2'>
            <Label htmlFor='name'>Product name</Label>
            <Input
              id='name'
              name='name'
              type='text'
            />
          </div>
          <Button
            type='submit'
            size='lg'
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AdminCreateProductPage;
