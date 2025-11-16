import { X } from "lucide-react";
import type { Service } from "../types/service";

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl border border-green-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-green-100 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-700">{service.title}</h2>
              <p className="text-sm text-gray-500">{service.category}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-green-100 active:bg-green-200 rounded-full transition"
          >
            <X className="w-6 h-6 text-green-700" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full border border-green-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-lg">
            {service.description}
          </p>

         <div className="grid md:grid-cols-2 gap-6">
  {/* Key Features */}
  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
    <h3 className="font-bold text-green-700 text-lg mb-3">Key Features</h3>
    <ul className="space-y-2 text-gray-700 text-sm">
      {[
        "Top-grade materials for durability and elegance",
        "Tailored designs to match client vision",
        "Skilled artisans ensuring flawless finish",
        "On-time project completion with precision",
        "Sustainable & eco-friendly practices",
      ].map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="w-2 h-2 bg-green-700 rounded-full mt-1.5"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* What's Included */}
  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
    <h3 className="font-bold text-green-700 text-lg mb-3">What's Included</h3>
    <ul className="space-y-2 text-gray-700 text-sm">
      {[
        "Personalized consultation & design planning",
        "High-quality 3D design visualizations",
        "Expert material selection guidance",
        "Complete project execution & finishing",
        "Post-installation support & maintenance advice",
      ].map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="w-2 h-2 bg-green-700 rounded-full mt-1.5"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>


          {/* Equal Image Gallery */}
          <div>
            <h3 className="text-lg font-bold text-green-700 mb-3">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl aspect-square overflow-hidden border border-green-200"
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => alert("Quote Requested")}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Get Quote
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-green-100 text-green-700 py-3 rounded-xl font-semibold border border-green-200 hover:bg-green-200 transition"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
