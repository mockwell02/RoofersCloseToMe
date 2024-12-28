import React from 'react';
import { MapPin } from 'lucide-react';

export function DistanceFilter() {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
      <select className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        <option value="">Any Distance</option>
        <option value="5">Within 5 miles</option>
        <option value="10">Within 10 miles</option>
        <option value="25">Within 25 miles</option>
        <option value="50">Within 50 miles</option>
      </select>
    </div>
  );
}