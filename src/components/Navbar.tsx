"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PhoneCall, ArrowRight } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { companyInfo } from "@/data/companyInfo";
import { Button } from "@/components/ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Section spy
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark/90 backdrop-blur-md border-b border-dark-border/80 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-dark/90 via-dark/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-sm overflow-hidden border border-gold/40 group-hover:border-gold transition-colors flex-shrink-0">
              <img
                src="/images/logo.jpg"
                alt="HARMYA KSHETHRA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-serif font-semibold tracking-wider text-white group-hover:text-gold transition-colors">
                HARMYA KSHETHRA
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-gold uppercase font-mono">
                Architecture • Construction
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 ${
                    isActive ? "text-gold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold shadow-[0_0_8px_#FFD700]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="#contact" variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href={`https://wa.me/${companyInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="p-2 text-gold border border-gold/30 rounded-sm hover:border-gold transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-gold transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-2xl lg:hidden flex flex-col transition-all duration-300 animate-fade-up"
        >
          <div className="pt-24 pb-8 px-6 flex flex-col justify-between h-full">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg uppercase tracking-[0.2em] font-serif transition-all flex items-center justify-between pb-3 border-b border-dark-border ${
                      isActive ? "text-gold pl-2 border-gold/40 font-semibold" : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#FFD700]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Consultation
              </Button>
              <div className="text-center text-xs text-gray-subtle tracking-wider uppercase">
                {companyInfo.location}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
