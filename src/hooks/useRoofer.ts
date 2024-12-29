import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Roofer } from '../types/roofer';
import { transformRooferData } from '../lib/transformers/rooferTransformer';

export function useRoofer(id: string | null) {
  const [roofer, setRoofer] = useState<Roofer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRoofer() {
      if (!id) {
        setRoofer(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('roofers')
          .select('*')
          .eq('id', id)
          .single();

        if (fetchError) throw fetchError;
        if (!data) throw new Error('Roofer not found');

        setRoofer(transformRooferData(data));
      } catch (err) {
        console.error('Error fetching roofer:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch roofer');
      } finally {
        setLoading(false);
      }
    }

    fetchRoofer();
  }, [id]);

  return { roofer, loading, error };
}