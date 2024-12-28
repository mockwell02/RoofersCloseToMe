import React from 'react';
import { MapPin } from 'lucide-react';
import { StateButton } from './StateButton';
import { states } from '../../data/states';

export function StateSelector() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Find Roofers by State</h2>
          </div>
          <p className="text-gray-600">Select your state to find trusted local roofing professionals</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {states.map((state) => (
            <StateButton
              key={state.value}
              name={state.label}
              href={`/roofers/${state.value.toLowerCase()}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}