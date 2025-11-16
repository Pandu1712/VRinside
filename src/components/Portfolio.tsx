const portfolioItems = [
  {
    image: "https://res.cloudinary.com/dxvabsqrq/image/upload/v1762353329/p-1_ier4mz.jpg",
    title: "Modern Kitchen",
    category: "Minimalist Design",
  },
  {
    image: "https://res.cloudinary.com/dxvabsqrq/image/upload/v1762353324/p-2_ubaaks.jpg",
    title: "Luxurious Living Room",
    category: "Luxury Comfort",
  },
  {
    image: "https://res.cloudinary.com/dxvabsqrq/image/upload/v1762782055/Elegant_Dining_Room_ghhcvi.jpg",
    title: "Elegant Dining Room",
    category: "Classic Style",
  },
  {
    image: "https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693343/Modern_Bedroom_endqcv.jpg",
    title: "Modern Bedroom",
    category: "Functional Beauty",
  },
  {
    image: "https://res.cloudinary.com/dxvabsqrq/image/upload/v1762782054/Cozy_Office_Space_eyl5bc.jpg",
    title: "Cozy Office Space",
    category: "Productive Environment",
  },
  {
    image: "https://res.cloudinary.com/dxvabsqrq/image/upload/v1762692843/Contemporary_Living_Area_uxxndp.jpg",
    title: "Contemporary Living Area",
    category: "Relaxation Suite",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#347844] tracking-wide">
            Feature Creations
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto opacity-90">
            A glimpse of spaces we've transformed with creativity, warmth and modern elegance.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group shadow-xl bg-white/10 backdrop-blur-xl border border-green-200 hover:border-green-500 transition-all ${
                index % 3 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold drop-shadow-md">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.category}</p>
                </div>
              </div>

              {/* Tag */}
              <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-xl px-4 py-1 text-sm font-semibold text-green-700 rounded-full shadow-md">
                Interior
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
