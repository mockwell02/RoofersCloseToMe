import { Roofer } from '../types/roofer';

export const atlantaRoofers: Roofer[] = [
  {
    id: '1',
    name: 'Atlanta Premier Roofing',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=256',
    rating: 4.9,
    reviewCount: 127,
    yearsInBusiness: 15,
    description: 'Specializing in residential and commercial roofing with expertise in historic home renovations common in Virginia-Highland.',
    specialties: ['Historic Homes', 'Slate Roofing', 'Metal Roofs', 'Emergency Repairs'],
    imageUrl: 'https://images.unsplash.com/photo-1632154939738-cd9c7486ff63?auto=format&fit=crop&q=80',
    distance: 2.3,
    contact: {
      phone: '(404) 555-0123',
      email: 'info@atlantapremierroofing.com',
      website: 'https://atlantapremierroofing.com'
    },
    businessHours: [
      { day: 'Monday-Friday', hours: '7:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ],
    license: {
      number: 'ROCC123456',
      type: 'Commercial & Residential',
      verified: true
    },
    insurance: {
      liability: true,
      workersComp: true,
      coverage: '$2M'
    },
    serviceAreas: [
      { zipCode: '30306', neighborhood: 'Virginia-Highland' },
      { zipCode: '30307', neighborhood: 'Inman Park' },
      { zipCode: '30308', neighborhood: 'Midtown' }
    ],
    certifications: [
      { name: 'Master Elite Contractor', issuer: 'GAF', year: 2023 },
      { name: 'Preferred Contractor', issuer: 'Owens Corning', year: 2022 }
    ],
    projectGallery: [
      {
        url: 'https://images.unsplash.com/photo-1632154939738-cd9c7486ff63?auto=format&fit=crop&q=80',
        description: 'Historic home roof replacement',
        type: 'after'
      },
      {
        url: 'https://images.unsplash.com/photo-1622993295842-5e66c657c628?auto=format&fit=crop&q=80',
        description: 'Metal roof installation',
        type: 'process'
      }
    ]
  },
  {
    id: '2',
    name: 'Highland Roofing Experts',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=256',
    rating: 4.8,
    reviewCount: 89,
    yearsInBusiness: 8,
    description: 'Local team serving Virginia-Highland and surrounding areas with eco-friendly roofing solutions.',
    specialties: ['Green Roofing', 'Solar Installation', 'Shingle Repair', 'Gutter Installation'],
    imageUrl: 'https://images.unsplash.com/photo-1622993295842-5e66c657c628?auto=format&fit=crop&q=80',
    distance: 1.5,
    contact: {
      phone: '(404) 555-0124',
      email: 'info@highlandroofing.com',
      website: 'https://highlandroofing.com'
    },
    businessHours: [
      { day: 'Monday-Friday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Saturday', hours: 'By appointment' },
      { day: 'Sunday', hours: 'Closed' }
    ],
    license: {
      number: 'ROCC789012',
      type: 'Residential',
      verified: true
    },
    insurance: {
      liability: true,
      workersComp: true,
      coverage: '$1M'
    },
    serviceAreas: [
      { zipCode: '30306', neighborhood: 'Virginia-Highland' },
      { zipCode: '30324', neighborhood: 'Buckhead' }
    ],
    certifications: [
      { name: 'Tesla Solar Certified', issuer: 'Tesla', year: 2023 },
      { name: 'Green Roofing Pro', issuer: 'NRCA', year: 2022 }
    ],
    projectGallery: [
      {
        url: 'https://images.unsplash.com/photo-1622993295842-5e66c657c628?auto=format&fit=crop&q=80',
        description: 'Solar panel installation',
        type: 'after'
      },
      {
        url: 'https://images.unsplash.com/photo-1631155908067-3c9dea878545?auto=format&fit=crop&q=80',
        description: 'Green roof project',
        type: 'after'
      }
    ]
  }
];