"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Residential", "Commercial", "Interior", "Renovation"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-dark-surface text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <SectionHeading
            badge="Selected Works"
            title="Featured Projects & Portfolio"
            subtitle="Explore our architecture and construction projects created across Ramapuram, Kottayam, and Kerala."
            className="mb-0"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] transition-all rounded-sm ${
                  selectedCategory === category
                    ? "bg-gold text-dark font-semibold shadow-[0_0_12px_rgba(255,215,0,0.3)]"
                    : "bg-dark-card text-gray-muted hover:text-white border border-dark-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
