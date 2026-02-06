'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, MapPin, Clock, Star, X } from 'lucide-react';

export function GalleryBento() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Main Hall',
      category: 'Facilities',
      image: 'https://res.cloudinary.com/drmfkhqso/image/upload/v1770386725/don-kaveen-4LLHJHyXQVk-unsplash_qjkz5k.jpg',
      description: 'Spacious and bright main hall perfect for large events',
      capacity: '100 guests',
      features: ['Modern AV equipment', 'Accessible design', 'Flexible seating'],
      icon: Calendar,
      featured: true
    },
    {
      id: 2,
      title: 'Community Events',
      category: 'Activities',
      image: 'https://res.cloudinary.com/drmfkhqso/image/upload/v1770386725/don-kaveen-4LLHJHyXQVk-unsplash_qjkz5k.jpg',
      description: 'Regular community gatherings and special celebrations',
      capacity: 'Varies',
      features: ['Weekly coffee mornings', 'Film nights', 'Seasonal events'],
      icon: Users,
      featured: false
    },
    {
      id: 3,
      title: 'Modern Kitchen',
      category: 'Facilities',
      image: 'https://res.cloudinary.com/drmfkhqso/image/upload/v1770386725/don-kaveen-4LLHJHyXQVk-unsplash_qjkz5k.jpg',
      description: 'Fully equipped kitchen for catering and events',
      capacity: 'N/A',
      features: ['Professional appliances', 'Ample counter space', 'Storage facilities'],
      icon: Clock,
      featured: false
    },
    {
      id: 4,
      title: 'Garden Area',
      category: 'Outdoor',
      image: 'https://res.cloudinary.com/drmfkhqso/image/upload/v1770386725/don-kaveen-4LLHJHyXQVk-unsplash_qjkz5k.jpg',
      description: 'Beautiful outdoor space for summer events',
      capacity: '50 guests',
      features: ['Lawn area', 'Garden seating', 'Scenic views'],
      icon: MapPin,
      featured: false
    },
    {
      id: 5,
      title: 'Meeting Rooms',
      category: 'Facilities',
      image: 'https://res.cloudinary.com/drmfkhqso/image/upload/v1770386725/don-kaveen-4LLHJHyXQVk-unsplash_qjkz5k.jpg',
      description: 'Comfortable spaces for smaller gatherings',
      capacity: '20 guests',
      features: ['Flexible layouts', 'Natural light', 'Modern furniture'],
      icon: Users,
      featured: false
    },
    {
      id: 6,
      title: 'Event Services',
      category: 'Services',
      image: 'https://res.cloudinary.com/drmfkhqso/image/upload/v1770386725/don-kaveen-4LLHJHyXQVk-unsplash_qjkz5k.jpg',
      description: 'Complete event planning and coordination',
      capacity: 'N/A',
      features: ['Event setup', 'Technical support', 'Cleaning services'],
      icon: Star,
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Facilities':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Activities':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Outdoor':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Services':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our versatile venue spaces perfect for any occasion
          </p>
        </div>

        {/* Featured Space */}
        <div className="mb-16">
          {galleryItems.filter(item => item.featured).map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setSelectedImage(item)}>
                <div className="relative h-96 lg:h-[500px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-8 lg:p-12">
                    <div className="text-white max-w-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-3">{item.title}</h3>
                      <p className="text-lg opacity-90 mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          <span className="font-medium">{item.capacity}</span>
                        </div>
                        <button className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.filter(item => !item.featured).map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{item.capacity}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {item.features.length > 2 && (
                      <span className="text-xs text-gray-500">+{item.features.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center">
          <div className="bg-linear-to-r from-teal-50 to-blue-50 rounded-3xl p-12 max-w-4xl mx-auto border border-teal-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Visit?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a tour to see our spaces in person and discuss your event needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book a Tour
              </button>
              <button className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
            
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  {React.createElement(selectedImage.icon, { className: "w-6 h-6 text-teal-600" })}
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getCategoryColor(selectedImage.category)}`}>
                  {selectedImage.category}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{selectedImage.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{selectedImage.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Capacity</h4>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>{selectedImage.capacity}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <ul className="space-y-1">
                    {selectedImage.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-colors">
                Inquire About This Space
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
