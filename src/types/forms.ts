export interface ServiceType {
  value: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  timeframe: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface ContactFormSubmission extends ContactFormData {
  rooferId: string;
}