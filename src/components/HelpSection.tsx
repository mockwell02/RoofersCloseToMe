import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export function HelpSection() {
  const helpOptions = [
    {
      icon: Phone,
      title: "Talk to a Pro",
      description: "Connect with a roofing expert who can answer your specific questions and guide you to the right solution.",
      action: "Call Now"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get immediate answers about roofing materials, costs, or finding the perfect contractor for your project.",
      action: "Start Chat"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Can We Help You?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every roofing project is unique, and we're here to help you find the perfect solution. 
            Whether you have questions about costs, materials, or need help finding the right contractor, 
            our experts will guide you through every step of your roofing journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {helpOptions.map((option, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col h-full text-center">
              <div className="mb-auto flex flex-col items-center">
                <option.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                {option.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}