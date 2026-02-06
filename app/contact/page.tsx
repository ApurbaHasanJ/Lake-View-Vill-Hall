import { Header } from '../../components/shared/header';
import { Breadcrumb } from '../../components/shared/breadcrumb';
import { Footer } from '../../components/shared/footer';
import { Mail, Phone, MapPin, Clock, Send, Users, Calendar, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Breadcrumb route="Contact" />
      
      {/* Contact Hero */}
      <section className="relative bg-linear-to-br from-teal-50 via-white to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We're here to help make your event unforgettable. Reach out to us for bookings, inquiries, or tours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Bookings Card */}
            <div className="group relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4 opacity-20">
                <Calendar className="w-16 h-16" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Bookings</h3>
                <p className="text-white/90 mb-6">
                  Reserve our hall for your special event
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white/80" />
                    <span className="text-sm">bookings.lakeview@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-white/80" />
                    <span className="text-sm">01795 476 754</span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Inquiries Card */}
            <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4 opacity-20">
                <MessageSquare className="w-16 h-16" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">General Inquiries</h3>
                <p className="text-white/90 mb-6">
                  Questions about our facilities or services
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white/80" />
                    <span className="text-sm">lakeview.easthall@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4 opacity-20">
                <MapPin className="w-16 h-16" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                <p className="text-white/90 mb-6">
                  Come see our beautiful venue
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-white/80" />
                    <span className="text-sm">Great Easthall Way, Sittingbourne</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-white/80" />
                    <span className="text-sm">Mon-Fri: 9am-5pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="01795 123456"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 text-gray-900"
                      >
                        <option value="">Select a topic</option>
                        <option value="booking">Hall Booking</option>
                        <option value="tour">Facility Tour</option>
                        <option value="event">Event Information</option>
                        <option value="general">General Question</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="Tell us about your event or question..."
                    ></textarea>
                  </div>

                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                    <p className="text-sm text-teal-800">
                      <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-teal-600 font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-teal-600 font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-400 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Need Help Fast?</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    For urgent inquiries or immediate assistance, call us directly:
                  </p>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-200">
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-teal-600" />
                      <div>
                        <p className="text-sm text-gray-600">Call us now</p>
                        <p className="text-2xl font-bold text-gray-900">01795 476 754</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Find Us</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="font-medium text-gray-900">Lakeview Village Hall</p>
                  <p className="text-gray-600">Great Easthall Way</p>
                  <p className="text-gray-600">Sittingbourne, Kent ME10 3TF</p>
                  
                  <div className="pt-4">
                    <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
