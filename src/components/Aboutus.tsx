import { motion } from "framer-motion";

export default function AboutUs() {
  const values = [
    {
      title: "Our Approach",
      text: "We listen, visualize, design and execute with attention to detail and human comfort."
    },
    {
      title: "Our Promise",
      text: "Transparent pricing, premium quality materials & on-time project delivery."
    },
    {
      title: "Our Focus",
      text: "Eco-friendly designs, space efficiency and thoughtful personalized concepts."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* ------------------- IMAGE ------------------- */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating backdrop */}
          <div className="absolute w-[80%] h-[80%] bg-green-200/40 rounded-3xl blur-3xl -z-10 top-4"></div>

          {/* Main Image */}
          <img
            src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.48_9058fef1_kywzfg.jpg"
            alt="Interior Work"
            className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          />
        </motion.div>

        {/* ------------------- TEXT ------------------- */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900">
            Who We Are
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            At <span className="font-semibold text-green-700">VR Inside Interior</span>, 
            we create functional, elegant, and nature-inspired interiors that bring comfort, 
            style, and harmony into your everyday life. Based in Hyderabad, we deliver 
            premium-quality home and commercial design solutions focusing on sustainability 
            and smart space utilization.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            From luxurious living spaces to modern minimal makeovers, our team combines creativity, 
            material excellence, and technology to craft spaces that feel personal, meaningful, 
            and timeless.
          </p>
        </motion.div>
      </div>

      {/* ------------------- VALUES SECTION ------------------- */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
        {values.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl p-8 border border-green-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold text-green-700 mb-3">{card.title}</h4>
            <p className="text-gray-700 text-base leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* ------------------- CTA SECTION ------------------- */}
      <motion.div
        className="max-w-6xl mx-auto mt-20 rounded-3xl shadow-2xl bg-green-700 text-white text-center p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Create Something Beautiful Together</h3>
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
          Your space is not just a place — it is a feeling. Whether it’s a new home, a modern 
          workspace or a single room makeover, we are here to design it with passion and perfection.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-green-700 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-green-100 hover:scale-105 transition-all"
        >
          Contact
        </a>
      </motion.div>
    </section>
  );
}
