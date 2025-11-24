import { type JSX } from "react";

type Step = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "We understand your lifestyle, taste, budget, and space goals to define your design direction.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress",
  },
  {
    id: 2,
    title: "Concept & Moodboards",
    description:
      "We prepare color palettes, layout ideas, material choices, and visual references.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress",
  },
  {
    id: 3,
    title: "3D Model & Material Selection",
    description:
      "Experience your space in realistic 3D renders and finalize textures, laminates & lighting.",
    image: "https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress",
  },
  {
    id: 4,
    title: "Production Starts",
    description:
      "Manufacturing begins with precision machines and strict quality standards.",
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress",
  },
  {
    id: 5,
    title: "On-Site Execution",
    description:
      "Our team installs furniture, lighting, decor & structure work with supervision.",
    image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress",
  },
  {
    id: 6,
    title: "Quality Inspection",
    description:
      "Every corner is checked for finishing, durability, safety, and perfection.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress",
  },
  {
    id: 7,
    title: "Final Styling",
    description:
      "We add final decor, lighting adjustments, soft furnishings & setup elements.",
    image: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress",
  },
  {
    id: 8,
    title: "Project Handover",
    description:
      "Once everything looks perfect, we officially hand over the completed space.",
    image: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress",
  },
  {
    id: 9,
    title: "Lifetime Support",
    description:
      "We offer long-term maintenance, repairs, and expansion support.",
    image: "https://as2.ftcdn.net/jpg/01/92/76/63/1000_F_192766301_FgkwYTk5Aa5P0l4z0GiWxi7by3atfd8k.jpg",
  },
];

export default function HowItWorks(): JSX.Element {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-[#E8FFE6] via-white to-[#E8FFE6]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#347844] tracking-wide">
            Our Work Process
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            A smooth, transparent, step-by-step process designed for your comfort.
          </p>
        </header>

        {/* Grid 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl border border-[#6FCF68]/30 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2E6240] mb-3">
                  {step.id}. {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-4 font-medium">
            Ready to make your dream space real?
          </p>
          <a href="#contact">
            <button className="px-8 py-3 bg-[#42A653] text-white rounded-xl hover:bg-[#2E6240] transition-all shadow-md hover:shadow-lg">
              Start Your Journey
            </button>
          </a>
        </div> */}

      </div>
    </section>
  );
}
