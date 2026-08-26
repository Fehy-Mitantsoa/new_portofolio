import React from 'react';
import {
  X,
  Smartphone,
  Globe,
  Monitor,
  CheckCircle2,
  Layers,
  Calendar,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'web':
        return <Globe className="w-5 h-5 text-teal-400" />;
      case 'desktop':
        return <Monitor className="w-5 h-5 text-blue-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05130e]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a2019] border border-[#184234] rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#0e2920] text-emerald-300 hover:text-white hover:bg-[#143d30] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#0d2720] border border-[#1b4839]">
              {getCategoryIcon(project.category)}
            </span>
            <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              {project.category.toUpperCase()} • {project.date}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-emerald-100/90">
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-[#14362b]">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-[#0d2a21] text-emerald-300 border border-[#1b4839]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Full Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300/70">
            Description du Projet
          </h4>
          <p className="text-sm text-emerald-100/90 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Highlights / Features */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300/70">
            Points Clés & Fonctionnalités Réalisées :
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Context & Architecture */}
        {(project.context || project.architecture) && (
          <div className="p-4 rounded-2xl bg-[#061611]/80 border border-[#14362b] space-y-2 text-xs">
            {project.context && (
              <div>
                <strong className="text-emerald-400">Contexte : </strong>
                <span className="text-emerald-200/80">{project.context}</span>
              </div>
            )}
            {project.architecture && (
              <div>
                <strong className="text-teal-400">Architecture : </strong>
                <span className="text-emerald-200/80">{project.architecture}</span>
              </div>
            )}
          </div>
        )}

        {/* Footer Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-md"
          >
            Fermer la vue détaillée
          </button>
        </div>
      </div>
    </div>
  );
};
