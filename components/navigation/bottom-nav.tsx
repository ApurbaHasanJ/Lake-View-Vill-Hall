"use client";

import { useState } from 'react';
import { Home, Calendar, Image, Phone, Menu, X, Palette } from 'lucide-react';

const bottomNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Hire', href: '/hire', icon: Calendar },
  { name: 'Gallery', href: '/gallery', icon: Image },
  { name: 'Contact', href: '/contact', icon: Phone },
];

interface BottomNavProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export function BottomNav({ isMenuOpen, onMenuToggle }: BottomNavProps) {
  return (
    <>
      {/* Mobile menu button in bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 gap-1">
          {bottomNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center p-2 hover:bg-gray-50 transition-colors"
              >
                <Icon size={20} className="text-gray-600 mb-1" />
                <span className="text-xs text-gray-600 text-center">{item.name}</span>
              </a>
            );
          })}
          <button
            onClick={onMenuToggle}
            className="flex flex-col items-center p-2 hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} className="text-gray-600 mb-1" /> : <Menu size={20} className="text-gray-600 mb-1" />}
            <span className="text-xs text-gray-600 text-center">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40  bg-opacity-50" onClick={onMenuToggle} />
      )}
      {isMenuOpen && (
        <div className="md:hidden fixed bottom-16 left-0 right-0 z-50 bg-white mx-2 rounded-t-2xl shadow-xl">
          <div className="p-4">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            <div className="grid grid-cols-3 gap-2">
              <a href="/whats-on" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
                <Calendar size={18} className="mr-3" />
                <span className="font-medium">What's On</span>
              </a>
              <a href="/groups" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
                <Image size={18} className="mr-3" />
                <span className="font-medium">Groups</span>
              </a>
              <a href="/design" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
                <Palette size={18} className="mr-3" />
                <span className="font-medium">Design</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
