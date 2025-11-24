import { ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-gradient-to-b from-white to-green-50 overflow-hidden"
    >
      {/* ------------------ FULL WIDTH IMAGE ------------------ */}
      <motion.img
        src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443805/WhatsApp_Image_2025-11-17_at_11.35.50_e23110d6_sjqsqy.jpg"
        className="w-full h-full object-cover object-center"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* ------------------ TEXT OVER IMAGE ------------------ */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-extrabold text-lime-800 drop-shadow-xl"
        >
          Luxury Interiors Crafted<br /> for Inspired Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-white text-lg md:text-xl mt-4 drop-shadow-lg max-w-2xl"
        >
          Transform your spaces with premium, modern and timeless interior designs
          built with world-class craftsmanship.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mt-8 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <a href="#contact">
            <button className="bg-green-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-xl hover:bg-green-600 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              Contact
              <ChevronRight className="w-5 h-5" />
            </button>
          </a>

          <a href="#services">
  <button className="px-8 py-3 rounded-2xl font-semibold backdrop-blur-md border border-white/50 bg-white/30 hover:bg-white/60 text-white transition-all">
    Our Works
  </button>
</a>

        </motion.div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-6 justify-center">
          <Star className="text-yellow-500 w-6 h-6" />
          <p className="text-white font-semibold text-lg drop-shadow">4.9/5 Rating</p>
        </div>
      </motion.div>
    </section>
  );
}
