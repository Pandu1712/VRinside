import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Samantha",
    role: "Homeowner",
    initials: "SA",
    text: "Inizio Interiors exceeded my expectations with their impeccable taste and attention to detail. Thank you for your exceptional work!",
  },
  {
    name: "Prasanth",
    role: "Homeowner",
    initials: "PR",
    text: "I recently hired Inizio Interiors to design my home, and I must say, I am beyond impressed with the results. Highly recommend Inizio Interiors for anyone looking to elevate their interior design game.",
  },
  {
    name: "Teja",
    role: "Working Professional",
    initials: "TJ",
    text: "As a busy working professional, I never had the time or eye for interior design. Inizio Interiors’ impeccable taste and attention to detail truly transformed my space. Highly recommended!",
  },
  {
    name: "Kavya",
    role: "Client",
    initials: "KV",
    text: "From the initial consultation to the final design, Inizio Interiors transformed my space into a beautiful and functional oasis. Their attention to detail and creative vision truly exceeded my expectations.",
  },
  {
    name: "Rajveer Singh",
    role: "Customer",
    initials: "RS",
    text: "Inizio Interiors is a one-stop solution for all your interior needs. Look no further for elegance and quality craftsmanship.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction:string) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
    scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how <span className="text-[#433673] font-semibold">Inizio Interiors</span> brings dreams to life through design and creativity.
          </p>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-[#362C59] rounded-full shadow-lg p-3 hover:bg-[#362C59] z-10 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-white-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-[#362C59] cursor-pointer rounded-full shadow-lg p-3 hover:bg-[#362C59] z-10"
        >
          <ChevronRight className="w-6 h-6 text-white-700" />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Hide scrollbars (for all browsers) */}
          <style>
            {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[320px] sm:min-w-[360px] bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                “{testimonial.text}”
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#BDB8D9] rounded-full flex items-center justify-center text-[#433673] font-extrabold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
