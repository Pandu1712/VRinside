import { X } from 'lucide-react';
import type { Service } from '../types/service';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="bg-gray-900 w-12 h-12 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              <span className="text-sm text-gray-500">{service.category}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">{service.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></div>
                    <span className="text-gray-700">Premium quality materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></div>
                    <span className="text-gray-700">Customized design solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></div>
                    <span className="text-gray-700">Expert craftsmanship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></div>
                    <span className="text-gray-700">Timely project completion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></div>
                    <span className="text-gray-700">Initial consultation & planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></div>
                    <span className="text-gray-700">3D design visualization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></div>
                    <span className="text-gray-700">Material selection assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></div>
                    <span className="text-gray-700">Installation & finishing</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {service.gallery.map((img, i) => (
                <div key={i} className="relative h-64 rounded-2xl overflow-hidden group">
                  <img
                    src={img}
                    alt={`${service.title} ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Get a Quote
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
