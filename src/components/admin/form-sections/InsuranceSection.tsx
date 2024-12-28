import React from 'react';
import { FormInput } from '../../forms/FormInput';

interface InsuranceSectionProps {
  formData: {
    insurance_coverage: string;
  };
  onChange: (data: Partial<InsuranceSectionProps['formData']>) => void;
}

export function InsuranceSection({ formData, onChange }: InsuranceSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Insurance Information</h2>
      <div className="space-y-4">
        <FormInput
          label="Insurance Coverage Amount"
          placeholder="e.g., $2M"
          value={formData.insurance_coverage}
          onChange={(e) => onChange({ insurance_coverage: e.target.value })}
          required
        />
      </div>
    </div>
  );
}