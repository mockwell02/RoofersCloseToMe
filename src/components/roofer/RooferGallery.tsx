import React from 'react';
import { ProjectImage } from '../../types/roofer';

interface RooferGalleryProps {
  images: ProjectImage[];
}

export function RooferGallery({ images }: RooferGalleryProps) {
  return (
    <div className="mt-6">
      <h4 className="font-semibold mb-4">Project Gallery</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img 
              src={image.url} 
              alt={image.description}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-white text-sm text-center px-2">
                  {image.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}