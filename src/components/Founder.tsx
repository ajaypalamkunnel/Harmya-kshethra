"use client";

import React from "react";
import { founderData } from "@/data/founder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Button } from "@/components/ui/Button";
import { Award, Compass, HardHat, FileText, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 md:py-32 bg-dark text-white relative overflow-hidden border-t border-dark-border/60">
      {/* Subtle Radial Glow in Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Leadership & Expertise"
          title="Meet Our Founder & Lead Engineer"
          subtitle="Combining B.Tech civil engineering precision, certified Vastu Shastra harmony, and over 5 years of architectural design & site execution practice."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo & Credentials Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group bg-dark-card">
              <img
                src={founderData.image}
                alt={`${founderData.name} - ${founderData.title} at HARMYA KSHETHRA`}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90" />

              {/* Bottom Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-sm bg-dark/90 backdrop-blur-md border border-gold/30">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-mono block mb-1">
                  LEAD ENGINEER & FOUNDER
                </span>
                <h3 className="text-xl font-serif text-white font-semibold">
                  {founderData.name}
                </h3>
                <p className="text-xs text-gray-subtle font-mono mt-0.5">
                  {founderData.degree} • {founderData.licenseStatus}
                </p>
              </div>
            </div>

            {/* Experience Pill Badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-sm bg-gold text-dark font-semibold text-xs uppercase tracking-wider font-mono shadow-[0_0_20px_rgba(255,215,0,0.4)] border border-gold-light flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>5+ Years Experience</span>
            </div>
          </div>

          {/* Right Column: Bio, Qualifications & Expertise Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Title & Bio */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-dark-card border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest mb-3">
                <span>{founderData.degree}</span>
                <span>•</span>
                <span>{founderData.vastuCertification}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white font-light leading-snug">
                Engineering Rigor Meets <br />
                <span className="text-transparent bg-clip-text bg-gold-gradient font-normal italic">
                  Vastu Spatial Harmony.
                </span>
              </h3>

              <p className="mt-4 text-base text-gray-muted font-light leading-relaxed">
                {founderData.bio}
              </p>
            </div>

            <GoldDivider />

            {/* 4 Pillars Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Pillar 1: Civil Engineering */}
              <div className="p-5 rounded-sm bg-dark-card border border-dark-border hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-medium text-white">B.Tech Civil Engineering</h4>
                    <span className="text-[10px] text-gold font-mono uppercase tracking-wider">Licensed Engineer</span>
                  </div>
                </div>
                <p className="text-xs text-gray-subtle leading-relaxed">
                  Structural load analysis, foundation safety, Kerala building code compliance, and structural integrity.
                </p>
              </div>

              {/* Pillar 2: Vastu Shastra */}
              <div className="p-5 rounded-sm bg-dark-card border border-dark-border hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-medium text-white">Vastu Shastra Certification</h4>
                    <span className="text-[10px] text-gold font-mono uppercase tracking-wider">Certified Practitioner</span>
                  </div>
                </div>
                <p className="text-xs text-gray-subtle leading-relaxed">
                  Harmonizing modern spatial orientation with traditional Vastu flow for positive energy, light, and ventilation.
                </p>
              </div>

              {/* Pillar 3: Plan Drawing */}
              <div className="p-5 rounded-sm bg-dark-card border border-dark-border hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-medium text-white">Architectural Plan Drawing</h4>
                    <span className="text-[10px] text-gold font-mono uppercase tracking-wider">2D & 3D Drafting</span>
                  </div>
                </div>
                <p className="text-xs text-gray-subtle leading-relaxed">
                  Precision 2D floor layouts, working structural drawings, 3D elevation renders, and permit approvals.
                </p>
              </div>

              {/* Pillar 4: 5+ Years Construction */}
              <div className="p-5 rounded-sm bg-dark-card border border-dark-border hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <HardHat className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-medium text-white">5+ Years Construction</h4>
                    <span className="text-[10px] text-gold font-mono uppercase tracking-wider">On-Site Execution</span>
                  </div>
                </div>
                <p className="text-xs text-gray-subtle leading-relaxed">
                  Proven project leadership in managing residential villas, material quality checks, and timely key handover.
                </p>
              </div>

            </div>

            {/* Bottom Consultation CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Consult with Er. Sarath Prakash
              </Button>
              <div className="flex items-center gap-2 text-xs text-gray-subtle font-mono">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Direct Lead Engineer Supervision on Every Project</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
