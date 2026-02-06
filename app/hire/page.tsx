import { Header } from "../../components/shared/header";
import { Breadcrumb } from "../../components/shared/breadcrumb";
import { Footer } from "../../components/shared/footer";
import { Calendar, Clock, Mail, Phone, Users, CheckCircle, AlertCircle, Info, ArrowRight, CreditCard, FileText } from 'lucide-react';

export default function Hire() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Breadcrumb route="Hire" />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-teal-50 via-white to-blue-50 py-20 px-4">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Hall Hire
                    </h1>
                    <p className="text-xl text-teal-600 font-semibold">Information & Booking</p>
                  </div>
                </div>
                
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  Book our modern community hall for your events, celebrations, and gatherings
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-teal-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-teal-600" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl">
                    <Mail className="w-5 h-5 text-teal-600" />
                    <div>
                      <span className="font-semibold text-gray-900">Email:</span>
                      <span className="text-gray-700 ml-2">bookings.lakeview@gmail.com</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <span className="font-semibold text-gray-900">Phone:</span>
                      <span className="text-gray-700 ml-2">01795 476 754</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <Calendar className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Ready to Book?</h3>
                  <p className="text-gray-700">Check availability and secure your date</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Flexible booking options</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Competitive rates</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Modern facilities</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 mt-6">
                  Check Availability
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hire Rates & Terms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Affordable rates for community groups and private events
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Saturday Pricing */}
            <div className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 border border-teal-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Saturday</h3>
                  <p className="text-teal-600 font-semibold">Peak Day</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-teal-200">
                  <span className="font-semibold text-gray-900">Time</span>
                  <span className="text-teal-600 font-bold">Midday - 11:00pm</span>
                </div>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-teal-600" />
                    <p className="text-lg text-gray-700">
                      <span className="font-semibold">Minimum 5 hours:</span> £95
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <p className="text-lg text-gray-700">
                      <span className="font-semibold">Additional:</span> £15/hour
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      <span className="font-semibold text-yellow-800">Weekend Surcharge</span>
                    </div>
                    <p className="text-sm text-yellow-700">£150 deposit for hires between 12pm-8pm</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="font-semibold text-red-800">Late Fee</span>
                    </div>
                    <p className="text-sm text-red-700">£500 if hire extends after 8pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunday Pricing */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sunday</h3>
                  <p className="text-blue-600 font-semibold">Weekend Rate</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="font-semibold text-gray-900">Time</span>
                  <span className="text-blue-600 font-bold">Midday - 6:00pm</span>
                </div>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    <p className="text-lg text-gray-700">
                      <span className="font-semibold">Minimum 3 hours:</span> £65
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <p className="text-lg text-gray-700">
                      <span className="font-semibold">Additional:</span> £15/hour
                    </p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">Sunday Deposit</span>
                  </div>
                  <p className="text-sm text-yellow-700">£150 deposit required for all Sunday hires</p>
                </div>
              </div>
            </div>

            {/* Weekday Pricing */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200 hover:shadow-xl transition-all duration-300 lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Weekdays</h3>
                  <p className="text-green-600 font-semibold">Best Value</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-green-200">
                  <span className="font-semibold text-gray-900">Time</span>
                  <span className="text-green-600 font-bold">8:00am - 10:00pm</span>
                </div>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-green-600" />
                    <p className="text-lg text-gray-700">
                      <span className="font-semibold">Hourly Rate:</span> £15/hour
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-xl border border-green-200 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-800">Best Value</span>
                  </div>
                  <p className="text-sm text-green-700">Regular weekday rates available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How to Book
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple process to secure your preferred date and time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">
                Email or call to check availability
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Form</h3>
              <p className="text-gray-600">
                We'll send booking agreement and terms
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pay Deposit</h3>
              <p className="text-gray-600">
                Secure your date with deposit payment
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confirmation</h3>
              <p className="text-gray-600">
                Receive final booking confirmation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Book Your Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team today to check availability and secure your preferred date
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Email Booking
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hall Capacity & Rules */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hall Capacity
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                  <span className="text-xl font-bold text-orange-600">
                    100 People
                  </span>
                </div>
                <p className="text-gray-700">
                  Maximum capacity for safety and comfort
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Important Rules
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full shrink-0 mt-1"></div>
                  <span>No parties for under 13s (strict policy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full shrink-0 mt-1"></div>
                  <span>£150 deposit required for weekend late hires</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full shrink-0 mt-1"></div>
                  <span>£500 fee for hires extending after 8pm</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border-l-4 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hall Care
              </h3>
              <ul className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full shrink-0 mt-1"></div>
                  <span>Hall must be left tidy</span>
                </div>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full shrink-0 mt-1"></div>
                  <span>No damage to hall or contents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full shrink-0 mt-1"></div>
                  <span>Setting up/cleaning time included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
