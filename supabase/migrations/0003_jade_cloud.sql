/*
  # Create roofers directory table
  
  1. New Tables
    - `roofers`
      - Core Information
        - `id` (uuid, primary key)
        - `created_at` (timestamp)
        - `name` (text)
        - `slug` (text, unique)
        - `description` (text)
        - `logo_url` (text)
        - `owner_message` (text)
        - `video_url` (text)
        
      - Contact Information
        - `phone` (text)
        - `email` (text)
        - `website` (text)
        
      - Business Details
        - `years_in_business` (integer)
        - `rating` (decimal)
        - `review_count` (integer)
        - `specialties` (text array)
        
      - License & Insurance
        - `license_number` (text)
        - `license_type` (text)
        - `license_verified` (boolean)
        - `insurance_coverage` (text)
        - `insurance_verified` (boolean)
        
      - Service Areas
        - `service_areas` (jsonb array)
        
      - Media
        - `project_gallery` (jsonb array)
        - `certifications` (jsonb array)
        
  2. Security
    - Enable RLS
    - Add policies for public read access
*/

CREATE TABLE IF NOT EXISTS roofers (
  -- Core Information
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  logo_url text,
  owner_message text,
  video_url text,
  
  -- Contact Information
  phone text NOT NULL,
  email text NOT NULL,
  website text,
  
  -- Business Details
  years_in_business integer NOT NULL DEFAULT 0,
  rating decimal(3,2) NOT NULL DEFAULT 0,
  review_count integer NOT NULL DEFAULT 0,
  specialties text[] NOT NULL DEFAULT '{}',
  
  -- License & Insurance
  license_number text NOT NULL,
  license_type text NOT NULL,
  license_verified boolean NOT NULL DEFAULT false,
  insurance_coverage text,
  insurance_verified boolean NOT NULL DEFAULT false,
  
  -- Service Areas (stored as JSONB array)
  service_areas jsonb NOT NULL DEFAULT '[]',
  
  -- Media
  project_gallery jsonb NOT NULL DEFAULT '[]',
  certifications jsonb NOT NULL DEFAULT '[]',
  
  -- Constraints
  CONSTRAINT rating_range CHECK (rating >= 0 AND rating <= 5),
  CONSTRAINT review_count_positive CHECK (review_count >= 0),
  CONSTRAINT years_in_business_positive CHECK (years_in_business >= 0)
);

-- Enable RLS
ALTER TABLE roofers ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON roofers
  FOR SELECT
  TO public
  USING (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS roofers_slug_idx ON roofers(slug);
CREATE INDEX IF NOT EXISTS roofers_rating_idx ON roofers(rating DESC);
CREATE INDEX IF NOT EXISTS roofers_review_count_idx ON roofers(review_count DESC);

-- Create GIN index for full-text search on name and description
CREATE INDEX IF NOT EXISTS roofers_search_idx ON roofers 
USING gin(to_tsvector('english', name || ' ' || description));