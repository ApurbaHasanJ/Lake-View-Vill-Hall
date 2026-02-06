'use client';

import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4">
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-br from-teal-50 via-white to-blue-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase">
                Modern community venue in Sittingbourne
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Lakeview
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600">
                  Village Hall
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">
                A bright, accessible hall with modern facilities and flexible spaces for parties,
                community groups, and celebrations.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="rounded-xl border border-teal-100 bg-white/70 px-4 py-3">
                <p className="font-semibold text-gray-900">Modern hall</p>
                <p className="text-xs mt-1">Light, spacious main hall with glass foyer.</p>
              </div>
              <div className="rounded-xl border border-teal-100 bg-white/70 px-4 py-3">
                <p className="font-semibold text-gray-900">Kitchen & facilities</p>
                <p className="text-xs mt-1">Fully equipped kitchen and welfare facilities.</p>
              </div>
              <div className="rounded-xl border border-teal-100 bg-white/70 px-4 py-3 col-span-2 sm:col-span-1">
                <p className="font-semibold text-gray-900">Outdoor space</p>
                <p className="text-xs mt-1">Large grass area directly by the hall.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-linear-to-r from-teal-600 via-teal-400 to-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Hire the Hall
              </button>
              <button className="bg-white border border-teal-600 text-teal-700 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-200 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                View What’s On
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-64 sm:h-80 lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/drmfkhqso/image/upload/v1770386725/don-kaveen-4LLHJHyXQVk-unsplash_qjkz5k.jpg"
                alt="Lakeview Village Hall"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-black/40 backdrop-blur-sm rounded-2xl px-4 py-3 text-sm text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <p className="font-semibold">Great Easthall, Sittingbourne</p>
                </div>
                <p className="text-xs sm:text-[13px] opacity-90">
                  Modern community hall available for private hire and local groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}