"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { X, MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-dark/95 backdrop-blur-xl overflow-y-auto animate-fade-up">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl my-8 bg-dark-card border border-gold/30 rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10 overflow-hidden text-white max-h-[90vh] flex flex-col">
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-dark-border flex items-center justify-between bg-dark-surface">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-mono">
              PROJECT PORTFOLIO • {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white font-medium">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2.5 rounded-sm bg-dark border border-dark-border text-gray-subtle hover:text-gold hover:border-gold/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
          
          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-dark-border">
            <img
              src={project.heroImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-mono bg-dark/70 backdrop-blur-md p-3 rounded-sm border border-white/10">
              <span className="flex items-center gap-1.5 text-gold">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <Calendar className="w-4 h-4 text-gold" />
                Completed {project.year}
              </span>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Overview & Design Concept */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gold font-mono mb-2">
                  PROJECT OVERVIEW
                </h3>
                <p className="text-base text-gray-muted font-light leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="p-6 rounded-sm bg-dark-surface border border-dark-border">
                <h3 className="text-sm uppercase tracking-[0.2em] text-gold font-mono mb-2">
                  ARCHITECTURAL CONCEPT
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {project.concept}
                </p>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="lg:col-span-5 p-6 rounded-sm bg-dark-surface border border-gold/20 flex flex-col justify-between">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gold font-mono mb-4">
                  SCOPE OF WORK
                </h3>
                <ul className="space-y-3">
                  {project.scopeOfWork.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-muted">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-dark-border">
                <Button
                  href="#contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={onClose}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Inquire Similar Project
                </Button>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold font-mono mb-4">
                PROJECT GALLERY
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-sm overflow-hidden border border-dark-border group">
                    <img
                      src={img}
                      alt={`${project.name} Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
