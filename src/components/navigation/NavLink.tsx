import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SubLink {
  href: string;
  label: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  subLinks?: SubLink[];
}

export function NavLink({ href, children, subLinks }: NavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!subLinks) {
    return (
      <a 
        href={href}
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        {children}
      </a>
    );
  }

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        {isOpen ? (
          <ChevronUp className="ml-1 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1 max-h-96 overflow-y-auto">
            {subLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}