/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { DevOpsLab } from './components/DevOpsLab';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { CinematicShowcaseModal } from './components/CinematicShowcaseModal';
import { CinematicParticlesBackground } from './components/CinematicParticlesBackground';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isCinematicOpen, setIsCinematicOpen] = useState(false);

  return (
    <div className="min-h-screen bg-natural-forest text-[#e2ece7] selection:bg-emerald-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif] relative overflow-x-hidden">
      {/* Dynamic Ambient Cinematic Particle Canvas */}
      <CinematicParticlesBackground />

      {/* Top Sticky Navigation */}
      <Navbar
        onOpenCVModal={() => setIsCVModalOpen(true)}
        onOpenCinematicModal={() => setIsCinematicOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenCVModal={() => setIsCVModalOpen(true)}
          onOpenCinematicModal={() => setIsCinematicOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <DevOpsLab />
        <ProjectsSection />
        <ExperienceTimeline />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Floating 16:9 Cinematic Video Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsCinematicOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-2xl shadow-emerald-950/90 border border-emerald-300/60 hover:scale-105 transition-all cursor-pointer group"
          title="Lancer la Démo Vidéo Cinématique 16:9 (4K)"
        >
          <div className="w-6 h-6 rounded-lg bg-black/20 flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform">
            <Play className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="hidden sm:inline tracking-tight">Démo Vidéo 16:9</span>
          <span className="sm:hidden tracking-tight">Vidéo 4K</span>
          <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
        </button>
      </div>

      {/* Printable / Downloadable CV Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* 16:9 Cinematic Video Showreel Modal Player */}
      <CinematicShowcaseModal
        isOpen={isCinematicOpen}
        onClose={() => setIsCinematicOpen(false)}
        onOpenCVModal={() => {
          setIsCinematicOpen(false);
          setIsCVModalOpen(true);
        }}
      />
    </div>
  );
}
