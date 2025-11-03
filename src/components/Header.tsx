import {  Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
         <img
    src="../../logo.png"
    alt="Inizio Interiors Logo"
    className="w-18 h-15 object-contain"
  />
          <span className="text-2xl font-bold text-gray-900">
            Inizio Interiors
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-[#362C59] transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-[#362C59] transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-gray-700 hover:text-[#362C59] transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-[#362C59] transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-[#362C59] transition-colors"
          >
            How It Works
          </a>
         
        </div>

        {/* CTA Button (Desktop only) */}
        <button className="hidden md:block bg-[#433673] text-white px-6 py-2 rounded-lg hover:bg-[#362C59] transition-colors">
          <a
            href="#contact"
            className="text-[white] hover:text-[white] transition-colors"
          >
            Contact
          </a>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-[#362C59] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#362C59] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-[#362C59] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
             className="text-gray-700 hover:text-[#362C59] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#how-it-works"
             className="text-gray-700 hover:text-[#362C59] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
           

            {/* Mobile CTA Button */}
            <button className="bg-[#433673] text-white px-6 py-2 rounded-lg hover:bg-[#362C59] transition-colors">
              <a
              href="#contact"
              className="text-white hover:text-[white] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
