'use client';

import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb({route}: {route: string}) {
  return (
    <nav
      className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-3 border-b border-gray-300"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-base sm:text-lg">
        <a
          href="/"
          className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </a>
        <ChevronRight className="w-5 h-5 text-gray-400" />
        <span className="text-gray-700 font-medium">{route}</span>
      </div>
    </nav>
  );
}
