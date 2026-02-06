'use client';

import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-linear-to-br from-teal-700 to-teal-800 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Hall Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Lakeview Village Hall</h3>
              <p className="text-lg leading-relaxed opacity-90">
                At the heart of our community, bringing people together.
              </p>
            </div>
            <div className="text-sm text-white/80 space-y-1">
              <p>Registered UK Charity No 1172312</p>
              <p>Operated by Lakeview Village Hall Trust</p>
              <p className="pt-2">Site Updated: 14/08/2025</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xl sm:text-2xl font-bold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Phone</p>
                  <p className="text-white/80">01795 476 754</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Address</p>
                  <p className="text-white/80">Great Easthall Way</p>
                  <p className="text-white/80">Sittingbourne, Kent ME10 3TF</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-white/80">info@lakeviewhall.org.uk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Times */}
          <div className="space-y-6">
            <h4 className="text-xl sm:text-2xl font-bold">Opening Times</h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-lg">Monday - Friday</p>
                <p className="text-white/80">8:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Saturday</p>
                <p className="text-white/80">12:00 PM - 11:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Sunday</p>
                <p className="text-white/80">12:00 PM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8"></div>

        {/* Social & Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label="Twitter">
              <Twitter className="w-7 h-7" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
              <Instagram className="w-7 h-7" />
            </a>
          </div>

          {/* Bottom Text */}
          <div className="text-center md:text-right">
            <p className="text-white/80 text-sm">
              © 2025 Lakeview Village Hall Trust. All rights reserved.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Book or Learn More?</h3>
          <p className="text-lg mb-6 opacity-90">
            Call us today or visit us in person to discuss your event.
          </p>
          <button className="bg-white text-teal-700 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-95">
            Book the Hall Now
          </button>
        </div>
      </div>
    </footer>
  );
}
