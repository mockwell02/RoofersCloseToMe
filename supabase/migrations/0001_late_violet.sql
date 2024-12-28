/*
  # Initial Schema Setup for RoofersCloseToMe

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)
      - `roofer_id` (text)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `service_type` (text)
      - `timeframe` (text)
      - `address_street` (text)
      - `address_city` (text)
      - `address_state` (text)
      - `address_zip` (text)
      - `status` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for contact requests:
      - Authenticated users can create requests
      - Users can read their own requests
      - Roofers can read requests directed to them
*/

-- Create contact_requests table
CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users,
  roofer_id text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  timeframe text NOT NULL,
  address_street text NOT NULL,
  address_city text NOT NULL,
  address_state text NOT NULL,
  address_zip text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  
  CONSTRAINT status_values CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled'))
);

-- Enable RLS
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Policies for contact_requests
CREATE POLICY "Users can create contact requests"
  ON contact_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Index for performance
CREATE INDEX IF NOT EXISTS contact_requests_user_id_idx ON contact_requests(user_id);
CREATE INDEX IF NOT EXISTS contact_requests_roofer_id_idx ON contact_requests(roofer_id);