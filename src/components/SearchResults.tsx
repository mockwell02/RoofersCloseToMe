import React, { useState } from 'react';
import { RooferCard } from './roofer/RooferCard';
import { DirectoryHelpSection } from './directory/DirectoryHelpSection';
import { DirectoryFilters } from './directory/DirectoryFilters';
import { useRoofers } from '../hooks/useRoofers';
import { LoadingSpinner } from './common/LoadingSpinner';

interface SearchResultsProps {
  zipCode: string;
}

export function SearchResults({ zipCode: initialZipCode }: SearchResultsProps) {
  const [currentZipCode, setCurrentZipCode] = useState(initialZipCode);
  const { roofers, loading, error } = useRoofers(currentZipCode);

  const handleLocationUpdate = (newZipCode: string) => {
    setCurrentZipCode(newZipCode);
  };

  return (
    <section>
      <DirectoryHelpSection />
      <DirectoryFilters 
        zipCode={currentZipCode} 
        onLocationUpdate={handleLocationUpdate}
      />
      
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Top Rated Roofers in {currentZipCode}</h2>
          {loading ? (
            <p className="text-gray-600">Searching for trusted professionals...</p>
          ) : (
            <p className="text-gray-600">Found {roofers.length} trusted professionals near you</p>
          )}
        </div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-md">
            {error}
          </div>
        ) : roofers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No roofers found in your area. Try expanding your search radius.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {roofers.map((roofer) => (
              <RooferCard key={roofer.id} roofer={roofer} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}