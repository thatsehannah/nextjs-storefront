import { z, ZodSchema } from 'zod';

//this will be used to validate against input data that will be used to create or update products
//the object keys must match the model properties (in this case the product model)
export const productSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'name must be at least 4 characters.' }) //custom error message
    .max(100, { message: 'name must be less than 100 characters.' }),
  company: z.string().min(4),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: 'price must be a positive number' }), //forcing the price (that's be returned as a string) into a number
  description: z.string().refine(
    //if this function returns truthy, the validation is passed. However, if returned falsy, the message will be displayed
    (text) => {
      const wordCount = text.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'description must be between 10 and 1000 words',
    }
  ),
  featured: z.coerce.boolean(), //forcing the featured flag (that's be returned as a string) into a boolean
});
