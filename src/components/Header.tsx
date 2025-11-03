import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Home className="w-8 h-8 text-amber-600" />
          <span className="text-2xl font-bold text-gray-900">Luxe Interior</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
          <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</a>
          <a href="#portfolio" className="text-gray-700 hover:text-amber-600 transition-colors">Portfolio</a>
          <a href="#testimonials" className="text-gray-700 hover:text-amber-600 transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
        </div>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
          Get Started
        </button>
      </nav>
    </header>
  );
}
