import React from 'react';
import { Award } from 'lucide-react';
import { Certification } from '../../types/roofer';

interface RooferCertificationsProps {
  certifications: Certification[];
}

export function RooferCertifications({ certifications }: RooferCertificationsProps) {
  return (
    <div className="mt-6">
      <div className="flex items-center mb-4">
        <Award className="h-5 w-5 mr-2 text-gray-600" />
        <h4 className="font-semibold">Certifications</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg">
            <div className="font-medium">{cert.name}</div>
            <div className="text-sm text-gray-600">{cert.issuer} - {cert.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}