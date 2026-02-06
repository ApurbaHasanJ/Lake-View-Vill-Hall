import { Clock, FileText, BookOpenCheck } from 'lucide-react';

export function BookingInfo() {
  return (
    <section className="py-20 px-4 bg-teal-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hall Hire Information
          </h2>
          <p className="text-xl text-gray-600">
            Easy booking for your community events and gatherings
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="text-center space-y-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The hall can be booked for hire. The hall will be hired on an hourly basis as needed by the hirer, 
              although at weekends there is a minimum of a five hour block booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                Opening Times
              </h3>
              <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Monday to Friday</span>
                  <span className="text-teal-600 font-bold">8 am – 10 pm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-teal-600 font-bold">Midday - 11pm</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-teal-600 font-bold">Midday - 6 pm</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <BookOpenCheck className="w-5 h-5 text-teal-600" />
                </div>
                Quick Links
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-linear-to-r from-teal-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  Download Booking Policy
                </button>
                <button className="w-full border-2 border-teal-600 text-teal-600 px-6 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-200 transform hover:scale-105 text-lg flex items-center justify-center gap-2">
                  <BookOpenCheck className="w-5 h-5" />
                  Booking Application Form
                </button>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-200">
            <div className="bg-teal-100 p-6 rounded-xl inline-block">
              <p className="text-sm text-gray-700 font-medium">
                The hall is operated by the Lakeview Village Hall Trust, a registered UK charity (1172312)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
