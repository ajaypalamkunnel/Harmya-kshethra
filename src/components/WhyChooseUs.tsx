import React from "react";
import { whyChooseUsData } from "@/data/quality";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              badge="Our Differentiation"
              title="Why HARMYA KSHETHRA?"
              subtitle="The intersection of visionary architectural design and dependable construction management."
            />
            <p className="text-sm text-gray-muted leading-relaxed font-light mb-6">
              Choosing an architectural build partner is one of the most critical investments you will make. We combine high-end studio design aesthetics with complete engineering transparency.
            </p>
            <GoldDivider />
          </div>

          {/* Right Editorial Accordion / Card List */}
          <div className="lg:col-span-7 space-y-6">
            {whyChooseUsData.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-sm bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-mono text-gold font-bold">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
