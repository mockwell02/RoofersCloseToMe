import React, { useState } from 'react';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { navigationLinks } from './navigationLinks';
import { Logo } from '../common/Logo';

interface NavbarProps {
  onResetSearch: () => void;
}

export function Navbar({ onResetSearch }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                onResetSearch();
                setIsMobileMenuOpen(false);
              }}
            >
              <Logo />
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigationLinks.map((link) => (
              <NavLink 
                key={link.href} 
                href={link.href}
                subLinks={link.subLinks}
              >
                {link.label}
              </NavLink>
            ))}
            <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Get a Quote
            </button>
          </div>

          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            setIsOpen={setIsMobileMenuOpen} 
          />
        </div>
      </div>
    </nav>
  );
}