import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";
import { navLinks } from "@/data/navigation";
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-12 border-t border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-dark-border">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-sm overflow-hidden border border-gold/40 flex-shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="HARMYA KSHETHRA Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-semibold tracking-wider text-white">
                  HARMYA KSHETHRA
                </span>
                <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-mono">
                  Architecture • Construction
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-muted leading-relaxed font-light pr-4">
              Premium architecture studio and construction company based in Ramapuram, Kottayam, Kerala. Designing and building spaces with structural precision, architectural elegance, and lasting value.
            </p>

            {/* Social Profiles */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm bg-dark-card border border-dark-border hover:border-gold text-gray-subtle hover:text-gold flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href={companyInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-sm bg-dark-card border border-dark-border hover:border-gold text-gray-subtle hover:text-gold flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-mono font-medium">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-mono font-medium">
              SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-muted">
              <li>Residential Architecture</li>
              <li>Commercial Architecture</li>
              <li>Turnkey Construction</li>
              <li>Interior Architecture</li>
              <li>Heritage Renovation</li>
              <li>Project Management & Supervision</li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-mono font-medium">
              OFFICE LOCATION
            </h3>
            <div className="space-y-3 text-xs text-gray-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Ramapuram, Kottayam District, Kerala 686576</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{companyInfo.displayPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{companyInfo.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-subtle">
          <p>© {companyInfo.establishedYear} HARMYA KSHETHRA. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="#hero"
              aria-label="Back to top"
              className="p-2 rounded-sm bg-dark-card border border-dark-border text-gold hover:border-gold transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
