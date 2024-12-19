import { createClient } from '@supabase/supabase-js';

//this is the bucket name created in supabase
const bucket = 'main-bucket';

//creating the client to access the storage bucket
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '3600' });

  if (!data) throw new Error('Image upload failed');

  //returning the public url after the image upload to the bucket so that we can save it in the database
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = (url: string) => {
  //grabs the the last piece of the full url (which is equal to the newName variable set in uploadImage func)
  const imageName = url.split('/').pop();
  if (!imageName) {
    throw new Error('Invalid URL');
  }

  return supabase.storage.from(bucket).remove([imageName]);
};
