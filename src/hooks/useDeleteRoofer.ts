import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function useDeleteRoofer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteRoofer = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const { error: deleteError } = await supabase
        .from('roofers')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;

      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete roofer';
      setError(message);
      console.error('Delete error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteRoofer, loading, error };
}