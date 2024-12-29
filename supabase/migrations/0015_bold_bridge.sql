/*
  # Make license fields optional

  1. Changes
    - Make license_number and license_type nullable
    - Update existing null values to empty string
*/

-- First update any null values to empty string
UPDATE roofers 
SET 
  license_number = '',
  license_type = ''
WHERE license_number IS NULL OR license_type IS NULL;

-- Then alter the columns to be nullable
ALTER TABLE roofers
  ALTER COLUMN license_number DROP NOT NULL,
  ALTER COLUMN license_type DROP NOT NULL;