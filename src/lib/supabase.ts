import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client with retries and timeout
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    fetch: (...args) => {
      return fetch(...args).catch(err => {
        console.error('Supabase fetch error:', err);
        throw new Error('Unable to connect to the database. Please check your connection and try again.');
      });
    }
  }
});

// Helper to check connection
export async function checkSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('roofers').select('id').limit(1);
    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Supabase connection check failed:', err);
    return false;
  }
}