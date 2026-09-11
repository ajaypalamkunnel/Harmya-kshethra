import React from "react";
import { qualityData } from "@/data/quality";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldAlert, Award, Wrench, ShieldCheck, CheckCircle } from "lucide-react";

export const ConstructionQuality: React.FC = () => {
  return (
    <section id="quality" className="py-24 md:py-32 bg-dark-surface text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Uncompromising Standards"
          title="Built With Precision."
          subtitle="Engineering rigor, material certification, and dedicated resident site supervision at every stage of construction."
        />

        {/* Quality Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityData.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-sm bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-gold tracking-widest font-bold">
                    QUALITY PROTOCOL {item.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#FFD700]" />
                </div>

                <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dark-border/60 flex items-center gap-2 text-xs text-gold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider text-[10px] font-mono">VERIFIED CODE COMPLIANCE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Construction Highlights Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-sm bg-dark border border-gold/30">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center text-gold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-serif text-white mb-1">Structural Integrity</h4>
              <p className="text-xs text-gray-muted leading-relaxed">
                Calculated to withstand Kerala monsoon soil shifts, moisture penetration, and seismic load requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center text-gold shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-serif text-white mb-1">Craftsmanship Guarantee</h4>
              <p className="text-xs text-gray-muted leading-relaxed">
                Custom joinery, shadow gap plaster reveals, and precision tile layouts executed by seasoned artisans.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center text-gold shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-serif text-white mb-1">Material Integrity</h4>
              <p className="text-xs text-gray-muted leading-relaxed">
                100% factory-tested rebar, moisture-cured concrete, and non-toxic high-performance waterproofing sealants.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
