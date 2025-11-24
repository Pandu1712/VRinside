import { motion } from "framer-motion";
import type { Service } from "../types/service";

interface Props {
  service: Service;
  onSelect: () => void;
}

export default function ServiceCard({ service, onSelect }: Props) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
      whileHover={{ scale: 1.03 }}
      onClick={onSelect}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover"
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-transparent bg-opacity-40 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h3 className="text-white text-lg font-bold mb-2 text-center px-2">{service.title}</h3>
        <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-all">
          View Details
        </button>
      </motion.div>

      {/* Tags */}
      <div className="p-4 bg-white">
        <p className="text-gray-700 text-sm mb-2">{service.category}</p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
