import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-teal-100/20 to-transparent"></div>
              <Image
                src="http://www.lakeviewvillagehall.org.uk/s/cc_images/teaserbox_14017428.jpg?t=1577570312"
                alt="Lakeview Village Hall interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase">
                About Lakeview Village Hall
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Your modern community space
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                <p>
                  Lakeview Village Hall is a new community hall located on the edge of the Great Easthall estate on the outskirts of Sittingbourne. The hall has kitchen and welfare facilities needed for any event.
                </p>
              </div>
              
              <p>
                There is a large grass area that is connected to the hall to allow your party to spread outside. The hall is available to rent for any club, organisation or family event.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <p>
                  The hall has a very modern design look and incorporates a large glass foyer at the entrance, the kitchen facility opens to this area. Beyond the foyer the hall is accessed through a corridor where the toilet facilities are situated, through to the main hall.
                </p>
              </div>
              
              <p>
                The hall is large and filled with light from the light cannons built into the roof. The construction materials are renewable with local materials and are designed to be environmentally friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
