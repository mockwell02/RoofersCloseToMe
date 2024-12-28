import React from 'react';
import { Star } from 'lucide-react';

export function RatingFilter() {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
      <select className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        <option value="">Any Rating</option>
        <option value="4.5">4.5+ Stars</option>
        <option value="4">4+ Stars</option>
        <option value="3.5">3.5+ Stars</option>
        <option value="3">3+ Stars</option>
      </select>
    </div>
  );
}