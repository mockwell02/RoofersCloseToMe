import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { FAQQuestionType } from '../types/faq';

export function FAQItem({ question, answer, slug }: FAQQuestionType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-left font-medium text-gray-900">{question}</h4>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 mb-3">{answer}</p>
          <a 
            href={`/faq/${slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Learn More
            <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      )}
    </div>
  );
}