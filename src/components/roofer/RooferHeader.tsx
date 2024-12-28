import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Roofer } from '../../types/roofer';
import { ContactFormModal } from '../modals/ContactFormModal';

interface RooferHeaderProps {
  roofer: Roofer;
}

export function RooferHeader({ roofer }: RooferHeaderProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center">
          <img 
            src={roofer.logo} 
            alt={`${roofer.name} logo`}
            className="h-12 w-12 object-contain mr-4"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-bold">{roofer.name}</h3>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">{roofer.rating}</span>
              <span className="ml-1 text-gray-600">({roofer.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsContactModalOpen(true)}
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Contact Now
        </button>
      </div>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        companyName={roofer.name}
        rooferId={roofer.id}
      />
    </>
  );
}