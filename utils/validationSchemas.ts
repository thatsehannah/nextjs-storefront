import { z, ZodSchema } from 'zod';

//helper function for validating image files
const validateImageFile = () => {
  //specifies the maximum allowed file size as 1MB
  const maxUploadSize = 1024 * 1024;

  //specifies the acceptable MIME type (https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types#image)
  //used to check for file types starting with image/ (e.g. image/png, image/jpg.)
  const acceptedFileTypes = ['image/'];

  return z
    .instanceof(File) //ensures that the input is an instance of the File object
    .refine(
      //custom validation
      (file) => {
        //truthy if the file size is less than or equal to 1MB
        //in order for this validation to properly work, I had to configure the bodySizeLimit to be a little bit
        //bigger in the next.config.ts file
        return file.size <= maxUploadSize;
      },
      { message: 'File size must be less than 1MB' }
    )
    .refine(
      (file) => {
        return (
          //truthy if the file type starts with "image/"
          acceptedFileTypes.some((type) => file.type.startsWith(type))
        );
      },
      { message: 'File must be an image' }
    );
};

//helper function takes in the raw data and the schema that is going to be used to validate the raw data
//will be generic since we will use this function against multiple schemas
export const validateWithZodSchema = <T>(
  schema: ZodSchema<T>,
  data: unknown
): T => {
  //validating the key-value pairs against the custom schema using zod
  //safe parse returns an object that'll contain a success property or a data property (or error if falsy)
  //https://zod.dev/?id=basic-usage
  const result = schema.safeParse(data);

  if (!result.success) {
    //using safeParse on data allows you to iterate over the errors like so
    const errors = result.error.errors.map((err) => {
      return err.message;
    });
    throw new Error(errors.join(', '));
  }

  //returns the successfully validated data of type T
  return result.data;
};

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
    //custom validation
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

export const productImageSchema = z.object({
  image: validateImageFile(),
});
