import { supabase } from './supabase';

export async function uploadRooferLogo(file: File) {
  return uploadFile(file, 'roofer-logos');
}

export async function uploadProjectImage(file: File) {
  return uploadFile(file, 'roofer-gallery');
}

async function uploadFile(file: File, bucket: string) {
  try {
    // Create a unique file name
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    // Upload to specified bucket
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}