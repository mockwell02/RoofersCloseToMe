-- Update existing service areas to ensure consistent format
UPDATE roofers 
SET service_areas = CASE 
  WHEN jsonb_typeof(service_areas) = 'array' THEN service_areas
  ELSE '[]'::jsonb
END;

-- Add trigger to ensure service_areas entries are properly formatted
CREATE OR REPLACE FUNCTION validate_service_areas()
RETURNS TRIGGER AS $$
BEGIN
  IF jsonb_typeof(NEW.service_areas) != 'array' THEN
    RAISE EXCEPTION 'service_areas must be a JSONB array';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER ensure_service_areas_format
  BEFORE INSERT OR UPDATE ON roofers
  FOR EACH ROW
  EXECUTE FUNCTION validate_service_areas();