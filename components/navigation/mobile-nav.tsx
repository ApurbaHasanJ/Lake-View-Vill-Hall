"use client";

import { useState } from 'react';
import { Menu, X, Home, Calendar, Image, Phone, Users, Info, Palette } from 'lucide-react';

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Hire', href: '/hire', icon: Info },
  { name: 'Gallery', href: '/gallery', icon: Image },
  { name: 'Contact', href: '/contact', icon: Phone },
];

const additionalNavigation = [
  { name: 'What\'s On', href: '/whats-on', icon: Calendar },
  { name: 'Groups', href: '/groups', icon: Users },
  { name: 'Design', href: '/design', icon: Palette },
];

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Navigation Menu Panel */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 transform transition-all duration-300 ease-out ${
        isMenuOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="bg-white rounded-t-2xl shadow-2xl">
          <div className="p-4">
            {/* Handle */}
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
            
            {/* Additional Navigation Items */}
            <nav className="grid grid-cols-3 gap-4 mb-6">
              {additionalNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex flex-col items-center p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={24} className="text-teal-600 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-teal-700 text-center">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-gray-700 transition-colors"
            >
              Close Menu
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (always visible) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 gap-0">
          {mainNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center py-2 px-1 hover:bg-gray-50 transition-colors relative group"
              >
                <Icon size={20} className="text-gray-600 mb-1 group-hover:text-teal-600 transition-colors" />
                <span className="text-xs text-gray-600 group-hover:text-teal-600 transition-colors text-center">{item.name}</span>
              </a>
            );
          })}
          
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center py-2 px-1 hover:bg-gray-50 transition-colors relative group"
          >
            <Menu size={20} className="text-gray-600 mb-1 group-hover:text-teal-600 transition-colors" />
            <span className="text-xs text-gray-600 group-hover:text-teal-600 transition-colors">More</span>
          </button>
        </div>
      </div>
    </>
  );
}
