import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { CheckCircle2, ShieldCheck, MapPin, Compass } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-dark-surface relative overflow-hidden text-white">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Architectural Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              badge="About HARMYA KSHETHRA"
              title="We Create Spaces That Belong."
              subtitle="Rooted in the landscape of Ramapuram, Kottayam, we bridge contemporary luxury architecture with engineered construction integrity."
            />

            <div className="space-y-6 text-gray-muted text-base md:text-lg font-light leading-relaxed">
              <p>
                At <strong className="text-white font-medium">HARMYA KSHETHRA</strong>, we view architecture not merely as structural shelter, but as a permanent artistic dialogue between space, light, materials, and human life.
              </p>
              <p>
                Based in <strong className="text-gold font-medium">Ramapuram, Kottayam, Kerala</strong>, our practice provides unified design-build solutions. From initial conceptual spatial sketching to site excavation, structural concrete framing, custom joinery, and final key handover—we ensure a seamless, single-point architectural experience.
              </p>
            </div>

            <GoldDivider />

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="p-5 rounded-sm bg-dark-card border border-dark-border hover:border-gold/30 transition-colors">
                <div className="w-9 h-9 rounded-sm bg-gold/10 flex items-center justify-center text-gold mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-medium text-white mb-1">Architectural Design</h3>
                <p className="text-xs text-gray-subtle leading-relaxed">
                  Climate-responsive, solar-oriented layouts designed specifically for Kerala&apos;s tropical environment and topography.
                </p>
              </div>

              <div className="p-5 rounded-sm bg-dark-card border border-dark-border hover:border-gold/30 transition-colors">
                <div className="w-9 h-9 rounded-sm bg-gold/10 flex items-center justify-center text-gold mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-medium text-white mb-1">Turnkey Execution</h3>
                <p className="text-xs text-gray-subtle leading-relaxed">
                  Uncompromising structural engineering, material gate checks, and transparent project timelines.
                </p>
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-subtle font-mono">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Studio & HQ: Ramapuram, Kottayam District, Kerala</span>
            </div>
          </div>

          {/* Right Column: Layered Architectural Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              <img
                src="/images/about.jpg"
                alt="HARMYA KSHETHRA Architecture Studio Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-sm bg-dark/85 backdrop-blur-md border border-gold/30">
                <div className="text-xs uppercase tracking-[0.2em] text-gold font-mono mb-1">
                  OUR COMMITMENT
                </div>
                <div className="text-sm font-serif font-medium text-white">
                  &ldquo;Luxury without flashiness. Craftsmanship created to last generations.&rdquo;
                </div>
              </div>
            </div>

            {/* Ambient Gold Glow Behind Image */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
