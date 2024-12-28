import React from 'react';
import { X } from 'lucide-react';
import { ContactForm } from '../forms/ContactForm';
import { useContactForm } from '../../hooks/useContactForm';
import { ContactFormData } from '../../types/forms';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  rooferId: string;
}

export function ContactFormModal({ isOpen, onClose, companyName, rooferId }: ContactFormModalProps) {
  const { submitContactRequest, loading, error } = useContactForm();

  if (!isOpen) return null;

  const handleSubmit = async (formData: ContactFormData) => {
    const success = await submitContactRequest({
      ...formData,
      rooferId
    });
    if (success) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Contact {companyName}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <ContactForm 
              onSubmit={handleSubmit}
              onCancel={onClose}
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}