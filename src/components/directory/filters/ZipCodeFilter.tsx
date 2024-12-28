import React from 'react';
import { MapPin } from 'lucide-react';

interface ZipCodeFilterProps {
  currentZip: string;
  onUpdate: (zipCode: string) => void;
}

export function ZipCodeFilter({ currentZip, onUpdate }: ZipCodeFilterProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZip = e.target.value.slice(0, 5);
    if (newZip.length === 5 && newZip !== currentZip) {
      onUpdate(newZip);
    }
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
      <div className="relative">
        <input
          type="text"
          value={currentZip}
          onChange={handleChange}
          placeholder="Enter ZIP code"
          className="w-full bg-white border border-gray-300 rounded-md py-2 pl-9 pr-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          pattern="[0-9]{5}"
          maxLength={5}
        />
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}