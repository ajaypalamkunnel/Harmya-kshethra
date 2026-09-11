import React from "react";
import { processData } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="How We Work"
          title="From Vision to Reality"
          subtitle="Our systematic 5-stage architectural design & construction timeline ensuring quality, transparency, and execution speed."
          centered
        />

        {/* Desktop Horizontal Process Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative mt-16">
          {/* Horizontal Connecting Gold Line */}
          <div className="absolute top-12 left-10 right-10 h-[1.5px] bg-gradient-to-r from-gold/30 via-gold to-gold/30 z-0" />

          {processData.map((item, idx) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center text-center group">
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-full bg-dark-card border-2 border-gold/40 group-hover:border-gold flex flex-col items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_20px_#FFD700] mb-6 group-hover:scale-105">
                <span className="text-xs font-mono text-gold font-bold">STAGE</span>
                <span className="text-xl font-serif font-semibold text-white">{item.step}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-serif text-white group-hover:text-gold transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-muted font-light leading-relaxed mb-4 px-2">
                {item.subtitle}
              </p>

              {/* Highlights */}
              <div className="w-full p-4 rounded-sm bg-dark-card border border-dark-border text-left">
                <ul className="space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[11px] text-gray-subtle">
                      <Check className="w-3 h-3 text-gold shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Process Timeline */}
        <div className="lg:hidden relative mt-12 space-y-8 pl-6 border-l border-gold/30">
          {processData.map((item) => (
            <div key={item.step} className="relative pl-6">
              {/* Step Dot */}
              <div className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-dark-card border-2 border-gold flex items-center justify-center text-[10px] font-mono text-gold font-bold">
                {item.step}
              </div>

              <div className="p-6 rounded-sm bg-dark-card border border-dark-border">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-mono mb-1 block">
                  STAGE {item.step}
                </span>
                <h3 className="text-xl font-serif text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-3 border-t border-dark-border">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-subtle">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
