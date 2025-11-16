import { type JSX } from "react";
import { Lightbulb, PenTool, Layers, Hammer, CheckCircle2, Headphones } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "We begin with a friendly discussion to understand your lifestyle, taste, budget, and space goals so we can tailor the perfect design direction.",
    icon: <Lightbulb className="w-6 h-6 text-[#42A653]" />,
  },
  {
    id: 2,
    title: "Concept & Visual Moodboards",
    description:
      "Our design experts prepare a visual direction including layouts, color palettes, material choices, and moodboards to match your personality and comfort.",
    icon: <PenTool className="w-6 h-6 text-[#42A653]" />,
  },
  {
    id: 3,
    title: "3D Model & Material Selection",
    description:
      "View your future space in realistic 3D renders and finalize laminates, textures, lighting, fabrics, and furniture—ensuring quality + durability.",
    icon: <Layers className="w-6 h-6 text-[#42A653]" />,
  },
  {
    id: 4,
    title: "Production & On-Site Execution",
    description:
      "Skilled craftsmen and engineers begin your project while we supervise onsite, ensuring flawless finishing, safety, and timely progress.",
    icon: <Hammer className="w-6 h-6 text-[#42A653]" />,
  },
  {
    id: 5,
    title: "Quality Check & Final Styling",
    description:
      "After installation, we add decor, lighting, and styling elements. Final inspection ensures everything is perfect before handover.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#42A653]" />,
  },
  {
    id: 6,
    title: "Lifetime Support",
    description:
      "We stay connected even after completion for maintenance, touch-ups, and interior expansion support whenever needed.",
    icon: <Headphones className="w-6 h-6 text-[#42A653]" />,
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
            We follow a transparent, smooth, and customer-friendly workflow that transforms imagination into reality with elegance and precision.
          </p>
        </header>

        {/* Timeline Steps */}
        <div className="relative border-l-4 border-[#42A653]/40 ml-6 space-y-10">
          {steps.map((step) => (
            <div key={step.id} className="pl-10 relative">
              
              {/* Dot */}
              <span className="absolute w-5 h-5 bg-[#42A653] rounded-full -left-[11px] top-1 border-4 border-white shadow"></span>

              <div className="bg-white border border-[#6FCF68]/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#DFFFE0] border border-[#42A653]/30">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2E6240]">{step.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-700 text-lg mb-4 font-medium">
            Ready to make your dream space real?
          </p>
          <a href="#contact">
            <button className="px-8 py-3 bg-[#42A653] text-white rounded-xl hover:bg-[#2E6240] transition-all shadow-md hover:shadow-lg">
              Start Your Journey
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
