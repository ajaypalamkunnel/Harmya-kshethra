"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/companyInfo";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark text-white pt-20"
    >
      {/* Background Image with Slow Zoom & Cinematic Dark Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="HARMYA KSHETHRA Luxury Architectural Residence in Kottayam Kerala"
          className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom brightness-75 scale-105"
        />
        {/* Layered overlays for maximum typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-radial-glow opacity-80" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center flex flex-col items-center">
        {/* Location & Brand Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-gold/30 bg-dark/60 backdrop-blur-md mb-4 sm:mb-6 max-w-[92vw] animate-fade-up">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold animate-pulse shrink-0" />
          <span className="text-[8px] xs:text-[9px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.25em] text-gold font-medium truncate">
            Architectural Studio • Ramapuram, Kottayam
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-white leading-[1.08] max-w-5xl mb-6">
          Crafting Spaces. <br />
          <span className="text-transparent bg-clip-text bg-gold-gradient font-normal italic">
            Building Legacies.
          </span>
        </h1>

        {/* Animated Gold Underline Accent */}
        <div className="w-24 md:w-36 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mb-8 shadow-[0_0_12px_#FFD700]" />

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-gray-muted font-light max-w-2xl leading-relaxed mb-10">
          {companyInfo.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto">
            Explore Our Projects
          </Button>
          <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">
            Start Your Project
          </Button>
        </div>

        {/* Editorial Feature Indicators */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-8 border-t border-white/10 w-full max-w-4xl text-left">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-mono mb-1">LOCATION</div>
            <div className="text-xs sm:text-sm font-light text-gray-300">Ramapuram, Kottayam</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-mono mb-1">FOCUS</div>
            <div className="text-xs sm:text-sm font-light text-gray-300">Luxury Architecture</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-mono mb-1">EXECUTION</div>
            <div className="text-xs sm:text-sm font-light text-gray-300">Turnkey Construction</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-mono mb-1">PHILOSOPHY</div>
            <div className="text-xs sm:text-sm font-light text-gray-300">Precision & Permanence</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-muted font-mono">SCROLL</span>
        <Link href="#about" aria-label="Scroll to About section" className="text-gold hover:text-white transition-colors animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};
