import React from 'react';

interface StateButtonProps {
  name: string;
  href: string;
}

export function StateButton({ name, href }: StateButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition shadow-sm"
    >
      {name}
    </a>
  );
}