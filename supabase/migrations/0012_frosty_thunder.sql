-- First, ensure all existing service_areas are properly formatted JSON arrays
UPDATE roofers
SET service_areas = COALESCE(
  CASE 
    WHEN service_areas IS NULL THEN '[]'::jsonb
    WHEN jsonb_typeof(service_areas) = 'array' THEN service_areas
    ELSE '[]'::jsonb
  END,
  '[]'::jsonb
);

-- Add constraint to ensure service_areas is always a JSONB array
ALTER TABLE roofers 
  DROP CONSTRAINT IF EXISTS service_areas_is_array,
  ADD CONSTRAINT service_areas_is_array 
    CHECK (jsonb_typeof(service_areas) = 'array');

-- Create index for exact JSON matching
CREATE INDEX IF NOT EXISTS idx_roofers_service_areas_exact 
  ON roofers USING btree ((service_areas::text));