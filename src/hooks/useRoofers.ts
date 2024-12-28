import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Roofer } from '../types/roofer';

export function useRoofers(zipCode: string) {
  const [roofers, setRoofers] = useState<Roofer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRoofers() {
      try {
        setLoading(true);
        setError(null);

        // Query roofers where service_areas array contains an object with matching zipCode
        const { data, error: fetchError } = await supabase
          .from('roofers')
          .select('*')
          .filter('service_areas', 'cs', `[{"zipCode": "${zipCode}"}]`);

        if (fetchError) throw fetchError;

        const transformedRoofers: Roofer[] = data.map(roofer => ({
          id: roofer.id,
          name: roofer.name,
          logo: roofer.logo_url,
          rating: roofer.rating,
          reviewCount: roofer.review_count,
          yearsInBusiness: roofer.years_in_business,
          description: roofer.description,
          specialties: roofer.specialties,
          imageUrl: roofer.logo_url,
          distance: 0,
          contact: {
            phone: roofer.phone,
            email: roofer.email,
            website: roofer.website
          },
          license: {
            number: roofer.license_number,
            type: roofer.license_type,
            verified: roofer.license_verified
          },
          insurance: {
            liability: true,
            workersComp: true,
            coverage: roofer.insurance_coverage
          },
          serviceAreas: roofer.service_areas,
          certifications: roofer.certifications,
          projectGallery: roofer.project_gallery,
          videoUrl: roofer.video_url,
          ownerMessage: roofer.owner_message
        }));

        setRoofers(transformedRoofers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch roofers');
      } finally {
        setLoading(false);
      }
    }

    if (zipCode) {
      fetchRoofers();
    }
  }, [zipCode]);

  return { roofers, loading, error };
}