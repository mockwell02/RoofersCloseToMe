export interface ContactRequest {
  id: string;
  created_at: string;
  user_id: string;
  roofer_id: string;
  name: string;
  email: string;
  phone: string;
  service_type: string;
  timeframe: string;
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
}