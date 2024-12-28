import React from 'react';
import { LogoUploader } from '../media/LogoUploader';

export function MediaManager() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Media Manager</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Upload Roofer Logo</h2>
        <LogoUploader 
          onUploadComplete={(url) => {
            console.log('Logo uploaded:', url);
            alert('Logo uploaded successfully! URL: ' + url);
          }}
          onError={(error) => {
            console.error('Upload failed:', error);
            alert('Upload failed: ' + error.message);
          }}
        />
      </div>
    </div>
  );
}