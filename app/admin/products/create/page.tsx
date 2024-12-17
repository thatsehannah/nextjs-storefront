import React from 'react';
import { faker } from '@faker-js/faker';
import { createProductAction } from '@/utils/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormInput from '@/components/form/FormInput';

const AdminCreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <form action={createProductAction}>
          <FormInput
            nameAttr='name'
            type='text'
            defaultValue={name}
            label='product name'
          />
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
