import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useRoofer } from './useRoofer';
import { RooferFormData } from '../types/roofer';

export function useRooferForm(rooferId: string | null) {
  const { roofer, loading: loadingRoofer } = useRoofer(rooferId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<RooferFormData>({
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
    specialties: [],
    license_number: '',
    license_type: '',
    insurance_coverage: '',
    service_areas: [],
    certifications: [],
    project_gallery: []
  });

  useEffect(() => {
    if (roofer) {
      setFormData({
        name: roofer.name,
        description: roofer.description,
        logo_url: roofer.logo || '',
        owner_message: roofer.ownerMessage || '',
        video_url: roofer.videoUrl || '',
        phone: roofer.contact?.phone || '',
        email: roofer.contact?.email || '',
        website: roofer.contact?.website || '',
        years_in_business: roofer.yearsInBusiness || 0,
        rating: roofer.rating || 0,
        review_count: roofer.reviewCount || 0,
        specialties: roofer.specialties || [],
        license_number: roofer.license?.number || '',
        license_type: roofer.license?.type || '',
        insurance_coverage: roofer.insurance?.coverage || '',
        service_areas: roofer.serviceAreas || [],
        certifications: roofer.certifications || [],
        project_gallery: roofer.projectGallery || []
      });
    }
  }, [roofer]);

  const saveRoofer = async () => {
    try {
      setLoading(true);
      setError(null);

      // Validate required fields
      if (!formData.name?.trim()) {
        throw new Error('Company Name is required');
      }
      if (!formData.description?.trim()) {
        throw new Error('Description is required');
      }

      // Prepare data for update/insert
      const data = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        slug: formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        logo_url: formData.logo_url || null,
        owner_message: formData.owner_message || null,
        video_url: formData.video_url || null,
        phone: formData.phone || null,
        email: formData.email || null,
        website: formData.website || null,
        years_in_business: formData.years_in_business || 0,
        rating: formData.rating || 0,
        review_count: formData.review_count || 0,
        specialties: formData.specialties || [],
        license_number: formData.license_number || null,
        license_type: formData.license_type || null,
        insurance_coverage: formData.insurance_coverage || null,
        service_areas: formData.service_areas || [],
        certifications: formData.certifications || [],
        project_gallery: formData.project_gallery || []
      };

      let result;
      
      if (rooferId) {
        result = await supabase
          .from('roofers')
          .update(data)
          .eq('id', rooferId)
          .select()
          .single();
      } else {
        result = await supabase
          .from('roofers')
          .insert([data])
          .select()
          .single();
      }

      if (result.error) {
        console.error('Database error:', result.error);
        throw new Error(result.error.message);
      }

      return true;
    } catch (err) {
      console.error('Save error:', err);
      setError(err instanceof Error ? err.message : 'Failed to save listing');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    loading: loading || loadingRoofer,
    error,
    saveRoofer
  };
}