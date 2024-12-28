import React from 'react';
import { Wrench } from 'lucide-react';

export function ServiceFilter() {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Services</label>
      <select className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        <option value="">All Services</option>
        <option value="residential">Residential Roofing</option>
        <option value="commercial">Commercial Roofing</option>
        <option value="repair">Roof Repair</option>
        <option value="emergency">Emergency Services</option>
        <option value="inspection">Roof Inspection</option>
      </select>
    </div>
  );
}