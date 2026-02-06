'use client';

import { Building2, Calendar, MapPin, Phone } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our facilities, upcoming events, and location details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Hall Hire */}
          <div className="group bg-white rounded-2xl p-8 sm:p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-100 p-4 rounded-xl">
                <Building2 className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Hall Hire</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Spacious, modern hall with kitchen facilities. Perfect for family gatherings, clubs, and community events.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-900">Mon-Fri</span>
                <span className="text-teal-600 font-bold">8am - 10pm</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-900">Saturday</span>
                <span className="text-teal-600 font-bold">12pm - 11pm</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-gray-900">Sunday</span>
                <span className="text-teal-600 font-bold">12pm - 6pm</span>
              </div>
            </div>
            <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Booking Info
            </button>
          </div>

          {/* What's On */}
          <div className="group bg-white rounded-2xl p-8 sm:p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-100 p-4 rounded-xl">
                <Calendar className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">What's On</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Coffee mornings, film clubs, and community groups. Check our calendar for upcoming events and activities.
            </p>
            <div className="space-y-3 mb-8">
              <p className="font-semibold text-gray-900 mb-4">Regular Events:</p>
              <ul className="text-gray-600 space-y-2 text-lg">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Coffee & Craft Mornings
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Film Nights
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Community Groups
                </li>
              </ul>
            </div>
            <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              See Events Calendar
            </button>
          </div>

          {/* Location */}
          <div className="group bg-white rounded-2xl p-8 sm:p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-100 p-4 rounded-xl">
                <MapPin className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Location</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Conveniently located on the Great Easthall estate with easy parking and public transport access.
            </p>
            <div className="space-y-3 mb-8 bg-teal-50 p-6 rounded-xl">
              <p className="font-semibold text-gray-900 mb-4">Lakeview Village Hall</p>
              <p className="text-gray-700">Great Easthall Way</p>
              <p className="text-gray-600">Sittingbourne, Kent ME10 3TF</p>
            </div>
            <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
