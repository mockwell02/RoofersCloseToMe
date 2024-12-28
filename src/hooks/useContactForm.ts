import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { ContactFormSubmission } from '../types/forms';

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContactRequest = async (formData: ContactFormSubmission) => {
    try {
      setLoading(true);
      setError(null);

      const { error: submitError } = await supabase
        .from('contact_requests')
        .insert({
          roofer_id: formData.rooferId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          timeframe: formData.timeframe,
          address_street: formData.address.street,
          address_city: formData.address.city,
          address_state: formData.address.state,
          address_zip: formData.address.zipCode
        });

      if (submitError) throw submitError;
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitContactRequest,
    loading,
    error
  };
}