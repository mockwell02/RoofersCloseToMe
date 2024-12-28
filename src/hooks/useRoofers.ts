import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Roofer } from '../types/roofer';
import { transformRooferData } from '../lib/transformers/rooferTransformer';
import { searchRoofersByZipCode } from '../lib/queries/rooferQueries';

export function useRoofers(zipCode: string) {
  const [roofers, setRoofers] = useState<Roofer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRoofers() {
      if (!zipCode || zipCode.length !== 5) {
        setRoofers([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await searchRoofersByZipCode(supabase, zipCode);

        if (fetchError) {
          console.error('Supabase error:', fetchError);
          throw new Error('Failed to fetch roofers');
        }

        const transformedRoofers = (data || []).map(transformRooferData);
        setRoofers(transformedRoofers);
      } catch (err) {
        console.error('Error fetching roofers:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch roofers');
        setRoofers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRoofers();
  }, [zipCode]);

  return { roofers, loading, error };
}