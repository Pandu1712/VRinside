const portfolioItems = [
  {
    image: 'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762353329/p-1_ier4mz.jpg',
    title: 'Modern Kitchen',
    category: 'Minimalist Design'
  },
  {
    image: 'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762353324/p-2_ubaaks.jpg',
    title: 'Luxurious Living Room',
    category: 'Luxury Comfort'
  },
  {
    image: 'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762703302/dining_gg6bjd.jpg',
    title: 'Elegant Dining Room',
    category: 'Classic Style'
  },
  {
    image: 'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693343/Modern_Bedroom_endqcv.jpg',
    title: 'Modern Bedroom',
    category: 'Functional Beauty'
  },  
  {
    image: 'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762353326/p-5_ojuwmx.jpg',
    title: 'Cozy Office Space',
    category: 'Productive Environment'
  },
  {
    image: 'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762692843/Contemporary_Living_Area_uxxndp.jpg',
    title: 'Contemporary Living Area',
    category: 'Relaxation Suite'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="mt-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#433673] mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto">
            Explore our recent projects and see how we transform spaces into extraordinary environments
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
