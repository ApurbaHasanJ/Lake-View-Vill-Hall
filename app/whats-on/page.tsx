import { Header } from '../../components/shared/header';
import { Breadcrumb } from '../../components/shared/breadcrumb';
import { Footer } from '../../components/shared/footer';
import { Calendar, Clock, Coffee, Film, Heart, Book, Target, Star, ArrowRight, Users } from 'lucide-react';

export default function WhatsOn() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Breadcrumb route="What's On"/>
      
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-teal-50 via-white to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Calendar className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            What's On
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Discover upcoming events, activities, and programs at Lakeview Village Hall
          </p>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Event Calendar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest community events and activities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weekly Events */}
            <div className="lg:col-span-2 space-y-8">
              <div className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 border border-teal-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Weekly Events</h3>
                    <p className="text-teal-600 font-semibold">Regular Activities</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center">
                        <Coffee className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Coffee & Craft</h4>
                        <p className="text-teal-600 font-semibold text-sm">Every Monday</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>10:00 AM - 12:00 PM</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Join us for coffee, crafts, and conversation
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                        <Film className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Film Night</h4>
                        <p className="text-blue-600 font-semibold text-sm">First Friday</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>7:00 PM - 9:30 PM</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Classic films and popcorn with fellow enthusiasts
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Community Yoga</h4>
                        <p className="text-indigo-600 font-semibold text-sm">Wed & Thu</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>2:00 PM - 3:15 PM</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Gentle yoga for all ages and fitness levels
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                        <Book className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Book Club</h4>
                        <p className="text-green-600 font-semibold text-sm">Monthly</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Contact for dates</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Discuss your favorite reads with fellow book lovers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Events */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Special Events</h3>
                    <p className="text-orange-600 font-semibold">Unique Activities</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Quiz Night</h4>
                        <p className="text-orange-600 font-semibold text-sm">3rd Saturday</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>7:00 PM - 10:00 PM</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Test your knowledge in a friendly quiz competition
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Seasonal Events</h4>
                        <p className="text-purple-600 font-semibold text-sm">Year-round</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Various dates</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Holiday celebrations and community gatherings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Want to Organize an Event?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We'd love to help you bring your community together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Event
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-200 flex items-center justify-center gap-2">
                View Full Calendar
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
