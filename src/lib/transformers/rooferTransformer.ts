import { Roofer } from '../../types/roofer';

export function transformRooferData(roofer: any): Roofer {
  // Parse service_areas
  let serviceAreas = [];
  try {
    serviceAreas = parseJsonField(roofer.service_areas);
  } catch (e) {
    console.error('Error parsing service_areas:', e);
  }

  // Parse certifications
  let certifications = [];
  try {
    certifications = parseJsonField(roofer.certifications);
  } catch (e) {
    console.error('Error parsing certifications:', e);
  }

  // Parse project_gallery
  let projectGallery = [];
  try {
    projectGallery = parseJsonField(roofer.project_gallery);
  } catch (e) {
    console.error('Error parsing project_gallery:', e);
  }

  return {
    id: roofer.id,
    name: roofer.name,
    logo: roofer.logo_url,
    rating: Number(roofer.rating) || 0,
    reviewCount: Number(roofer.review_count) || 0,
    yearsInBusiness: Number(roofer.years_in_business) || 0,
    description: roofer.description || '',
    specialties: Array.isArray(roofer.specialties) ? roofer.specialties : [],
    imageUrl: roofer.logo_url,
    distance: 0,
    contact: {
      phone: roofer.phone || '',
      email: roofer.email || '',
      website: roofer.website || ''
    },
    license: {
      number: roofer.license_number || '',
      type: roofer.license_type || '',
      verified: Boolean(roofer.license_verified)
    },
    insurance: {
      liability: true,
      workersComp: true,
      coverage: roofer.insurance_coverage || ''
    },
    serviceAreas,
    certifications,
    projectGallery,
    videoUrl: roofer.video_url || '',
    ownerMessage: roofer.owner_message || ''
  };
}

function parseJsonField(field: any) {
  if (typeof field === 'string') {
    return JSON.parse(field);
  }
  if (Array.isArray(field)) {
    return field;
  }
  return [];
}