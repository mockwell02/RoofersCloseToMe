import React from 'react';
import { FormInput } from '../../forms/FormInput';

interface ContactSectionProps {
  formData: {
    phone: string;
    email: string;
    website: string;
  };
  onChange: (data: Partial<ContactSectionProps['formData']>) => void;
}

export function ContactSection({ formData, onChange }: ContactSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
      <div className="space-y-4">
        <FormInput
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          required
        />
        
        <FormInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => onChange({ email: e.target.value })}
          required
        />
        
        <FormInput
          label="Website"
          type="url"
          value={formData.website}
          onChange={(e) => onChange({ website: e.target.value })}
        />
      </div>
    </div>
  );
}