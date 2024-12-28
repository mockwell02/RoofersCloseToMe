import React from 'react';
import { Star, Clock, Shield } from 'lucide-react';
import { Roofer } from '../../types/roofer';
import { RooferHeader } from './RooferHeader';
import { RooferVideo } from './RooferVideo';
import { RooferDetails } from './RooferDetails';
import { RooferCertifications } from './RooferCertifications';
import { RooferGallery } from './RooferGallery';

interface RooferCardProps {
  roofer: Roofer;
}

export function RooferCard({ roofer }: RooferCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 sm:p-6">
        <RooferHeader roofer={roofer} />
        
        <div className="grid lg:grid-cols-2 gap-6 my-6">
          <RooferVideo roofer={roofer} />
          <RooferDetails roofer={roofer} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <RooferCertifications certifications={roofer.certifications} />
          <RooferGallery images={roofer.projectGallery} />
        </div>
      </div>
    </div>
  );
}