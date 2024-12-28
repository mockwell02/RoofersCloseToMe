import React from 'react';
import { X } from 'lucide-react';

interface ServicesSectionProps {
  formData: {
    specialties: string[];
    service_areas: { zipCode: string; neighborhood: string }[];
  };
  onChange: (data: Partial<ServicesSectionProps['formData']>) => void;
}

export function ServicesSection({ formData, onChange }: ServicesSectionProps) {
  const addSpecialty = (specialty: string) => {
    if (specialty && !formData.specialties.includes(specialty)) {
      onChange({ specialties: [...formData.specialties, specialty] });
    }
  };

  const removeSpecialty = (index: number) => {
    onChange({
      specialties: formData.specialties.filter((_, i) => i !== index)
    });
  };

  const addServiceArea = () => {
    onChange({
      service_areas: [...formData.service_areas, { zipCode: '', neighborhood: '' }]
    });
  };

  const updateServiceArea = (index: number, field: 'zipCode' | 'neighborhood', value: string) => {
    const newAreas = [...formData.service_areas];
    newAreas[index] = { ...newAreas[index], [field]: value };
    onChange({ service_areas: newAreas });
  };

  const removeServiceArea = (index: number) => {
    onChange({
      service_areas: formData.service_areas.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Services & Coverage</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialties
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.specialties.map((specialty, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {specialty}
                <button
                  type="button"
                  onClick={() => removeSpecialty(index)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add specialty"
              className="flex-1 px-3 py-1.5 border border-gray-300 rounded-md"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addSpecialty((e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
            <button
              type="button"
              onClick={() => {
                const input = document.querySelector('input[placeholder="Add specialty"]') as HTMLInputElement;
                addSpecialty(input.value);
                input.value = '';
              }}
              className="px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Service Areas
            </label>
            <button
              type="button"
              onClick={addServiceArea}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              + Add Area
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.service_areas.map((area, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="text"
                  placeholder="ZIP Code"
                  value={area.zipCode}
                  onChange={(e) => updateServiceArea(index, 'zipCode', e.target.value)}
                  className="w-32 px-3 py-1.5 border border-gray-300 rounded-md"
                  pattern="[0-9]{5}"
                  maxLength={5}
                />
                <input
                  type="text"
                  placeholder="Neighborhood"
                  value={area.neighborhood}
                  onChange={(e) => updateServiceArea(index, 'neighborhood', e.target.value)}
                  className="flex-1 px-3 py-1.5 border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => removeServiceArea(index)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}