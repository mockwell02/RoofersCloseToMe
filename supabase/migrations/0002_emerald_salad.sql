/*
  # Update contact requests table
  
  1. Changes
    - Remove user_id column and its foreign key constraint
    - Remove RLS policies since we don't need auth
    - Add status tracking for requests
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
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

-- Index for performance
CREATE INDEX IF NOT EXISTS contact_requests_roofer_id_idx ON contact_requests(roofer_id);