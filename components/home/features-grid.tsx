import { Building2, Accessibility, Trees, Leaf, Users, CalendarDays } from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      title: "Modern Facilities",
      description: "Large hall with glass foyer, kitchen, and welfare facilities",
      icon: <Building2 className="w-7 h-7" />,
      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Accessible Design",
      description: "Fully accessible for people of all abilities",
      icon: <Accessibility className="w-7 h-7" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Outdoor Space",
      description: "Large grass area perfect for outdoor events",
      icon: <Trees className="w-7 h-7" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Eco-Friendly",
      description: "Built with renewable materials and grass roof",
      icon: <Leaf className="w-7 h-7" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Community Focus",
      description: "Run by local volunteers for the community",
      icon: <Users className="w-7 h-7" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Flexible Booking",
      description: "Available for clubs, organisations, and family events",
      icon: <CalendarDays className="w-7 h-7" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hall Features & Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for successful community events and gatherings
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
