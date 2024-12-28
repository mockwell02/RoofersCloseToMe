import { Roofer } from '../../types/roofer';

export function transformRooferData(roofer: any): Roofer {
  // Ensure service_areas is an array
  let serviceAreas = [];
  try {
    if (typeof roofer.service_areas === 'string') {
      serviceAreas = JSON.parse(roofer.service_areas);
    } else if (Array.isArray(roofer.service_areas)) {
      serviceAreas = roofer.service_areas;
    }
  } catch (e) {
    console.error('Error parsing service_areas:', e);
  }

  // Ensure certifications is an array
  let certifications = [];
  try {
    if (typeof roofer.certifications === 'string') {
      certifications = JSON.parse(roofer.certifications);
    } else if (Array.isArray(roofer.certifications)) {
      certifications = roofer.certifications;
    }
  } catch (e) {
    console.error('Error parsing certifications:', e);
  }

  // Ensure project_gallery is an array
  let projectGallery = [];
  try {
    if (typeof roofer.project_gallery === 'string') {
      projectGallery = JSON.parse(roofer.project_gallery);
    } else if (Array.isArray(roofer.project_gallery)) {
      projectGallery = roofer.project_gallery;
    }
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