import React from 'react';
import { Award } from 'lucide-react';

export function CertificationFilter() {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>
      <select className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        <option value="">Any Certification</option>
        <option value="gaf">GAF Certified</option>
        <option value="owens">Owens Corning Preferred</option>
        <option value="certainteed">CertainTeed SELECT</option>
        <option value="tesla">Tesla Solar Certified</option>
      </select>
    </div>
  );
}