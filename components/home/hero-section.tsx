'use client';

import { ArrowRight, Calendar, Users, MapPin, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-teal-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-linear-to-r from-teal-200 to-blue-200 flex-1"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600">
                  Lakeview Village Hall
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg">
                A modern, accessible community space perfect for events, celebrations, and gatherings in Sittingbourne
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-teal-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-teal-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Modern Facilities</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Community Focus</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-indigo-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Trusted Venue</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Located in the heart of Sittingbourne, our newly built hall features state-of-the-art facilities, beautiful architecture, and versatile spaces perfect for any occasion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-linear-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Your Event
                </button>
                <button className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5" />
                  Visit Us
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="http://www.lakeviewvillagehall.org.uk/s/cc_images/teaserbox_14017428.jpg?t=1577570312"
                alt="Lakeview Village Hall"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-teal-100">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-bold text-gray-900">Premium Venue</span>
                </div>
              </div>
            </div>
             
          </div>
        </div>
      </div>
    </section>
  );
}