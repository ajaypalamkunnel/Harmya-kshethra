import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, MessageSquare, ExternalLink } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-surface text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Map Link */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              badge="Get in Touch"
              title="Let's Build Your Vision."
              subtitle="Have a project in mind? Let's discuss your vision, requirements, site conditions, and possibilities."
            />

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Office Location */}
              <div className="p-6 rounded-sm bg-dark-card border border-dark-border flex items-start gap-4 hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-gold font-mono mb-1">
                    STUDIO OFFICE
                  </h3>
                  <p className="text-sm font-serif text-white mb-1">
                    Ramapuram, Kottayam, Kerala
                  </p>
                  <p className="text-xs text-gray-subtle leading-relaxed mb-3">
                    {companyInfo.fullAddress}
                  </p>
                  <Link
                    href={companyInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline font-mono"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-6 rounded-sm bg-dark-card border border-dark-border flex items-start gap-4 hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-xs uppercase tracking-[0.18em] text-gold font-mono mb-1">
                    DIRECT CALL & WHATSAPP
                  </h3>
                  <p className="text-sm font-serif text-white mb-3">
                    {companyInfo.displayPhone}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`tel:${companyInfo.phone}`}
                      className="px-3 py-1.5 rounded-sm bg-dark-surface border border-gold/40 text-xs text-white hover:text-gold transition-colors font-mono"
                    >
                      Call Office
                    </Link>
                    <Link
                      href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20HARMYA%20KSHETHRA,%20I%20would%20like%20to%20discuss%20an%20architectural%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-sm bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-400 hover:bg-emerald-900/60 transition-colors font-mono flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Inquiry</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-sm bg-dark-card border border-dark-border flex items-start gap-4 hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-gold font-mono mb-1">
                    EMAIL INQUIRIES
                  </h3>
                  <Link
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm font-serif text-white hover:text-gold transition-colors"
                  >
                    {companyInfo.email}
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-sm bg-dark-card border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <h3 className="text-2xl font-serif text-white mb-2">Book a Consultation</h3>
            <p className="text-xs text-gray-muted mb-8 font-light">
              Fill out the form below and our architectural team will contact you to schedule an in-person or virtual project review.
            </p>
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};
