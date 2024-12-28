import React from 'react';
import { MessageSquare, Phone, HelpCircle } from 'lucide-react';

export function DirectoryHelpSection() {
  return (
    <div className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Need Help Choosing?</h2>
            <p className="text-gray-600">Our roofing experts are here to help you find the right professional.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white border border-blue-200 rounded-lg text-blue-600 hover:bg-blue-50 transition shadow-sm w-full sm:w-auto">
              <Phone className="h-5 w-5 mr-2" />
              <span>Talk to an Expert</span>
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white border border-blue-200 rounded-lg text-blue-600 hover:bg-blue-50 transition shadow-sm w-full sm:w-auto">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}