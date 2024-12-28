import React from 'react';
import { Home } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg">
        <Home className="h-6 w-6 text-white" />
      </div>
      <span className="ml-3 text-xl font-bold text-gray-900">RoofersCloseToMe</span>
    </div>
  );
}