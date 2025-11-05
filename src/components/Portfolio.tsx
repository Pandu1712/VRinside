const portfolioItems = [
  {
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Modern Living Room',
    category: 'Minimalist Design'
  },
  {
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Contemporary Bedroom',
    category: 'Luxury Comfort'
  },
  {
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Elegant Dining Room',
    category: 'Classic Style'
  },
  {
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Modern Kitchen',
    category: 'Functional Beauty'
  },
  {
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cozy Office Space',
    category: 'Productive Environment'
  },
  {
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Spa Bathroom',
    category: 'Relaxation Suite'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="mt-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#433673] mb-4">Our Portfolio</h2>
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
