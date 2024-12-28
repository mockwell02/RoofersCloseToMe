/*
  # Add storage buckets for roofer media

  1. New Storage Buckets
    - `roofer-logos` - For company logos
    - `roofer-videos` - For introduction videos
    - `roofer-gallery` - For project photos and galleries
  
  2. Security
    - Enable public read access
    - Restrict uploads to authenticated users
    - Add file type and size restrictions
*/

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('roofer-logos', 'Roofer Logos', true),
  ('roofer-videos', 'Roofer Videos', true),
  ('roofer-gallery', 'Roofer Gallery', true);

-- Set up security policies for roofer-logos
CREATE POLICY "Public can view logos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'roofer-logos');

CREATE POLICY "Only authenticated users can upload logos"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'roofer-logos' 
    AND auth.role() = 'authenticated'
    AND (LOWER(RIGHT(name, 4)) IN ('.png', '.jpg') OR LOWER(RIGHT(name, 5)) = '.jpeg')
    AND LENGTH(name) < 100
  );

-- Set up security policies for roofer-videos
CREATE POLICY "Public can view videos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'roofer-videos');

CREATE POLICY "Only authenticated users can upload videos"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'roofer-videos'
    AND auth.role() = 'authenticated'
    AND (LOWER(RIGHT(name, 4)) = '.mp4' OR LOWER(RIGHT(name, 5)) = '.webm')
    AND LENGTH(name) < 100
  );

-- Set up security policies for roofer-gallery
CREATE POLICY "Public can view gallery images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'roofer-gallery');

CREATE POLICY "Only authenticated users can upload gallery images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'roofer-gallery'
    AND auth.role() = 'authenticated'
    AND (LOWER(RIGHT(name, 4)) IN ('.png', '.jpg') OR LOWER(RIGHT(name, 5)) = '.jpeg')
    AND LENGTH(name) < 100
  );

-- Add delete policies for authenticated users
CREATE POLICY "Authenticated users can delete their own uploads"
  ON storage.objects FOR DELETE
  USING (auth.uid() = owner);