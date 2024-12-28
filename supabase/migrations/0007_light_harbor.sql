/*
  # Update storage policies for development

  1. Changes
    - Allow public uploads to roofer-logos bucket
    - Maintain public read access
    - Remove auth requirements temporarily for testing
*/

-- Update policies for roofer-logos bucket
DROP POLICY IF EXISTS "Only authenticated users can upload logos" ON storage.objects;
DROP POLICY IF EXISTS "Public can view logos" ON storage.objects;

-- Create new policies
CREATE POLICY "Public can upload logos"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'roofer-logos' 
    AND (LOWER(RIGHT(name, 4)) IN ('.png', '.jpg') OR LOWER(RIGHT(name, 5)) = '.jpeg')
    AND LENGTH(name) < 100
  );

CREATE POLICY "Public can view logos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'roofer-logos');

-- Update bucket configuration
UPDATE storage.buckets
SET public = true
WHERE id = 'roofer-logos';