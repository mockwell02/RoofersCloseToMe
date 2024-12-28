import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Connecting homeowners with trusted local roofing professionals since 2023.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#find" className="text-gray-400 hover:text-white">Find a Roofer</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#guides" className="text-gray-400 hover:text-white">Roofing Guides</a></li>
              <li><a href="#videos" className="text-gray-400 hover:text-white">Video Library</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">1-800-ROOFING</li>
              <li className="text-gray-400">support@roofersclose.to.me</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 RoofersCloseToMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}