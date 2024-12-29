import React from 'react';
import { X } from 'lucide-react';
import { FormInput } from '../../forms/FormInput';
import { FormSelect } from '../../forms/FormSelect';
import { ProjectImageUploader } from '../../media/ProjectImageUploader';

interface ProjectImage {
  url: string;
  description: string;
  type: 'before' | 'after' | 'process';
}

interface ProjectGallerySectionProps {
  formData: {
    project_gallery: ProjectImage[];
  };
  onChange: (data: Partial<ProjectGallerySectionProps['formData']>) => void;
}

export function ProjectGallerySection({ formData, onChange }: ProjectGallerySectionProps) {
  const imageTypes = [
    { value: 'before', label: 'Before' },
    { value: 'after', label: 'After' },
    { value: 'process', label: 'In Progress' }
  ];

  const handleImageUpload = (url: string) => {
    onChange({
      project_gallery: [
        ...formData.project_gallery,
        { url, description: '', type: 'after' }
      ]
    });
  };

  const updateImage = (index: number, field: keyof ProjectImage, value: string) => {
    const newGallery = [...formData.project_gallery];
    newGallery[index] = { ...newGallery[index], [field]: value };
    onChange({ project_gallery: newGallery });
  };

  const removeImage = (index: number) => {
    onChange({
      project_gallery: formData.project_gallery.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Project Gallery</h2>
      
      <ProjectImageUploader 
        onUploadComplete={handleImageUpload}
        onError={(error) => console.error('Upload error:', error)}
      />

      <div className="mt-6 space-y-6">
        {formData.project_gallery.map((image, index) => (
          <div key={index} className="flex gap-4 items-start border-t pt-4">
            <div className="w-32 h-32 relative">
              <img
                src={image.url}
                alt={image.description}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <FormInput
                label="Description"
                value={image.description}
                onChange={(e) => updateImage(index, 'description', e.target.value)}
                required
              />
              
              <FormSelect
                label="Image Type"
                value={image.type}
                onChange={(e) => updateImage(index, 'type', e.target.value as 'before' | 'after' | 'process')}
                options={imageTypes}
                required
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}