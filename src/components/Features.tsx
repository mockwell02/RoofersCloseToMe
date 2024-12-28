import React from 'react';
import { Shield, Star, Wrench } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All roofers are licensed, insured, and background-checked"
    },
    {
      icon: Star,
      title: "Real Reviews",
      description: "Read authentic feedback from local homeowners"
    },
    {
      icon: Wrench,
      title: "Expert Support",
      description: "Get answers to all your roofing questions"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}