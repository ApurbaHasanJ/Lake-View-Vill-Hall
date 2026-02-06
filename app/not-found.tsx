"use client"
import Link from 'next/link';
import { Home, ArrowLeft, Search, Calendar, Mail } from 'lucide-react';
import { Header } from '../components/shared/header';
import { Footer } from '../components/shared/footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Graphic */}
          <div className="relative mb-12">
            <div className="text-9xl lg:text-[12rem] font-bold text-gray-200 relative">
              404
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl lg:text-8xl font-bold bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  404
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            The page you're looking for seems to have vanished into thin air. 
            Don't worry, even the best venues sometimes lose their way!
          </p>

          {/* Action Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link 
              href="/"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-teal-300"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <Home className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                Go Home
              </h3>
              <p className="text-sm text-gray-600">
                Back to our main page
              </p>
            </Link>

            <Link 
              href="/contact"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-blue-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Contact Us
              </h3>
              <p className="text-sm text-gray-600">
                We'll help you find it
              </p>
            </Link>

            <Link 
              href="/whats-on"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-purple-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                What's On
              </h3>
              <p className="text-sm text-gray-600">
                Check our events
              </p>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Or try searching for what you need:
            </h3>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search our website..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="my-12 py-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              You might be looking for:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                href="/hire" 
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors p-2 rounded-lg hover:bg-teal-50"
              >
                Hall Hire
              </Link>
              <Link 
                href="/gallery" 
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors p-2 rounded-lg hover:bg-teal-50"
              >
                Gallery
              </Link>
              <Link 
                href="/whats-on" 
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors p-2 rounded-lg hover:bg-teal-50"
              >
                Events
              </Link>
              <Link 
                href="/groups" 
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors p-2 rounded-lg hover:bg-teal-50"
              >
                Groups
              </Link>
              <Link 
                href="/design" 
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors p-2 rounded-lg hover:bg-teal-50"
              >
                Design
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors p-2 rounded-lg hover:bg-teal-50"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
