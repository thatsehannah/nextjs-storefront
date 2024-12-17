import { z, ZodSchema } from 'zod';

//this will be used to validate against input data that will be used to create or update products
//the object keys must match the model properties (in this case the product model)
export const productSchema = z.object({
  name: z.string().min(4),
  company: z.string().min(4),
  price: z.coerce.number().int().min(0), //forcing the price (that's be returned as a string) into a number
  description: z.string(),
  featured: z.coerce.boolean(), //forcing the featured flag (that's be returned as a string) into a boolean
});
