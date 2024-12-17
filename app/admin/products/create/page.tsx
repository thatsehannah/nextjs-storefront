import React from 'react';
import { faker } from '@faker-js/faker';
import { createProductAction } from '@/utils/actions';
import { Button } from '@/components/ui/button';
import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckboxInput from '@/components/form/CheckboxInput';
import { SubmitButton } from '@/components/form/FormButtons';

const AdminCreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <FormInput
              type='text'
              nameAttr='name'
              label='product name'
              defaultValue={name}
            />
            <FormInput
              type='text'
              nameAttr='company'
              label='company'
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            nameAttr='description'
            label='product description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <CheckboxInput
              nameAttr='featured'
              label='featured'
            />
          </div>
          <SubmitButton
            text='create product'
            className='mt-8'
          />
        </FormContainer>
      </div>
    </section>
  );
};

export default AdminCreateProductPage;
