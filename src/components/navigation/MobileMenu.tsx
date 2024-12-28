import React from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navigationLinks } from './navigationLinks';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map((link) => (
              <div key={link.href}>
                {link.subLinks ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronRight className={`h-5 w-5 transform transition-transform ${
                        activeSubmenu === link.label ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {activeSubmenu === link.label && (
                      <div className="pl-4">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.href}
                            href={subLink.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}