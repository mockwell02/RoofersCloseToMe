import React from 'react';
import { Clock } from 'lucide-react';
import { BusinessHours } from '../../types/roofer';

interface RooferHoursProps {
  hours: BusinessHours[];
}

export function RooferHours({ hours }: RooferHoursProps) {
  return (
    <div className="mt-6">
      <div className="flex items-center mb-4">
        <Clock className="h-5 w-5 mr-2 text-gray-600" />
        <h4 className="font-semibold">Business Hours</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {hours.map((schedule, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-600">{schedule.day}</span>
            <span className="font-medium">{schedule.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}