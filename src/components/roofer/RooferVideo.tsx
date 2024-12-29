import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Roofer } from '../../types/roofer';
import { VideoModal } from './VideoModal';
import { VideoThumbnail } from './video/VideoThumbnail';
import { VideoPlaceholder } from './video/VideoPlaceholder';

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
          <VideoThumbnail 
            url={roofer.videoUrl} 
            onClick={() => setIsModalOpen(true)} 
          />
          
          <VideoModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            videoUrl={roofer.videoUrl}
          />
        </>
      ) : (
        <VideoPlaceholder />
      )}
      
      <p className="mt-4 text-gray-600">
        {roofer.ownerMessage || "We're committed to providing top-quality roofing services to our community. Contact us to learn more about how we can help with your roofing needs."}
      </p>
    </div>
  );
}