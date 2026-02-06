'use client';

import { Calendar, Clock, Users } from 'lucide-react';

export function NewsEventsGrid() {
  const events = [
    {
      id: 1,
      title: 'Coffee & Craft Morning',
      date: 'Every Monday',
      time: '10:00 AM - 12:00 PM',
      description: 'Join us for coffee and arts & crafts. A wonderful way to meet friends and community members.',
      icon: Users,
    },
    {
      id: 2,
      title: 'Film Night',
      date: 'First Friday of each month',
      time: '7:00 PM - 9:30 PM',
      description: 'Classic films and popcorn. A cozy evening with friends and fellow film enthusiasts.',
      icon: Calendar,
    },
    {
      id: 3,
      title: 'Community Yoga Class',
      date: 'Wednesday & Thursday',
      time: '2:00 PM - 3:15 PM',
      description: 'Gentle yoga suitable for all ages and fitness levels. Improve flexibility and wellness.',
      icon: Clock,
    },
    {
      id: 4,
      title: 'Garden Club Meeting',
      date: 'Second Saturday',
      time: '10:00 AM - 12:00 PM',
      description: 'Share gardening tips and swap plants with fellow gardeners in our community.',
      icon: Users,
    },
    {
      id: 5,
      title: 'Quiz Night',
      date: 'Third Saturday',
      time: '7:00 PM - 10:00 PM',
      description: 'Test your knowledge in a friendly quiz competition. Teams welcome!',
      icon: Calendar,
    },
    {
      id: 6,
      title: 'Book Club Discussion',
      date: 'Monthly - Contact for dates',
      time: 'Varies',
      description: 'Discuss your favourite reads with local book lovers. New members always welcome.',
      icon: Clock,
    },
  ];

  return (
    <section id="news" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what's happening at Lakeview Village Hall this month
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event) => {
            const IconComponent = event.icon;
            return (
              <div key={event.id} className="group bg-white rounded-2xl p-8 sm:p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-teal-100 p-4 rounded-xl">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    {event.title}
                  </h3>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-base sm:text-lg font-semibold text-teal-600 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600">
                    {event.time}
                  </p>
                </div>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-teal-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to organise your own event?</h3>
            <p className="text-lg text-white/90 mb-6">
              We'd love to help you bring your community together!
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
