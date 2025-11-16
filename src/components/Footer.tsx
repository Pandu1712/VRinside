import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#DFFFF0] via-white to-[#DFFFF0] text-gray-800 py-14 px-6 border-t border-[#7ED957]/40">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/VrLogo.jpg"
                alt="Inizio Interiors Logo"
                className="w-28 h-auto object-contain"
              />
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              We create elegant, functional, and modern living spaces with high-quality workmanship and premium design standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#5FBF3B] transition-colors font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>Residential Interiors</li>
              <li>Commercial Designing</li>
              <li>Custom Furniture</li>
              <li>Lighting & Aesthetic Setup</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#5FBF3B] mt-0.5" />
                <span>Flat No 1302, Block I, Aditya Imperial Heights, Hafeezpet, Hyderabad, 500049</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#5FBF3B]" />
                <a href="tel:+919999999999" className="hover:text-[#5FBF3B] font-medium">
                  +91 9705666101 <br/>+91 9703484448
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#5FBF3B]" />
                <a href="mailto:vrinside48@gmail.com " className="hover:text-[#5FBF3B] font-medium">
vrinside48@gmail.com 
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com" },
                { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com" },
                { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white border border-gray-300 shadow hover:border-[#5FBF3B] hover:text-[#5FBF3B] transition-all duration-300 flex items-center justify-center"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#7ED957]/40 pt-6 text-center text-sm font-medium text-gray-700">
          © {new Date().getFullYear()} <span className="text-[#5FBF3B] font-semibold">VR Inside Interiors</span>. All Rights Reserved.
        </div>

        {/* Made With Love by StaffArc */}
        <div className="mt-4 text-center text-xs flex justify-center items-center gap-1 text-gray-700">
          Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-600 hover:underline font-semibold"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-4 w-4 object-contain"
            />
            StaffArc
          </a>
        </div>

      </div>
    </footer>
  );
}
