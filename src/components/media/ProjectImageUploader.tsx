import React, { useState } from 'react';
import { Link as LinkIcon, X } from 'lucide-react';
import { FileUploader } from './FileUploader';
import { useImageUpload } from '../../hooks/useImageUpload';

interface ProjectImageUploaderProps {
  onUploadComplete: (url: string) => void;
  onError?: (error: Error) => void;
}

export function ProjectImageUploader({ onUploadComplete, onError }: ProjectImageUploaderProps) {
  const { uploadImage, isUploading, error, setError } = useImageUpload();
  const [uploadMode, setUploadMode] = useState<'file' | 'url'>('file');
  const [imageUrl, setImageUrl] = useState('');

  const handleFileUpload = async (file: File) => {
    const url = await uploadImage(file);
    if (url) {
      onUploadComplete(url);
    } else if (error) {
      onError?.(new Error(error));
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) return;

    try {
      new URL(imageUrl);
      onUploadComplete(imageUrl);
      setImageUrl('');
      setError(null);
    } catch {
      setError('Please enter a valid URL');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setUploadMode('file')}
          className={`flex-1 py-2 px-4 rounded-md ${
            uploadMode === 'file'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Upload File
        </button>
        <button
          type="button"
          onClick={() => setUploadMode('url')}
          className={`flex-1 py-2 px-4 rounded-md ${
            uploadMode === 'url'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <LinkIcon className="h-5 w-5 inline-block mr-2" />
          Image URL
        </button>
      </div>

      {uploadMode === 'file' ? (
        <FileUploader 
          onFileSelect={handleFileUpload}
          accept="image/jpeg,image/png"
          disabled={isUploading}
        />
      ) : (
        <form onSubmit={handleUrlSubmit} className="flex gap-2">
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            className="flex-1 px-3 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </form>
      )}

      {isUploading && (
        <div className="text-sm text-blue-600 flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2" />
          Uploading...
        </div>
      )}

      {error && (
        <div className="text-sm text-red-600 flex items-center justify-center">
          <X className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
}