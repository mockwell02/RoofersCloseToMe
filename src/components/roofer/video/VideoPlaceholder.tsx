import React from 'react';
import { Play } from 'lucide-react';

export function VideoPlaceholder() {
  return (
    <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">Video coming soon</p>
      </div>
    </div>
  );
}