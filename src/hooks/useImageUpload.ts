import { useState } from 'react';
import { validateImageFile } from '../lib/validators/imageValidator';
import { uploadProjectImage } from '../lib/storage';

export function useImageUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File) => {
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Invalid file');
      return null;
    }

    try {
      setIsUploading(true);
      setError(null);
      const url = await uploadProjectImage(file);
      return url;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setError(message);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadImage,
    isUploading,
    error,
    setError
  };
}