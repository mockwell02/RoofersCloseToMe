import React from 'react';
import { FormInput } from '../../forms/FormInput';

interface RatingSectionProps {
  formData: {
    rating: number;
    review_count: number;
  };
  onChange: (data: Partial<RatingSectionProps['formData']>) => void;
}

export function RatingSection({ formData, onChange }: RatingSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Ratings & Reviews (Optional)</h2>
      <div className="space-y-4">
        <FormInput
          label="Rating (0-5)"
          type="number"
          min={0}
          max={5}
          step={0.1}
          value={formData.rating || ''}
          onChange={(e) => onChange({ rating: e.target.value ? parseFloat(e.target.value) : 0 })}
        />
        
        <FormInput
          label="Number of Reviews"
          type="number"
          min={0}
          value={formData.review_count || ''}
          onChange={(e) => onChange({ review_count: e.target.value ? parseInt(e.target.value) : 0 })}
        />
      </div>
    </div>
  );
}