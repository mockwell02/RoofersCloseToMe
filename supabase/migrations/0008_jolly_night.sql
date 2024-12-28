/*
  # Add public insert policy for roofers table
  
  1. Changes
    - Add policy to allow public inserts into roofers table
    
  2. Security
    - Enables public access to create new roofer listings
    - Maintains existing read-only policy
*/

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow public insert access" ON roofers;

-- Create new policy for public insert access
CREATE POLICY "Allow public insert access"
  ON roofers
  FOR INSERT
  TO public
  WITH CHECK (true);