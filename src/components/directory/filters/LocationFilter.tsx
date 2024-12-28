import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationFilterProps {
  currentZip: string;
  onUpdate: (zipCode: string) => void;
}

export function LocationFilter({ currentZip, onUpdate }: LocationFilterProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZip = e.target.value.slice(0, 5);
    if (newZip.length === 5 && newZip !== currentZip) {
      onUpdate(newZip);
    }
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
      <input
        type="text"
        value={currentZip}
        onChange={handleChange}
        placeholder="Enter ZIP code"
        className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        pattern="[0-9]{5}"
        maxLength={5}
      />
    </div>
  );
}