import { SupabaseClient } from '@supabase/supabase-js';

export async function searchRoofersByZipCode(supabase: SupabaseClient, zipCode: string) {
  // Use containedBy to check if the array contains an object with matching zipCode
  return supabase
    .from('roofers')
    .select('*')
    .filter('service_areas', 'cs', `[{"zipCode": "${zipCode}"}]`);
}