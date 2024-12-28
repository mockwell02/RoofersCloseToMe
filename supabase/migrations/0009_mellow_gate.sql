-- Add GIN index for faster JSON searching
CREATE INDEX IF NOT EXISTS idx_roofers_service_areas ON roofers USING GIN (service_areas);

-- Add index for text search on service_areas
CREATE INDEX IF NOT EXISTS idx_roofers_service_areas_text ON roofers USING GIN (to_tsvector('english', service_areas::text));