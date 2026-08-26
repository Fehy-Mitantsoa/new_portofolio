import React, { useState } from 'react';
import {
  Code,
  Smartphone,
  Server,
  Database,
  Layers,
  Cpu,
  Terminal,
  Layout,
  Globe,
  Coffee,
  HardDrive,
  FileSpreadsheet,
  Box,
  GitBranch,
  TerminalSquare,
  Sparkles,
} from 'lucide-react';
import { TECH_SKILLS } from '../data/portfolioData';
import { SkillCategory, TechSkill } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { key: SkillCategory; label: string; icon: any }[] = [
    { key: 'all', label: 'Toutes les Compétences', icon: Layers },
    { key: 'mobile', label: 'Mobile (Flutter / React N.)', icon: Smartphone },
    { key: 'frontend', label: 'Frontend Web', icon: Layout },
    { key: 'backend', label: 'Backend & Langages', icon: Server },
    { key: 'database', label: 'Bases de Données', icon: Database },
    { key: 'devops', label: 'DevOps & Système', icon: Cpu },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? TECH_SKILLS
      : TECH_SKILLS.filter((s) => s.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-teal-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-orange-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-400" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-indigo-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'Box':
        return <Box className="w-5 h-5 text-blue-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'TerminalSquare':
        return <TerminalSquare className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stack & Savoir-Faire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Compétences Techniques & Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Un éventail technologique polyvalent et éprouvé sur des projets concrets, de la conception logicielle au déploiement opérationnel.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-950/60 scale-[1.02] font-bold'
                    : 'bg-[#0a2019] text-emerald-200/80 hover:text-white hover:bg-[#0f2c22] border border-[#163c2f]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: TechSkill, index: number) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#0a2019]/90 border border-[#163c2f] hover:border-emerald-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/40 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0d2720] border border-[#1b4839] group-hover:scale-105 transition-transform">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-emerald-300/70 capitalize">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  {skill.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {skill.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-emerald-200/70 leading-relaxed min-h-[36px]">
                  {skill.description}
                </p>
              </div>

              {/* Level Progress Bar */}
              <div className="pt-4 mt-2 border-t border-[#14362b] space-y-1.5">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-emerald-300/70">Niveau de maîtrise</span>
                  <span className="text-emerald-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-[#071611] rounded-full overflow-hidden border border-[#14362b]">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
