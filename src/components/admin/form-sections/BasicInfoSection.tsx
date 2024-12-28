import React from 'react';
import { FormInput } from '../../forms/FormInput';

interface BasicInfoSectionProps {
  formData: {
    name: string;
    description: string;
    years_in_business: number;
  };
  onChange: (data: Partial<BasicInfoSectionProps['formData']>) => void;
}

export function BasicInfoSection({ formData, onChange }: BasicInfoSectionProps) {
  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only update if there's a valid number or empty string
    onChange({ 
      years_in_business: value === '' ? 0 : parseInt(value) 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
      <div className="space-y-4">
        <FormInput
          label="Company Name"
          value={formData.name}
          onChange={(e) => onChange({ name: e.target.value })}
          required
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => onChange({ description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        <FormInput
          label="Years in Business"
          type="number"
          value={formData.years_in_business || ''}
          onChange={handleYearsChange}
          min={0}
          required
        />
      </div>
    </div>
  );
}