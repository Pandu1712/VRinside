import { ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 px-6 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* -------- LEFT TEXT AREA -------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-snug">
            Luxury Interiors<br/> 
            Built With Premium Craftsmanship
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            We design functional, luxurious and timeless spaces with premium 
            craftsmanship and personalized creative concepts. Transform your house 
            into a masterpiece.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#contact">
              <button className="
                bg-green-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg 
                hover:bg-green-600 hover:shadow-2xl hover:scale-[1.04] transition-all flex items-center gap-2
              ">
                Contact
                <ChevronRight className="w-5 h-5" />
              </button>
            </a>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 pt-2">
            <Star className="text-yellow-500" />
            <p className="text-gray-700 font-semibold">Rated 4.9 / 5 by Homeowners</p>
          </div>
        </motion.div>

        {/* -------- RIGHT IMAGE LAYOUT (NEW) -------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full flex justify-center"
        >
          {/* Main big image */}
          <motion.img
            src="https://res.cloudinary.com/dxvabsqrq/image/upload/v1762353049/hero_tvvzzg.jpg"
            className="rounded-3xl shadow-2xl w-[310px] h-[380px] object-cover"
            initial={{ x: 40, y: 10, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Top right small image */}
          <motion.img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="rounded-2xl shadow-xl w-[180px] h-[130px] object-cover absolute -top-6 right-0 border-4 border-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          />

          {/* Bottom left small image */}
          <motion.img
            src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c"
            className="rounded-2xl shadow-xl w-[170px] h-[130px] object-cover absolute bottom-0 -left-8 border-4 border-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          />

          {/* Floating tag */}
          <motion.div
            className="absolute -bottom-10 right-4 bg-white rounded-xl shadow-xl px-5 py-4 border border-green-100"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <p className="text-gray-900 font-bold text-xl">250+ Projects</p>
            <p className="text-gray-500 text-sm">Delivered Across Telangana</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
