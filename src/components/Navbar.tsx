import React from 'react';
import { Home } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="absolute top-0 w-full bg-white/95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">RoofConnect</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#find" className="text-gray-700 hover:text-blue-600">Find a Roofer</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}