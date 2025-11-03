import React, { type JSX } from "react";

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description:
      "Every project begins with understanding your vision. We take the time to listen to your ideas, preferences, and specific requirements. Whether you're looking to redesign a single room or renovate an entire home, our team will guide you through the design possibilities, ensuring we capture your style, functionality needs, and budget.",
  },
  {
    id: 2,
    title: "Concept Design & Planning",
    description:
      "Once we understand your vision, our expert designers create a concept design that reflects your aesthetic preferences and functional needs. We present mood boards, layouts, and 3D visualizations to help you see your dream space come to life. During this phase, we refine every detail to make sure it aligns with your expectations.",
  },
  {
    id: 3,
    title: "Material Selection & Finalization",
    description:
      "With the design concept approved, we move on to selecting the best materials, finishes, and furnishings that match your vision. Our team works closely with you to ensure every choice—from flooring to furniture—is perfect for your space. We only use premium-quality materials that combine style, durability, and sustainability.",
  },
  {
    id: 4,
    title: "Execution & Installation",
    description:
      "Once everything is finalized, we begin the implementation phase. Our skilled craftsmen and experienced installation team bring the design to life. We manage every step of the process, from coordinating with suppliers to overseeing construction, ensuring everything runs smoothly and on schedule.",
  },
  {
    id: 5,
    title: "Final Touches & Handover",
    description:
      "Once the design is fully executed, we add those special touches that bring the space together—decor, lighting, and accessories that enhance the overall aesthetic. After a thorough final inspection, we hand over your new space, making sure everything is perfect and ready for you to enjoy.",
  },
  {
    id: 6,
    title: "Aftercare & Support",
    description:
      "At Inizio Interiors, we’re committed to your satisfaction. Our job doesn’t end at handover. We provide aftercare support to ensure that your space remains as beautiful and functional as the day it was completed. Should you need any adjustments or future assistance, we're just a call away.",
  },
];

export default function HowItWorks(): JSX.Element {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto mt-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How It Works: <span className="text-amber-600">Inizio Interiors</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Inizio Interiors, we follow a streamlined process that ensures every project is
            executed with precision, creativity, and care. From the initial consultation to the
            final touches, we make your design journey simple, transparent, and enjoyable.
          </p>
        </header>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <article
              key={step.id}
              className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-6 rounded-2xl shadow-sm"
              aria-labelledby={`step-${step.id}-title`}
            >
              <div className="flex items-start space-x-6">
                {/* Number badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#362C59] text-white flex items-center justify-center font-bold text-lg">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    id={`step-${step.id}-title`}
                    className="text-xl font-semibold text-gray-900 mb-2"
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Divider (except after last item) */}
              {step.id !== steps.length && (
                <div className="mt-6 border-t border-dashed border-gray-200" />
              )}
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Start Your Design Journey Today — from initial ideas to final touches, Inizio Interiors
            is here to guide you every step of the way.
          </p>
          
        </div>
      </div>
    </section>
  );
}
