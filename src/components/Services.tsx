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
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Premium interior design services tailored to transform your space with innovation,
            comfort and elegant craftsmanship.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                selectedCategory === category
                  ? "bg-green-700 text-white shadow-lg scale-105"
                  : "bg-white border border-green-200 text-green-700 hover:bg-green-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Count label */}
        <p className="text-center text-gray-600 text-sm mb-8">
          Showing <span className="font-semibold text-green-900">{filteredServices.length}</span>{" "}
          {filteredServices.length === 1 ? "service" : "services"}
        </p>

        {/* Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id}>
              <ServiceCard
                service={service}
                viewMode="grid"
                onSelect={() => setSelectedService(service)}
              />
            </div>
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
