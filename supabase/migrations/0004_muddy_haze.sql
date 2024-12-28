/*
  # Add test roofer data
  
  1. Test Data
    - Adds two test roofing companies:
      - [TEST] Atlanta Premier Roofing
      - [TEST] Highland Roofing Experts
    
  2. Data includes:
    - Core company information
    - Contact details
    - Service areas
    - Certifications
    - Project gallery
*/

INSERT INTO roofers (
  name,
  slug,
  description,
  logo_url,
  owner_message,
  video_url,
  phone,
  email,
  website,
  years_in_business,
  rating,
  review_count,
  specialties,
  license_number,
  license_type,
  license_verified,
  insurance_coverage,
  insurance_verified,
  service_areas,
  project_gallery,
  certifications
) VALUES
-- First test company
(
  '[TEST] Atlanta Premier Roofing',
  'test-atlanta-premier-roofing',
  'Test company specializing in residential and commercial roofing with expertise in historic home renovations.',
  'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=256',
  'We are committed to providing top-quality roofing services to our community.',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  '(404) 555-0123',
  'info@test-atlantapremierroofing.com',
  'https://test-atlantapremierroofing.com',
  15,
  4.9,
  127,
  ARRAY['Historic Homes', 'Slate Roofing', 'Metal Roofs', 'Emergency Repairs'],
  'TEST-123456',
  'Commercial & Residential',
  true,
  '$2M',
  true,
  '[
    {"zipCode": "30306", "neighborhood": "Virginia-Highland"},
    {"zipCode": "30307", "neighborhood": "Inman Park"},
    {"zipCode": "30308", "neighborhood": "Midtown"}
  ]'::jsonb,
  '[
    {
      "url": "https://images.unsplash.com/photo-1632154939738-cd9c7486ff63?auto=format&fit=crop&q=80",
      "description": "Historic home roof replacement",
      "type": "after"
    },
    {
      "url": "https://images.unsplash.com/photo-1622993295842-5e66c657c628?auto=format&fit=crop&q=80",
      "description": "Metal roof installation",
      "type": "process"
    }
  ]'::jsonb,
  '[
    {
      "name": "Master Elite Contractor",
      "issuer": "GAF",
      "year": 2023
    },
    {
      "name": "Preferred Contractor",
      "issuer": "Owens Corning",
      "year": 2022
    }
  ]'::jsonb
),
-- Second test company
(
  '[TEST] Highland Roofing Experts',
  'test-highland-roofing-experts',
  'Test local team serving Virginia-Highland and surrounding areas with eco-friendly roofing solutions.',
  'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=256',
  'We specialize in sustainable and eco-friendly roofing solutions.',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  '(404) 555-0124',
  'info@test-highlandroofing.com',
  'https://test-highlandroofing.com',
  8,
  4.8,
  89,
  ARRAY['Green Roofing', 'Solar Installation', 'Shingle Repair', 'Gutter Installation'],
  'TEST-789012',
  'Residential',
  true,
  '$1M',
  true,
  '[
    {"zipCode": "30306", "neighborhood": "Virginia-Highland"},
    {"zipCode": "30324", "neighborhood": "Buckhead"}
  ]'::jsonb,
  '[
    {
      "url": "https://images.unsplash.com/photo-1622993295842-5e66c657c628?auto=format&fit=crop&q=80",
      "description": "Solar panel installation",
      "type": "after"
    },
    {
      "url": "https://images.unsplash.com/photo-1631155908067-3c9dea878545?auto=format&fit=crop&q=80",
      "description": "Green roof project",
      "type": "after"
    }
  ]'::jsonb,
  '[
    {
      "name": "Tesla Solar Certified",
      "issuer": "Tesla",
      "year": 2023
    },
    {
      "name": "Green Roofing Pro",
      "issuer": "NRCA",
      "year": 2022
    }
  ]'::jsonb
);