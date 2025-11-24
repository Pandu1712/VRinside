import { ChevronRight } from "lucide-react";
import type { Service } from "../types/service";

interface Props {
  service: Service;
  onSelect: () => void;
}

export default function ServiceCard({ service, onSelect }: Props) {
  const Icon = service.icon;

  return (
    <div className="relative group rounded-xl overflow-hidden border border-green-200 bg-white shadow hover:shadow-lg transition-all p-4">

      {/* Round Image */}
      <div className="w-full flex justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0 bg-black/50 opacity-0 
          group-hover:opacity-100 transition-all
          flex items-center justify-center
        "
      >
        <button
          onClick={onSelect}
          className="px-4 py-2 bg-green-600 text-white text-xs font-medium rounded-lg flex items-center gap-1 hover:bg-green-700"
        >
          Explore Details <ChevronRight size={14} />
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 text-center">

        {/* Icon */}
        <div className=" mt-5 w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md mx-auto border-4 border-white -mt-8">
          <Icon size={18} className="text-white" />
        </div>

        <h3 className="mt-3 text-sm font-semibold text-gray-900">
          {service.title}
        </h3>

        <p className="text-gray-600 text-xs mt-1 line-clamp-2">
          {service.description}
        </p>

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
    </div>
  );
}
