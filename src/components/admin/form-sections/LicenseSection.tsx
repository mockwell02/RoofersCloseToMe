import React from 'react';
import { FormInput } from '../../forms/FormInput';
import { FormSelect } from '../../forms/FormSelect';

interface LicenseSectionProps {
  formData: {
    license_number: string;
    license_type: string;
  };
  onChange: (data: Partial<LicenseSectionProps['formData']>) => void;
}

export function LicenseSection({ formData, onChange }: LicenseSectionProps) {
  const licenseTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'both', label: 'Commercial & Residential' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">License Information</h2>
      <div className="space-y-4">
        <FormInput
          label="License Number"
          value={formData.license_number}
          onChange={(e) => onChange({ license_number: e.target.value })}
          required
        />
        
        <FormSelect
          label="License Type"
          value={formData.license_type}
          onChange={(e) => onChange({ license_type: e.target.value })}
          options={licenseTypes}
          required
        />
      </div>
    </div>
  );
}