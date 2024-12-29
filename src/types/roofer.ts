// Add this interface to the existing file
export interface RooferFormData {
  name: string;
  description: string;
  logo_url: string;
  owner_message: string;
  video_url: string;
  phone: string;
  email: string;
  website: string;
  years_in_business: number;
  rating: number;
  review_count: number;
  specialties: string[];
  license_number: string;
  license_type: string;
  insurance_coverage: string;
  service_areas: ServiceArea[];
  certifications: Certification[];
  project_gallery: ProjectImage[];
}