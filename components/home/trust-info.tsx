import { Landmark, Users, Leaf, Facebook, Twitter, MessageCircle } from 'lucide-react';

export function TrustInfo() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lakeview Village Hall Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving the Great Easthall community with dedication and care
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-teal-50 p-8 rounded-2xl border-l-4 border-teal-500">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
              <Landmark className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              The hall is operated by the Lakeview Village Hall Trust, a registered UK charity (1172312) 
              and is a group of volunteers who operate the hall on behalf of the community.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Focus</h3>
            <p className="text-gray-700 leading-relaxed">
              The members of the trust are residents of the Great Easthall estate and their main goal is to ensure that 
              the hall serves the community well.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Future</h3>
            <p className="text-gray-700 leading-relaxed">
              The hall has been built with funds given to the community by the developers of the Great Easthall estate 
              using the latest construction technology and renewable materials.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-r from-teal-600 to-teal-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">Get Social With Us</h3>
          <p className="text-lg mb-8 opacity-90">
            Stay connected and join our community activities
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 flex items-center gap-2">
              <Facebook className="w-5 h-5" />
              Facebook
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 flex items-center gap-2">
              <Twitter className="w-5 h-5" />
              Twitter
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80">
              🏛️ Registered UK Charity No: 1172312
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
