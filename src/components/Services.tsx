import { useState } from "react";
import {
  Sofa,
  Lightbulb,
  Users,
  Building2,
  Store,
  Sparkles,
  ChevronRight,
  X,
} from "lucide-react";

// 👇 Define the TypeScript type for your services
type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  gallery: string[];
};

const services: Service[] = [
  {
    icon: Sofa,
    title: "Residential Interiors",
    description:
      "Transform your home into a masterpiece of comfort and elegance. We specialize in living rooms, bedrooms, modular kitchens, and bespoke furniture layouts.",
    image:
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      "https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    ],
  },
  {
    icon: Users,
    title: "Commercial & Office Design",
    description:
      "Functional, aesthetic, and inspiring workspaces for offices, studios, and showrooms that boost productivity and brand identity.",
    image:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      "https://images.pexels.com/photos/256658/pexels-photo-256658.jpeg",
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
      "https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg",
    ],
  },
  {
    icon: Store,
    title: "Spa & Salon Design",
    description:
      "Create relaxing and luxurious environments for your clients with calming color palettes, efficient layouts, and premium finishes.",
    image:
      "https://i.pinimg.com/originals/a8/98/04/a898049e8af3fa134d37876e26003236.jpg",
    gallery: [
      "https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg",
      "https://images.pexels.com/photos/8534272/pexels-photo-8534272.jpeg",
      "https://images.pexels.com/photos/8534061/pexels-photo-8534061.jpeg",
      "https://images.pexels.com/photos/8534274/pexels-photo-8534274.jpeg",
      "https://images.pexels.com/photos/8534063/pexels-photo-8534063.jpeg",
    ],
  },
  {
    icon: Building2,
    title: "Restaurant & Café Interiors",
    description:
      "Designs that capture attention — blending ambiance, lighting, and seating flow for unforgettable dining experiences.",
    image:
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
      "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg",
      "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg",
      "https://images.pexels.com/photos/2318016/pexels-photo-2318016.jpeg",
      "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
    ],
  },
  {
    icon: Lightbulb,
    title: "Lighting & Decor Solutions",
    description:
      "Expert lighting setups that highlight architectural details and enhance every mood with ambient, accent, and task lighting combinations.",
    image:
      "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg",
      "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
    ],
  },
  {
    icon: Sparkles,
    title: "Featured Custom Products",
    description:
      "From bespoke furniture to exclusive décor pieces, explore our curated collection crafted to elevate every corner of your space.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
      "https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    ],
  },
];

export default function Services() {
  // 👇 Type is either a Service object or null
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 px-6 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Interior Design Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of design services crafted to bring
            sophistication, comfort, and innovation to every space.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-amber-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6">
          <div className="bg-white rounded-3xl max-w-5xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedService(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedService.description}
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {selectedService.gallery.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl">
                  <img
                    src={img}
                    alt={`${selectedService.title} ${i + 1}`}
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
