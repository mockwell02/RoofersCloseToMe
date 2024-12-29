-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Public can upload gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload to roofer-gallery" ON storage.objects;

-- Create new policies for public access
CREATE POLICY "Anyone can upload to roofer-gallery"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'roofer-gallery' AND
    (LOWER(RIGHT(name, 4)) IN ('.jpg', '.png') OR LOWER(RIGHT(name, 5)) = '.jpeg')
  );

CREATE POLICY "Public can access roofer-gallery"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'roofer-gallery');

-- Ensure bucket exists and is public
UPDATE storage.buckets
SET public = true
WHERE id = 'roofer-gallery';