import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { ContactFormData } from '../../types/forms';
import { serviceTypes, timeframes } from '../../data/formOptions';
import { states } from '../../data/states';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  onCancel: () => void;
  disabled?: boolean;
}

export function ContactForm({ onSubmit, onCancel, disabled }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    timeframe: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-3 mb-6">
        <FormInput
          label="Full Name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={disabled}
        />

        <FormInput
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={disabled}
        />

        <FormInput
          label="Phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={disabled}
        />

        <div className="pt-2 border-t">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Service Address</h4>
          <div className="space-y-3">
            <FormInput
              label="Street Address"
              type="text"
              required
              value={formData.address.street}
              onChange={(e) => setFormData({
                ...formData,
                address: { ...formData.address, street: e.target.value }
              })}
              disabled={disabled}
            />

            <div className="grid grid-cols-2 gap-3">
              <FormInput
                label="City"
                type="text"
                required
                value={formData.address.city}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value }
                })}
                disabled={disabled}
              />

              <FormSelect
                label="State"
                required
                value={formData.address.state}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, state: e.target.value }
                })}
                options={states}
                disabled={disabled}
              />
            </div>

            <FormInput
              label="ZIP Code"
              type="text"
              required
              pattern="[0-9]{5}"
              maxLength={5}
              value={formData.address.zipCode}
              onChange={(e) => setFormData({
                ...formData,
                address: { ...formData.address, zipCode: e.target.value }
              })}
              disabled={disabled}
            />
          </div>
        </div>

        <div className="pt-2 border-t">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Service Details</h4>
          <div className="space-y-3">
            <FormSelect
              label="Service Type"
              required
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              options={serviceTypes}
              disabled={disabled}
            />

            <FormSelect
              label="When do you need service?"
              required
              value={formData.timeframe}
              onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
              options={timeframes}
              disabled={disabled}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={disabled}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={disabled}
          className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}