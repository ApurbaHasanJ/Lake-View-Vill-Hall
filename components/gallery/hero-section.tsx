'use client';

import { ArrowRight, Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-to-r from-teal-200 to-blue-200 flex-1"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Explore Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Gallery
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg">
                Discover the beauty and versatility of Lakeview Village Hall through our curated collection of events and celebrations
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-teal-100">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-teal-600" />
                <h3 className="text-xl font-bold text-gray-900">Our Space</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Located in the heart of Sittingbourne, our modern venue features state-of-the-art facilities, beautiful architecture, and versatile spaces perfect for any occasion. From intimate gatherings to grand celebrations.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <ImageIcon className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Modern Facilities</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Camera className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Beautiful Spaces</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3">
                View Gallery
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105">
                Book a Tour
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-4 lg:space-y-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src="http://www.lakeviewvillagehall.org.uk/s/cc_images/teaserbox_14017428.jpg?t=1577570312"
                    alt="Lakeview Village Hall exterior"
                    className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-32 lg:h-40 bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-teal-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-32 lg:h-40 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-indigo-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <Camera className="w-10 h-10 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
              <ImageIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
