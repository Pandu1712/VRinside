import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { services, categories } from "../data/servicesData";
import type { Service } from "../types/service";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Transforming spaces with luxury, precision and creativity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-12 px-5 py-2.5  font-semibold text-sm transition-all duration-300
                  ${
                    selectedCategory === cat.name
                      ? "bg-green-700 text-white shadow-xl scale-105"
                      : "bg-white text-green-700 border border-green-200 hover:bg-green-100"
                  }
                `}
              >
                <Icon size={18} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Count */}
        <p className="text-center text-gray-600 text-sm mb-10">
          Showing{" "}
          <span className="text-green-900 font-semibold">
            {filteredServices.length}
          </span>{" "}
          {filteredServices.length === 1 ? "service" : "services"}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No services match your selection</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
}
