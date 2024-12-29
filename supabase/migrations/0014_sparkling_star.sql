-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access" ON roofers;
DROP POLICY IF EXISTS "Allow public insert access" ON roofers;

-- Create comprehensive policies for public access
CREATE POLICY "Anyone can read roofers"
  ON roofers
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create roofers"
  ON roofers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update roofers"
  ON roofers
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete roofers"
  ON roofers
  FOR DELETE
  TO public
  USING (true);

-- Ensure RLS is enabled
ALTER TABLE roofers ENABLE ROW LEVEL SECURITY;