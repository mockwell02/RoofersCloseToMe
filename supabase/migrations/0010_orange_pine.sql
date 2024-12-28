-- Drop previous text-based index as we'll use native JSONB indexing
DROP INDEX IF EXISTS idx_roofers_service_areas_text;

-- Ensure we have a GIN index for JSONB containment queries
CREATE INDEX IF NOT EXISTS idx_roofers_service_areas_gin ON roofers USING GIN (service_areas);

-- Add a check constraint to ensure service_areas is a valid JSONB array
ALTER TABLE roofers ADD CONSTRAINT service_areas_is_array 
  CHECK (jsonb_typeof(service_areas) = 'array');