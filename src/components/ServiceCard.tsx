import { ChevronRight } from 'lucide-react';
import type { Service } from '../types/service';

interface ServiceCardProps {
  service: Service;
  viewMode: 'grid' | 'list';
  onSelect: () => void;
}

export default function ServiceCard({ service, viewMode, onSelect }: ServiceCardProps) {
  const Icon = service.icon;

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-80 h-64 md:h-auto overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-gray-700">{service.category}</span>
            </div>
          </div>

          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                {service.featured && (
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onSelect}
              className="flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all group-hover:text-gray-700"
            >
              <span>View Details</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-gray-700">{service.category}</span>
        </div>
        {service.featured && (
          <div className="absolute top-4 left-4 bg-amber-400 text-amber-900 px-3 py-1 rounded-full">
            <span className="text-xs font-bold">Featured</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="bg-gray-900 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onSelect}
          className="flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all text-sm"
        >
          <span>View Details</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
