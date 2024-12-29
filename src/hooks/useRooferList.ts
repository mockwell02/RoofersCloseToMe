import { useState, useEffect, useCallback } from 'react';
import { supabase, checkSupabaseConnection } from '../lib/supabase';
import { Roofer } from '../types/roofer';
import { transformRooferData } from '../lib/transformers/rooferTransformer';

export function useRooferList() {
  const [roofers, setRoofers] = useState<Roofer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const fetchRoofers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Check connection first
      const isConnected = await checkSupabaseConnection();
      if (!isConnected) {
        throw new Error('Unable to connect to the database. Please check your connection and try again.');
      }

      const { data, error: fetchError } = await supabase
        .from('roofers')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      const transformedRoofers = data?.map(transformRooferData) ?? [];
      setRoofers(transformedRoofers);
      setRetryCount(0); // Reset retry count on success
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch roofers';
      console.error('Error fetching roofers:', message);
      setError(message);
      setRoofers([]);

      // Implement retry logic
      if (retryCount < MAX_RETRIES) {
        setRetryCount(prev => prev + 1);
        setTimeout(() => fetchRoofers(), 1000 * Math.pow(2, retryCount)); // Exponential backoff
      }
    } finally {
      setLoading(false);
    }
  }, [retryCount]);

  // Initial fetch
  useEffect(() => {
    fetchRoofers();
  }, [fetchRoofers]);

  return { 
    roofers, 
    loading, 
    error, 
    refetch: fetchRoofers,
    isRetrying: retryCount > 0,
    retryCount 
  };
}