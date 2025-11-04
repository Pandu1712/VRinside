import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
  category: string;
}

const partners: Partner[] = [
  { name: "Greenply", logo: "/logos/greenply.png", category: "Laminates & Plywood" },
  { name: "CenturyPly", logo: "/logos/centuryply.png", category: "Laminates & Plywood" },
  { name: "Merino", logo: "/logos/merino.png", category: "Laminates & Plywood" },
  { name: "Royalé Touché", logo: "/logos/royaletouche.png", category: "Laminates & Plywood" },
  { name: "Hettich", logo: "/logos/hettich.png", category: "Hardware" },
  { name: "Hafele", logo: "/logos/hafele.png", category: "Hardware" },
  { name: "Ebco", logo: "/logos/ebco.png", category: "Hardware" },
  { name: "Godrej", logo: "/logos/godrej.png", category: "Hardware" },
  { name: "Asian Paints", logo: "/logos/asianpaints.png", category: "Paints" },
  { name: "Berger", logo: "/logos/berger.png", category: "Paints" },
  { name: "Nerolac", logo: "/logos/nerolac.png", category: "Paints" },
  { name: "Birla Opus", logo: "/logos/birlaopus.png", category: "Paints" },
  { name: "Jaquar", logo: "/logos/jaquar.png", category: "Lighting & Electrical" },
  { name: "Wipro", logo: "/logos/wipro.png", category: "Lighting & Electrical" },
  { name: "Havells", logo: "/logos/havells.png", category: "Lighting & Electrical" },
  { name: "Philips", logo: "/logos/philips.png", category: "Lighting & Electrical" },
  { name: "Polycab", logo: "/logos/polycab.png", category: "Lighting & Electrical" },
  { name: "KalingaStone", logo: "/logos/kalingastone.png", category: "Countertops" },
  { name: "Caesarstone", logo: "/logos/caesarstone.png", category: "Countertops" },
  { name: "Relaystone", logo: "/logos/relaystone.png", category: "Countertops" },
  { name: "Hafele Surfaces", logo: "/logos/hafelesurfaces.png", category: "Countertops" },
];

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const autoScroll = () => {
      if (!scrollContainer || isHovered) {
        animationId = requestAnimationFrame(autoScroll);
        return;
      }

      scrollPosition += 0.5;
      scrollContainer.scrollLeft = scrollPosition;

      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    updateScrollButtons();
    scrollContainer.addEventListener("scroll", updateScrollButtons);

    return () => scrollContainer.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Trusted Partners
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Collaborating with the world's best brands to deliver{" "}
          <span className="text-[#433673] font-semibold">quality and elegance</span> in every design.
        </p>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto overflow-y-hidden scrollbar-hide py-4 px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>
              {`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 min-w-[180px] flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <p className="font-semibold text-gray-800 text-sm">{partner.name}</p>
                <p className="text-xs text-gray-500 mt-1">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
