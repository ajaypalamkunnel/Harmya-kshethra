"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Home, Building2, Layers, Eye, HardHat, Building, KeyRound, Hammer, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Home,
  Building2,
  Layers,
  Eye,
  HardHat,
  Building,
  KeyRound,
  Hammer,
};

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | "Architecture" | "Construction">("All");

  const filteredServices = activeCategory === "All" 
    ? servicesData 
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 md:py-32 bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <SectionHeading
            badge="Comprehensive Practice"
            title="Design & Construction Services"
            subtitle="From initial spatial concept drawings to structural foundation pours and key handover."
            className="mb-0"
          />

          {/* Category Toggle Tabs */}
          <div className="inline-flex p-1 rounded-sm bg-dark-card border border-dark-border self-start md:self-auto">
            {(["All", "Architecture", "Construction"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all rounded-sm ${
                  activeCategory === cat
                    ? "bg-gold text-dark font-semibold shadow-[0_0_12px_rgba(255,215,0,0.3)]"
                    : "text-gray-muted hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sophisticated Editorial Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Compass;

            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-sm bg-dark-card border border-dark-border hover:border-gold/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                {/* Subtle top gold accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xl font-mono text-gold font-light tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-dark-surface border border-dark-border group-hover:border-gold/40 flex items-center justify-center text-gray-subtle group-hover:text-gold transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-subtle font-mono mb-2">
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-gray-muted font-light leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Detail Bullet Points */}
                  <ul className="space-y-2 pt-4 border-t border-dark-border/60">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-subtle">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Indicator */}
                <div className="mt-8 pt-4 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-gold opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Inquire Service</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner */}
        <div className="mt-16 p-8 rounded-sm bg-dark-surface border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-serif text-white mb-1">Have a custom architectural scope in mind?</h4>
            <p className="text-xs text-gray-muted">We provide tailored turnkey solutions for residential estates and commercial developments in Kerala.</p>
          </div>
          <Button href="#contact" variant="primary" size="md">
            Discuss Your Project
          </Button>
        </div>

      </div>
    </section>
  );
};
