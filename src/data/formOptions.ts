import { ServiceType } from '../types/forms';

export const serviceTypes: ServiceType[] = [
  { value: 'repair', label: 'Roof Repair' },
  { value: 'replacement', label: 'Roof Replacement' },
  { value: 'inspection', label: 'Roof Inspection' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'emergency', label: 'Emergency Service' }
];

export const timeframes: ServiceType[] = [
  { value: 'immediate', label: 'Immediately' },
  { value: 'week', label: 'Within a week' },
  { value: 'month', label: 'Within a month' },
  { value: 'planning', label: 'Just planning' }
];