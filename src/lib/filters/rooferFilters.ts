import { Roofer } from '../../types/roofer';

export function filterRoofersByZipCode(roofers: Roofer[], zipCode: string): Roofer[] {
  return roofers.filter(roofer => 
    roofer.serviceAreas.some(area => area.zipCode === zipCode)
  );
}