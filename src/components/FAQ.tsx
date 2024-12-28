import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQCategory } from './FAQCategory';
import { faqData } from '../data/faqData';

export function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about roofing projects, materials, costs, and more
          </p>
        </div>
        <div className="space-y-6">
          {faqData.map((category) => (
            <FAQCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}