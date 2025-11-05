import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { FaWhatsapp } from "react-icons/fa";

export default function GetStarted() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const calendlyUrl = "https://calendly.com/iniziointeriorshyd/30min";

  const handleWhatsApp = () => {
    const phoneNumber = "+918688547851";
    const message = encodeURIComponent(
      "Hi! I’d like to book a free consultation about interior design services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  //  Disable ALL scrolling when Calendly is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isCalendlyOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      body.style.height = "auto";
    }

    return () => {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      body.style.height = "auto";
    };
  }, [isCalendlyOpen]);

  return (
    <>
      {/* Floating Get Started Button */}
      <button
        onClick={() => setIsCalendlyOpen(true)}
        className="fixed bottom-8 right-8 bg-[#433673] text-white px-6 py-3 rounded-lg hover:bg-[#5a48a6] transition-all shadow-lg hover:shadow-xl z-40 cursor-pointer"
      >
        Book Free Consultation
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-24 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-40 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-9 h-9" />
      </button>

      {/* Calendly Popup */}
      <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root") as HTMLElement}
      />
    </>
  );
}
