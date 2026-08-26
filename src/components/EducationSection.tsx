import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formations & Cursus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formations & Diplômes Académiques
          </h2>
          <p className="text-emerald-200/70 text-sm sm:text-base leading-relaxed">
            Un cursus d'excellence à l'École Nationale de l'Informatique (ENI) sanctionné par des mentions honorifiques.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 group hover:shadow-emerald-950/40"
            >
              <div className="space-y-4">
                {/* Year and Mention */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-300 bg-[#0d2a21] px-3 py-1 rounded-full border border-[#1b4839]">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {edu.year}
                  </span>
                  {edu.mention && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-950/50 px-2.5 py-0.5 rounded-full border border-amber-700/50">
                      <Award className="w-3 h-3 text-amber-400" />
                      {edu.mention}
                    </span>
                  )}
                </div>

                {/* Degree and Institution */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-emerald-200 mt-1">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-300/60 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-400/80" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  {edu.description}
                </p>

                {/* Optional Key Courses */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[#14362b]">
                    <div className="text-[11px] font-mono font-bold text-emerald-300/80 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-emerald-400" />
                      <span>Modules d'études clés :</span>
                    </div>
                    <ul className="space-y-1">
                      {edu.courses.map((course, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-emerald-200/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Badge */}
              <div className="pt-4 border-t border-[#14362b] flex items-center justify-between text-xs text-emerald-300/60">
                <span className="font-mono text-[11px]">Diplôme Officiel</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Validé
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
