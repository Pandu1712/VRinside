import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <header className="fixed w-full bg-gradient-to-r from-[#5FBF3] via-[#5FBF3B] to-white backdrop-blur-md shadow-md z-50 border-b border-[#7ED957]/30">
      <nav className="max-w-7xl mx-auto px-6 py-4 h-20 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/Vrlogo1.png"
            alt="VR Inside Interiors Logo"
            className="w-28 sm:w-32 md:w-36 h-auto object-contain"
          />
        </div>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className={`px-3 py-2 rounded-md transition-all ${activeSection === "home"
                ? "bg-[#7ED957] text-white shadow font-semibold"
                : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
              }`}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={() => setActiveSection("services")}
            className={`px-3 py-2 rounded-md transition-all ${activeSection === "services"
                ? "bg-[#7ED957] text-white shadow font-semibold"
                : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
              }`}
          >
            Services
          </a>

          <a
            href="#portfolio"
            onClick={() => setActiveSection("portfolio")}
            className={`px-3 py-2 rounded-md transition-all ${activeSection === "portfolio"
                ? "bg-[#7ED957] text-white shadow font-semibold"
                : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
              }`}
          >
            Projects
          </a>

         {/*  <a
            href="#testimonials"
            onClick={() => setActiveSection("testinomials")}
            className={`px-3 py-2 rounded-md transition-all ${activeSection === "testinomials"
                ? "bg-[#7ED957] text-white shadow font-semibold"
                : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
              }`}
          >
            Reviews
          </a> */}

          <a
            href="#how-it-works"
            onClick={() => setActiveSection("how-it-works")}
            className={`px-3 py-2 rounded-md transition-all ${activeSection === "how-it-works"
                ? "bg-[#7ED957] text-white shadow font-semibold"
                : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
              }`}
          >
            How It Works
          </a>
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className={`px-3 py-2 rounded-md transition-all ${activeSection === "contact"
                ? "bg-[#7ED957] text-white shadow font-semibold"
                : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
              }`}
          >
            Contact
          </a>
        </div>

        {/* CTA Button Desktop */}
        {/*  <button className="hidden md:block bg-[#7ED957] text-white px-6 py-2 rounded-lg shadow hover:bg-[#5FBF3B] transition-all">
          <a
            href="#contact"
            className="text-[white] hover:text-white transition-all"
          >
            Contact
          </a>
        </button> */}

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
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md border-t border-[#7ED957]/40">
          <div className="flex flex-col space-y-4 px-6 py-4 font-medium">
            <a
              href="#home"
              onClick={() => {
                setActiveSection("home");
                setIsOpen(false);
              }}
              className={`px-3 py-2 rounded-md transition-all ${activeSection === "home"
                  ? "bg-[#7ED957] text-white shadow font-semibold"
                  : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
                }`}
            >
              Home
            </a>

            <a
              href="#services"
              onClick={() => {
                setActiveSection("services");
                setIsOpen(false);
              }}
              className={`px-3 py-2 rounded-md transition-all ${activeSection === "services"
                  ? "bg-[#7ED957] text-white shadow font-semibold"
                  : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
                }`}
            >
              Services
            </a>

            <a
              href="#portfolio"
              onClick={() => {
                setActiveSection("portfolio");
                setIsOpen(false);
              }}
              className={`px-3 py-2 rounded-md transition-all ${activeSection === "portfolio"
                  ? "bg-[#7ED957] text-white shadow font-semibold"
                  : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
                }`}
            >
              Portfolio
            </a>

            <a
              href="#testimonials"
              onClick={() => {
                setActiveSection("testinomials");
                setIsOpen(false);
              }}
              className={`px-3 py-2 rounded-md transition-all ${activeSection === "testinomials"
                  ? "bg-[#7ED957] text-white shadow font-semibold"
                  : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
                }`}
            >
              Testimonials
            </a>

            <a
              href="#how-it-works"
              onClick={() => {
                setActiveSection("how-it-works");
                setIsOpen(false);
              }}
              className={`px-3 py-2 rounded-md transition-all ${activeSection === "how-it-works"
                  ? "bg-[#7ED957] text-white shadow font-semibold"
                  : "text-gray-800 hover:bg-[#E3FFD6] hover:text-[#5FBF3B]"
                }`}
            >
              How It Works
            </a>

            {/* Mobile CTA */}
            <button className="bg-[#7ED957] text-white px-6 py-2 rounded-lg shadow hover:bg-[#5FBF3B] transition-all">
              <a
                href="#contact"
                className="text-white hover:text-white transition-all"
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
