

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#F2F2F2] py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#362C59] mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to <span className="font-semibold text-[#362C59]">Inizio Interiors</span>, 
            where creativity meets functionality to transform your spaces into timeless masterpieces. 
            Based in the vibrant city of Hyderabad, we are a passionate team of interior designers 
            dedicated to creating beautiful, personalized environments that reflect your style and 
            elevate your lifestyle.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At Inizio Interiors, we understand that the spaces you inhabit are a direct reflection 
            of who you are, your aspirations, and your unique personality. Whether it's a modular 
            kitchen, a luxurious living room, or a serene pooja room, we take pride in delivering 
            designs that not only look stunning but also enhance your day-to-day experiences.
          </p>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#8580A6] rounded-3xl translate-x-3 translate-y-3"></div>
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="About Inizio Interiors"
            className="relative rounded-3xl shadow-xl w-full object-cover"
          />
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h3 className="text-3xl font-bold text-[#362C59] mb-6">Our Philosophy</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We believe that good design should be a seamless fusion of aesthetics, functionality, and 
          innovation. Our philosophy revolves around creating customized interiors that are perfectly 
          tailored to meet the specific needs of our clients, ensuring that each space we design is both 
          beautiful and practical. Our designs are intended to inspire, comfort, and impress.
        </p>
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-bold text-[#362C59] mb-6">Our Vision</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our vision at Inizio Interiors is to be Hyderabad's leading interior design firm, 
          known for transforming spaces into reflections of our clients’ tastes and aspirations. 
          We strive to make every project an inspiring journey, leaving our clients with spaces 
          that elevate their everyday lives.
        </p>
      </div>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto mt-20 bg-[#362C59] text-white p-10 rounded-3xl shadow-xl text-center">
        <h3 className="text-3xl font-bold mb-4">Let’s Design Your Dream Space</h3>
        <p className="text-lg mb-8 leading-relaxed text-[#F2F2F2]">
          At Inizio Interiors, we believe that your home or office should inspire you every day. 
          Whether you're renovating a single room or redesigning your entire space, we are here 
          to turn your dreams into reality.
        </p>
       {/*  <a
          href="#contact"
          className="inline-block bg-[#8580A6] text-[#362C59] font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-[#362C59] transition-colors"
        >
          Contact Us Today
        </a> */}
      </div>
    </section>
  );
}
