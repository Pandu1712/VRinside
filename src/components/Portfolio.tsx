const portfolioItems = [
  {
    image: '../../public/p-1.jpg',
    title: 'Modern Kitchen',
    category: 'Minimalist Design'
  },
  {
    image: '../../public/p-2.jpg',
    title: 'Luxurious Living Room',
    category: 'Luxury Comfort'
  },
  {
    image: '../../public/p-3.jpg',
    title: 'Elegant Dining Room',
    category: 'Classic Style'
  },
  {
    image: '../../public/p-4.jpg',
    title: 'Modern Bedroom',
    category: 'Functional Beauty'
  },  
  {
    image: '../../public/p-5.jpg',
    title: 'Cozy Office Space',
    category: 'Productive Environment'
  },
  {
    image: '../../public/p-6.jpg',
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
