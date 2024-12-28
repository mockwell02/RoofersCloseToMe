import React from 'react';
import { Clock, Shield } from 'lucide-react';
import { Roofer } from '../../types/roofer';

interface RooferDetailsProps {
  roofer: Roofer;
}

export function RooferDetails({ roofer }: RooferDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>{roofer.yearsInBusiness} years in business</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Shield className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>License #{roofer.license.number} - Verified</span>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2">Service Areas</h4>
        <div className="flex flex-wrap gap-2">
          {roofer.serviceAreas.map((area, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {area.neighborhood} ({area.zipCode})
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Specializations</h4>
        <div className="flex flex-wrap gap-2">
          {roofer.specialties.map((specialty, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}