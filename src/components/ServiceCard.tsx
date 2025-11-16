import { ChevronRight } from "lucide-react";
import type { Service } from "../types/service";

interface Props {
  service: Service;
  viewMode: "grid" | "list";
  onSelect: () => void;
}

export default function ServiceCard({ service, onSelect }: Props) {
  const Icon = service.icon;

  
    return (
      <div className="relative rounded-xl bg-white border border-green-200 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group">

        {/* Image */}
        <div className="relative w-full h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Premium Ribbon */}
        {service.featured && (
          <span className="absolute top-3 right-[-22px] rotate-45 bg-green-600 text-white text-[10px] px-8 py-[2px] font-bold">
            PREMIUM
          </span>
        )}

        {/* Content */}
        <div className="p-4 text-center flex flex-col items-center">

          {/* Icon */}
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md mt-2 border-4 border-white">
            <Icon size={18} className="text-white" />
          </div>

          <h3 className="mt-3 text-base font-semibold text-gray-900">
            {service.title}
          </h3>

          <p className="text-gray-600 text-xs mt-1 line-clamp-2">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-1 mt-2">
            {service.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-green-50 text-green-700 px-2 py-[2px] rounded-full border border-green-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onSelect}
          className="w-full py-2 bg-green-600 text-white text-xs font-medium flex items-center justify-center gap-1 hover:bg-green-700 transition-colors"
        >
          Explore Details <ChevronRight size={14} />
        </button>
      </div>
    );
  }


