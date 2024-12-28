import React from 'react';
import { Filter } from 'lucide-react';
import { ServiceFilter } from './filters/ServiceFilter';
import { RatingFilter } from './filters/RatingFilter';
import { CertificationFilter } from './filters/CertificationFilter';
import { ZipCodeFilter } from './filters/ZipCodeFilter';

interface DirectoryFiltersProps {
  zipCode: string;
  onLocationUpdate: (zipCode: string) => void;
}

export function DirectoryFilters({ zipCode, onLocationUpdate }: DirectoryFiltersProps) {
  return (
    <div className="bg-white border-b relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <h3 className="font-medium text-gray-900">Filter Results</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ZipCodeFilter 
            currentZip={zipCode} 
            onUpdate={onLocationUpdate}
          />
          <ServiceFilter />
          <RatingFilter />
          <CertificationFilter />
        </div>
      </div>
    </div>
  );
}