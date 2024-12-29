export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!file.type.startsWith('image/')) {
    return { valid: false, error: 'Please upload an image file (JPG, PNG)' };
  }

  if (file.size > 5 * 1024 * 1024) {
    return { valid: false, error: 'Image must be under 5MB' };
  }

  return { valid: true };
}