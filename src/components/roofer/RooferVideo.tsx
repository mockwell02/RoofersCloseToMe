import React, { useState } from 'react';
import { MessageSquare, Play, X } from 'lucide-react';
import { Roofer } from '../../types/roofer';
import { VideoModal } from './VideoModal';

interface RooferVideoProps {
  roofer: Roofer;
}

export function RooferVideo({ roofer }: RooferVideoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h4 className="font-semibold mb-4 flex items-center">
        <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
        Message from the Owner
      </h4>
      
      {roofer.videoUrl ? (
        <>
          <div 
            className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
              <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
            <iframe
              src={roofer.videoUrl}
              className="w-full h-full pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          
          <VideoModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            videoUrl={roofer.videoUrl}
          />
        </>
      ) : (
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Video coming soon</p>
          </div>
        </div>
      )}
      
      <p className="mt-4 text-gray-600">
        {roofer.ownerMessage || "We're committed to providing top-quality roofing services to our community. Contact us to learn more about how we can help with your roofing needs."}
      </p>
    </div>
  );
}