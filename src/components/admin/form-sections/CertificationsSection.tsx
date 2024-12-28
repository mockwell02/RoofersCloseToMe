import React from 'react';
import { X } from 'lucide-react';
import { FormInput } from '../../forms/FormInput';

interface CertificationsSectionProps {
  formData: {
    certifications: Array<{
      name: string;
      issuer: string;
      year: number;
    }>;
  };
  onChange: (data: Partial<CertificationsSectionProps['formData']>) => void;
}

export function CertificationsSection({ formData, onChange }: CertificationsSectionProps) {
  const addCertification = () => {
    onChange({
      certifications: [
        ...formData.certifications,
        { name: '', issuer: '', year: new Date().getFullYear() }
      ]
    });
  };

  const updateCertification = (
    index: number,
    field: 'name' | 'issuer' | 'year',
    value: string | number
  ) => {
    const newCertifications = [...formData.certifications];
    newCertifications[index] = { ...newCertifications[index], [field]: value };
    onChange({ certifications: newCertifications });
  };

  const removeCertification = (index: number) => {
    onChange({
      certifications: formData.certifications.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Certifications</h2>
        <button
          type="button"
          onClick={addCertification}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          + Add Certification
        </button>
      </div>

      <div className="space-y-4">
        {formData.certifications.map((cert, index) => (
          <div key={index} className="flex gap-3 items-start">
            <div className="flex-1 space-y-3">
              <FormInput
                label="Certification Name"
                value={cert.name}
                onChange={(e) => updateCertification(index, 'name', e.target.value)}
                required
              />
              
              <FormInput
                label="Issuing Organization"
                value={cert.issuer}
                onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                required
              />
              
              <FormInput
                label="Year"
                type="number"
                value={cert.year}
                onChange={(e) => updateCertification(index, 'year', parseInt(e.target.value))}
                min={1900}
                max={new Date().getFullYear()}
                required
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeCertification(index)}
              className="mt-8 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}

        {formData.certifications.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            No certifications added yet. Click the button above to add one.
          </p>
        )}
      </div>
    </div>
  );
}