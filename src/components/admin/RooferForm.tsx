import React, { useState } from 'react';
import { BasicInfoSection } from './form-sections/BasicInfoSection';
import { ContactSection } from './form-sections/ContactSection';
import { ServicesSection } from './form-sections/ServicesSection';
import { CertificationsSection } from './form-sections/CertificationsSection';
import { MediaSection } from './form-sections/MediaSection';
import { RatingSection } from './form-sections/RatingSection';
import { LicenseSection } from './form-sections/LicenseSection';
import { InsuranceSection } from './form-sections/InsuranceSection';
import { ProjectGallerySection } from './form-sections/ProjectGallerySection';
import { supabase } from '../../lib/supabase';

export function RooferForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    logo_url: '',
    owner_message: '',
    video_url: '',
    phone: '',
    email: '',
    website: '',
    years_in_business: 0,
    rating: 0,
    review_count: 0,
    specialties: [] as string[],
    license_number: '',
    license_type: '',
    insurance_coverage: '',
    service_areas: [] as { zipCode: string; neighborhood: string }[],
    certifications: [] as { name: string; issuer: string; year: number }[],
    project_gallery: [] as { url: string; description: string; type: 'before' | 'after' | 'process' }[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('roofers')
        .insert([{
          ...formData,
          slug: formData.name.toLowerCase().replace(/\s+/g, '-'),
          service_areas: JSON.stringify(formData.service_areas),
          certifications: JSON.stringify(formData.certifications),
          project_gallery: JSON.stringify(formData.project_gallery)
        }]);

      if (error) throw error;
      alert('Roofer listing created successfully!');
    } catch (error) {
      console.error('Error creating listing:', error);
      alert('Failed to create listing');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BasicInfoSection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <RatingSection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <ContactSection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <LicenseSection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <InsuranceSection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <ServicesSection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <CertificationsSection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <ProjectGallerySection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <MediaSection
        formData={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create Listing
        </button>
      </div>
    </form>
  );
}