import {  MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2] text-[black] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
               <img
    src="../../logo.png"
    alt="Inizio Interiors Logo"
    className="w-18 h-15 object-contain"
  />
         
              <span className="text-xl font-bold">Inizio Interiors</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Designing spaces that blend elegance, comfort, and creativity —
              making every corner truly yours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a
                  href="#home"
                  className="hover:text-amber-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-amber-500 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-black">Our Services</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Residential Interiors</li>
              <li>Commercial Design</li>
              <li>Custom Furniture</li>
              <li>Lighting Solutions</li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="font-bold mb-4 text-black">Contact Us</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#433673] mt-0.5" />
                <span>
                  23, Sunrise Avenue,<br />
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#433673]" />
                <a href="tel:+919600514632" className="hover:text-[#362C59] transition-colors">
                  +91 96005 14632
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#433673]" />
                <a href="mailto:info@iniziointeriors.com" className="hover:text-[#362C59] transition-colors">
                  info@iniziointeriors.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
            <a
  href="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full text-gray-600 hover:bg-[#8580A6] hover:text-white transition-colors duration-300 flex items-center justify-center"
>
  <Facebook className="w-5 h-5" />
</a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
             className="p-2 rounded-full text-gray-600 hover:bg-[#8580A6] hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
             className="p-2 rounded-full text-gray-600 hover:bg-[#8580A6] hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-700 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Inizio Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
