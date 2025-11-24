import { useEffect, useRef, useState } from "react";

const portfolioItems = [
  {
    image: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443805/WhatsApp_Image_2025-11-17_at_11.35.50_318511c8_ybriet.jpg",
    title: "Modern Kitchen",
    category: "Minimalist Design",
  },
  {
    image: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443796/WhatsApp_Image_2025-11-17_at_13.13.44_3c5ebcf9_dvcvtp.jpg",
    title: "Luxurious Living Room",
    category: "Luxury Comfort",
  },
  {
    image: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.48_9058fef1_kywzfg.jpg",
    title: "Elegant Dining Room",
    category: "Classic Style",
  },
  {
    image: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443746/WhatsApp_Image_2025-11-17_at_13.13.53_c479d63a_stqpcp.jpg",
    title: "Modern Bedroom",
    category: "Functional Beauty",
  },
  {
    image: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.44_0d800591_jhfzeg.jpg",
    title: "Cozy Office Space",
    category: "Productive Environment",
  },
  {
    image: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443796/WhatsApp_Image_2025-11-17_at_13.13.41_8af74b73_ffdvhr.jpg",
    title: "Contemporary Living Area",
    category: "Relaxation Suite",
  },
];

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // append hide-scrollbar CSS if not present
  useEffect(() => {
    const id = "hide-scrollbar-styles";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = `
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    posRef.current = 0;
    container.scrollLeft = 0;

    const speed = 0.45;

    const step = () => {
      if (!container) return;

      if (!isPaused) {
        posRef.current += speed;

        if (posRef.current >= container.scrollWidth / 2) {
          posRef.current -= container.scrollWidth / 2;
          container.scrollLeft = posRef.current;
        } else {
          container.scrollLeft = posRef.current;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  const doubled = [...portfolioItems, ...portfolioItems];

  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#347844] tracking-wide">
            Feature Creations
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto opacity-90">
            A glimpse of spaces we've transformed with creativity, warmth and modern elegance.
          </p>
        </div>

        {/* Auto Scroll Gallery */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-8 overflow-x-auto whitespace-nowrap py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {doubled.map((item, index) => (
            <div
              key={index}
              className="relative inline-block min-w-[300px] max-w-[300px] overflow-hidden group shadow-xl bg-white/10 backdrop-blur-xl border border-green-200 hover:border-green-500 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-all duration-500"
                draggable={false}
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 pointer-events-none">
                <h3 className="text-xl text-white font-bold">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.category}</p>
              </div>

              <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-xl px-4 py-1 text-sm font-semibold text-green-700 rounded-full shadow-md pointer-events-none">
                Interior
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
