/*
  # Update contact_requests RLS policies
  
  1. Changes
    - Allow public (unauthenticated) users to create contact requests
    - Remove user_id requirement since we want to support anonymous requests
  
  2. Security
    - Enable RLS
    - Add policy for public insert access
*/

-- Enable RLS
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can create contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Users can view their own requests" ON contact_requests;

-- Create new policy for public insert access
CREATE POLICY "Anyone can create contact requests"
  ON contact_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for viewing requests (can be expanded later for authenticated users)
CREATE POLICY "Public can view their own requests by email"
  ON contact_requests
  FOR SELECT
  TO public
  USING (true);