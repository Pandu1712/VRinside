import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-0">
          <img
            src="../../1.1.png"
            alt="Inizio Interiors Logo"
            className="w-28 sm:w-32 md:w-36 h-auto object-contain -my-2"
          />

          <div className="flex flex-col leading-none ml-[-4px] whitespace-nowrap">
            <span
              className="text-lg sm:text-xl md:text-2xl font-semibold uppercase text-[#362C59]"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px",
              }}
            >
              Inizio Interiors
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className={`${
              activeSection === "home"
                ? "text-[#362C59] font-semibold"
                : "text-gray-700"
            } hover:text-[#362C59] transition-colors`}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={() => setActiveSection("services")}
            className={`${
              activeSection === "services"
                ? "text-[#362C59] font-semibold"
                : "text-gray-700"
            } hover:text-[#362C59] transition-colors`}
          >
            Services
          </a>

          <a
            href="#portfolio"
            onClick={() => setActiveSection("portfolio")}
            className={`${
              activeSection === "portfolio"
                ? "text-[#362C59] font-semibold"
                : "text-gray-700"
            } hover:text-[#362C59] transition-colors`}
          >
            Portfolio
          </a>

          <a
            href="#testimonials"
            onClick={() => setActiveSection("testinomials")}
            className={`${
              activeSection === "testinomials"
                ? "text-[#362C59] font-semibold"
                : "text-gray-700"
            } hover:text-[#362C59] transition-colors`}
          >
            Testimonials
          </a>
          <a
            href="#how-it-works"
            onClick={() => setActiveSection("how-it-works")}
            className={`${
              activeSection === "how-it-works"
                ? "text-[#362C59] font-semibold"
                : "text-gray-700"
            } hover:text-[#362C59] transition-colors`}
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
              onClick={() => {
                setActiveSection("home");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "home"
                  ? "text-[#362C59] font-semibold"
                  : "text-gray-700"
              } hover:text-[#362C59] transition-colors`}
            >
              Home
            </a>
            <a
              href="#services"
            onClick={() => {
                setActiveSection("services");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "services"
                  ? "text-[#362C59] font-semibold"
                  : "text-gray-700"
              } hover:text-[#362C59] transition-colors`}
            >
              Services
            </a>
            <a
              href="#portfolio"
               onClick={() => {
                setActiveSection("portfolio");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "portfolio"
                  ? "text-[#362C59] font-semibold"
                  : "text-gray-700"
              } hover:text-[#362C59] transition-colors`}
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
                 onClick={() => {
                setActiveSection("testinomials");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "testinomials"
                  ? "text-[#362C59] font-semibold"
                  : "text-gray-700"
              } hover:text-[#362C59] transition-colors`}
            >
              Testimonials
            </a>
            <a
              href="#how-it-works"
                onClick={() => {
                setActiveSection("how-it-works");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "how-it-works"
                  ? "text-[#362C59] font-semibold"
                  : "text-gray-700"
              } hover:text-[#362C59] transition-colors`}
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
