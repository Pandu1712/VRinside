import { Sofa, Lightbulb, Users, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Sofa,
    title: 'Residential Design',
    description: 'Create your perfect living space with custom furniture selection, color schemes, and layouts that reflect your style.'
  },
  {
    icon: Users,
    title: 'Commercial Spaces',
    description: 'Professional office design that enhances productivity and leaves lasting impressions on clients and employees.'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Expert lighting solutions that set the perfect mood and highlight your space\'s best features beautifully.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your unique vision and needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="text-amber-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
