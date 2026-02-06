"use client";

import {
  Menu,
  X,
  Home,
  Calendar,
  Image,
  Phone,
  Users,
  Info,
  Palette,
  BookOpen,
  MapPin,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Hire and Info", href: "/hire", icon: Info },
  { name: "Gallery", href: "/gallery", icon: Image },
  { name: "Contact Us", href: "/contact", icon: Phone },
  { name: "Whats On", href: "/whats-on", icon: Calendar },
  { name: "Groups", href: "/groups", icon: Users },
  { name: "Design", href: "/design", icon: Palette },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top info bar */}
      <div className="bg-linear-to-r from-teal-600 to-teal-500 text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-sm sm:text-base">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Lakeview Village Hall
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">01795 476 754</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Great Easthall Estate, Sittingbourne, Kent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <nav className="hidden lg:block px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors text-base font-medium">
                  <Icon size={16} className="mr-2" />
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <button className="hidden lg:flex bg-teal-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-teal-700 transition-all shadow-md hover:shadow-lg active:scale-95 items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Book the Hall
          </button>
        </div>
      </nav>
    </header>
  );
}
