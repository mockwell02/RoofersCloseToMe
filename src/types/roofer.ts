export interface BusinessHours {
  day: string;
  hours: string;
}

export interface ServiceArea {
  zipCode: string;
  neighborhood: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface ProjectImage {
  url: string;
  description: string;
  type: 'before' | 'after' | 'process';
}

export interface Roofer {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  yearsInBusiness: number;
  description: string;
  specialties: string[];
  imageUrl: string;
  distance: number;
  videoUrl?: string;
  ownerMessage?: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  businessHours: BusinessHours[];
  license: {
    number: string;
    type: string;
    verified: boolean;
  };
  insurance: {
    liability: boolean;
    workersComp: boolean;
    coverage: string;
  };
  serviceAreas: ServiceArea[];
  certifications: Certification[];
  projectGallery: ProjectImage[];
}