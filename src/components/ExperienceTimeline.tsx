import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { EXPERIENCES_LIST } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experiences" className="py-20 bg-[#061510]/50 relative border-t border-[#14362b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Expérience Professionnelle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Parcours en Entreprise & Projets Clés
          </h2>
          <p className="text-emerald-200/70 text-sm sm:text-base leading-relaxed">
            Stages significatifs en milieu institutionnel et industriel, ainsi que réalisation d’applications mobiles et web complètes.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar on desktop */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#163c2f] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCES_LIST.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row gap-6 items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a2019] border-2 border-emerald-500 items-center justify-center text-white z-10 shadow-lg shadow-emerald-950/60">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] hover:border-emerald-600/50 transition-all duration-300 shadow-xl space-y-4 group">
                      {/* Top metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-300 bg-[#0d2a21] px-2.5 py-1 rounded-md border border-[#1b4839]">
                          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-200/80 px-2 py-0.5 rounded bg-[#0d2720] border border-[#16382d]">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-100/90 font-medium mt-1">
                          <Building2 className="w-3.5 h-3.5 text-teal-400" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-emerald-200/80 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Accomplishments */}
                      <ul className="space-y-1.5 pt-1">
                        {exp.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-emerald-300/80">
                            <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#14362b]">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#061611] text-emerald-200 border border-[#163c2f]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
