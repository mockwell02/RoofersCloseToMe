import React from 'react';
import { BasicInfoSection } from './form-sections/BasicInfoSection';
import { ContactSection } from './form-sections/ContactSection';
import { ServicesSection } from './form-sections/ServicesSection';
import { CertificationsSection } from './form-sections/CertificationsSection';
import { MediaSection } from './form-sections/MediaSection';
import { RatingSection } from './form-sections/RatingSection';
import { LicenseSection } from './form-sections/LicenseSection';
import { InsuranceSection } from './form-sections/InsuranceSection';
import { ProjectGallerySection } from './form-sections/ProjectGallerySection';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { useRooferForm } from '../../hooks/useRooferForm';

interface RooferFormProps {
  rooferId?: string | null;
  onSuccess: () => void;
}

export function RooferForm({ rooferId, onSuccess }: RooferFormProps) {
  const { formData, setFormData, loading, error, saveRoofer } = useRooferForm(rooferId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const success = await saveRoofer();
      if (success) {
        onSuccess();
      }
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  if (loading && rooferId && !formData.name) {
    return (
      <div className="flex justify-center py-8">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md">
          {error}
        </div>
      )}

      <div className="bg-blue-50 p-4 rounded-md mb-8">
        <h3 className="font-medium text-blue-800 mb-2">Required Information</h3>
        <p className="text-blue-600 text-sm">Only Company Name and Description are required. All other fields are optional.</p>
      </div>

      <BasicInfoSection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />
      
      <div className="border-t border-gray-200 my-8 pt-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Optional Information</h3>
      </div>

      <RatingSection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />
      
      <ContactSection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />
      
      <LicenseSection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />
      
      <InsuranceSection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />
      
      <ServicesSection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />
      
      <CertificationsSection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />
      
      <ProjectGallerySection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />
      
      <MediaSection
        formData={formData}
        onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
      />

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onSuccess}
          className="px-6 py-2 text-gray-600 hover:text-gray-800 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? 'Saving...' : rooferId ? 'Update Listing' : 'Create Listing'}
        </button>
      </div>
    </form>
  );
}