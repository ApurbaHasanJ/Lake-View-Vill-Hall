import { Header } from '../../components/shared/header';
import { Breadcrumb } from '../../components/shared/breadcrumb';
import { Footer } from '../../components/shared/footer';
import { Palette, Camera, Video, Brush, Calendar, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function Design() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Breadcrumb route="Design"/>
      
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-teal-50 via-white to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Palette className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Design Services
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Professional design solutions that bring your events to life
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete design services from concept to execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Graphic Design */}
            <div className="group relative bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 border border-teal-200 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4 opacity-10">
                <Brush className="w-24 h-24 text-teal-600" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Brush className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Graphic Design</h3>
                <p className="text-gray-700 mb-6">
                  Eye-catching designs that make your event memorable
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">Event branding & logos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">Digital invitations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">Print materials</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Photography */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4 opacity-10">
                <Camera className="w-24 h-24 text-blue-600" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Photography</h3>
                <p className="text-gray-700 mb-6">
                  Professional coverage that captures every moment
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Event photography</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Portrait sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Photo editing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Production */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 border border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4 opacity-10">
                <Video className="w-24 h-24 text-indigo-600" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Production</h3>
                <p className="text-gray-700 mb-6">
                  Cinematic videos that tell your story
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">Event filming</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">Video editing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">Promotional videos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple steps to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your vision and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                Our team creates custom concepts
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Review</h3>
              <p className="text-gray-600">
                You provide feedback and we refine
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery</h3>
              <p className="text-gray-600">
                Final designs delivered on time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Examples of our design work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Brush className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold">Event Branding</h3>
                  <p className="text-white/80">Community Fair Design</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Camera className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold">Photography</h3>
                  <p className="text-white/80">Wedding Coverage</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold">Video Production</h3>
                  <p className="text-white/80">Event Highlights</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 mx-auto">
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What our clients say about our design services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The design team created beautiful branding for our community event. Professional, creative, and delivered on time!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Community Organizer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Amazing photography and video coverage! They captured every special moment of our wedding day perfectly."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael & Emma</p>
                  <p className="text-sm text-gray-600">Wedding Couple</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The promotional video they created for our event was outstanding. Highly professional and engaging!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">David Chen</p>
                  <p className="text-sm text-gray-600">Event Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our design team bring your vision to life with professional, creative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-200 flex items-center justify-center gap-2">
                View Portfolio
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
