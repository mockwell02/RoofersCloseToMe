import React from 'react';
import { Play } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

interface VideoThumbnailProps {
  onClick: () => void;
  url: string;
}

export function VideoThumbnail({ onClick, url }: VideoThumbnailProps) {
  return (
    <div 
      className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
        <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
      </div>
      <VideoPlayer url={url} thumbnail={true} />
    </div>
  );
}