export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT - IMAGE STACK */}
        <div className="relative w-full flex justify-center">
          {/* Base floating backdrop */}
          <div className="absolute w-[85%] h-[85%] bg-green-200/40 rounded-3xl blur-xl -z-10"></div>

          <img
            src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.48_9058fef1_kywzfg.jpg"
            alt="Interior Work"
            className="rounded-3xl shadow-2xl w-[420px] h-[350px] object-cover"
          />

          <img
            src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443752/WhatsApp_Image_2025-11-17_at_13.13.49_8d071b84_rjfvty.jpg"
            alt="Modern Design"
            className="rounded-2xl shadow-xl w-[200px] h-[130px] object-cover absolute -bottom-10 -left-6 border-4 border-white"
          />

          <img
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
            alt="Craftsmanship"
            className="rounded-2xl shadow-xl w-[190px] h-[130px] object-cover absolute -top-10 -right-4 border-4 border-white"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold text-green-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5 text-justify">
            At <span className="font-semibold text-green-700">VR Inside Interior</span>, 
            we create uplifting, functional and nature-inspired interiors that bring comfort, 
            style and harmony into your everyday life. Based in Hyderabad, we deliver 
            premium-quality home and commercial design solutions with a focus on sustainability 
            and smart utilization of space.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            From luxurious living spaces to minimal modern makeovers, our team blends creativity, 
            material excellence and technology to craft spaces that feel meaningful, personal, 
            and timeless.
          </p>
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
        {[
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
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white shadow-lg p-8 rounded-2xl border border-green-200 hover:shadow-2xl transition-all"
          >
            <h4 className="text-2xl font-bold text-green-700 mb-3">{card.title}</h4>
            <p className="text-gray-700 text-[15px] leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="max-w-6xl mx-auto mt-20 bg-green-700 text-white p-12 rounded-3xl shadow-2xl text-center">
        <h3 className="text-3xl font-bold mb-4">Let’s Create Something Beautiful Together</h3>
        <p className="text-lg mb-7 opacity-90 leading-relaxed">
          Your space is not just a place — it is a feeling. Whether it’s a new home, a modern 
          workspace or a single room makeover, we are here to design it with passion and perfection.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-green-700 px-8 py-3 rounded-xl font-semibold hover:bg-green-100 transition-all shadow-lg hover:shadow-2xl"
        >
         Contact
        </a>
      </div>
    </section>
  );
}
