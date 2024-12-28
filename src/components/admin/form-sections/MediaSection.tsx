import React from 'react';
import { LogoUploader } from '../../media/LogoUploader';
import { FormInput } from '../../forms/FormInput';

interface MediaSectionProps {
  formData: {
    logo_url: string;
    video_url: string;
    owner_message: string;
  };
  onChange: (data: Partial<MediaSectionProps['formData']>) => void;
}

export function MediaSection({ formData, onChange }: MediaSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Media & Message</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Logo
          </label>
          <LogoUploader
            onUploadComplete={(url) => onChange({ logo_url: url })}
          />
          {formData.logo_url && (
            <div className="mt-2">
              <img
                src={formData.logo_url}
                alt="Company logo preview"
                className="h-20 w-20 object-contain"
              />
            </div>
          )}
        </div>

        <FormInput
          label="Video URL (YouTube or Vimeo)"
          type="url"
          value={formData.video_url}
          onChange={(e) => onChange({ video_url: e.target.value })}
          placeholder="https://www.youtube.com/embed/..."
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Owner's Message
          </label>
          <textarea
            value={formData.owner_message}
            onChange={(e) => onChange({ owner_message: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="A personal message from the owner to potential customers..."
          />
        </div>
      </div>
    </div>
  );
}