import React, { useState } from 'react';
import {
  FolderGit2,
  Smartphone,
  Globe,
  Monitor,
  ArrowUpRight,
  Sparkles,
  Calendar,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { key: 'all', label: 'Tous les Projets', icon: Layers },
    { key: 'mobile', label: 'Applications Mobiles', icon: Smartphone },
    { key: 'web', label: 'Applications Web & Full-Stack', icon: Globe },
    { key: 'desktop', label: 'Logiciels Desktop', icon: Monitor },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-emerald-400" />;
      case 'web':
        return <Globe className="w-4 h-4 text-teal-400" />;
      case 'desktop':
        return <Monitor className="w-4 h-4 text-blue-400" />;
      default:
        return <FolderGit2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio de Projets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Réalisations & Projets Phares
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Applications mobiles intelligentes, plateformes web d’entreprise et logiciels sur mesure développés avec rigueur.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold shadow-lg shadow-emerald-950/60 scale-[1.02]'
                    : 'bg-[#0a2019] text-emerald-200/80 hover:text-white hover:bg-[#0f2c22] border border-[#163c2f]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] hover:border-emerald-600/50 transition-all duration-300 p-6 flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-950/50 relative overflow-hidden"
            >
              {project.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-md">
                    Projet Clé
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-300/70">
                  <span className="p-1.5 rounded-lg bg-[#0d2720] border border-[#1b4839]">
                    {getCategoryIcon(project.category)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    {project.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-100/90 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description Snippet */}
                <p className="text-xs text-emerald-200/70 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#0d2720] text-emerald-200 border border-[#1b4839]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-[#14362b] flex items-center justify-between">
                <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {project.status}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-200 hover:text-white transition-colors group-hover:translate-x-1 cursor-pointer"
                >
                  <span>Détails & Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
