import React from 'react';

interface VideoPlayerProps {
  url: string;
  title?: string;
  thumbnail?: boolean;
}

export function VideoPlayer({ url, title, thumbnail = false }: VideoPlayerProps) {
  // Extract video ID from YouTube URLs
  const getYouTubeVideoId = (url: string) => {
    try {
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        return url.includes('youtu.be')
          ? url.split('/').pop()
          : new URL(url).searchParams.get('v');
      }
      return null;
    } catch {
      return null;
    }
  };

  const videoId = getYouTubeVideoId(url);

  if (thumbnail && videoId) {
    // Use YouTube thumbnail image for preview
    return (
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title || 'Video thumbnail'}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  // Use embed for actual video playback
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : url;

  return (
    <iframe
      src={embedUrl}
      title={title || 'Video player'}
      className="absolute inset-0 w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}