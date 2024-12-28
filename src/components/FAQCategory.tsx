import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from './FAQItem';
import { FAQCategoryType } from '../types/faq';

export function FAQCategory({ title, questions }: FAQCategoryType) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </button>
      {isExpanded && (
        <div className="divide-y divide-gray-200">
          {questions.map((question, index) => (
            <FAQItem key={index} {...question} />
          ))}
        </div>
      )}
    </div>
  );
}