import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    initials: 'SM',
    text: 'Luxe Interior transformed our house into a home. Their attention to detail and understanding of our needs was exceptional. We couldn\'t be happier!'
  },
  {
    name: 'James Chen',
    role: 'CEO, TechCorp',
    initials: 'JC',
    text: 'Professional, creative, and efficient. They delivered our office redesign on time and within budget. Our team loves the new space!'
  },
  {
    name: 'Emily Parker',
    role: 'Restaurant Owner',
    initials: 'EP',
    text: 'Working with Luxe Interior was a dream. They listened to our vision and brought it to life beautifully. Highly recommended!'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
