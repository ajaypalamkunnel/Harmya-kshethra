import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { ArrowUpRight, MapPin } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer relative bg-dark-card border border-dark-border hover:border-gold/50 rounded-sm overflow-hidden transition-all duration-500 flex flex-col"
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark">
        <img
          src={project.heroImage}
          alt={`${project.name} - ${project.type} in ${project.location}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-sm bg-dark/80 backdrop-blur-md border border-gold/30 text-[10px] uppercase tracking-[0.2em] text-gold font-mono">
            {project.category}
          </span>
          <span className="text-xs font-mono text-white/80 bg-dark/70 px-2 py-1 rounded-sm border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Action Icon on Hover */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-sm bg-gold text-dark flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_#FFD700]">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-gold font-mono mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
          </div>

          <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors mb-2">
            {project.name}
          </h3>

          <p className="text-xs text-gray-muted font-light line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Gold Border Highlight Line */}
        <div className="mt-6 pt-4 border-t border-dark-border/60 flex items-center justify-between text-xs text-gray-subtle uppercase tracking-[0.15em] group-hover:text-white transition-colors">
          <span>{project.type}</span>
          <span className="text-gold font-medium text-[11px] group-hover:underline">View Project Details</span>
        </div>
      </div>
    </div>
  );
};
