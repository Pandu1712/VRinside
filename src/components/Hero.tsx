import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transform Your Space Into a Dream Home
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We create stunning interiors that reflect your personality and elevate your lifestyle with timeless elegance and modern sophistication.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Book Consultation</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-linear-to-br from-amber-100 to-amber-50 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern interior design"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
