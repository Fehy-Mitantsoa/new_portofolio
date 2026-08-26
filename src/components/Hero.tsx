import React, { useState } from 'react';
import {
  FileText,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Smartphone,
  Server,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Play,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
  onOpenCinematicModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal, onOpenCinematicModal }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center"
    >
      {/* Hero Background Screen Image with Ambient Overlays */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={PERSONAL_INFO.heroBgUrl}
          alt="Workspace & Screen Setup"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.40] contrast-[1.1] saturate-[1.2]"
        />
        {/* Layered Gradient Masks for Perfect Readability & Deep Forest Ambiance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040f0b]/90 via-[#051a14]/80 to-[#020b08] -z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030e0a]/60 to-[#020b08] -z-10" />
      </div>

      {/* Background Decorative Natural Gradients (Lush Forest, Morning Mist, Amber Sunlight) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-teal-500/12 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Organic Pattern */}
      <div className="absolute inset-0 natural-organic-pattern [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_70%,transparent_100%)] -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponible pour Missions & Freelance
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0c221b] text-emerald-200/90 border border-[#163c2f]">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Header / Name */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider uppercase text-emerald-400 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Portfolio Professionnel & DevOps
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Objective Paragraph */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0a2019]/90 border border-[#184234] shadow-inner text-emerald-100/90 text-sm sm:text-base leading-relaxed relative">
              <div className="absolute -left-1 top-4 bottom-4 w-1.5 bg-emerald-500 rounded-r" />
              <p>
                <strong className="text-white">Objectif professionnel : </strong>
                {PERSONAL_INFO.objective}
              </p>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {onOpenCinematicModal && (
                <button
                  id="hero-cinematic-cta"
                  onClick={onOpenCinematicModal}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-950/80 transition-all hover:scale-[1.03] cursor-pointer ring-2 ring-emerald-300/60 animate-pulse"
                >
                  <div className="w-5 h-5 rounded-lg bg-black/20 flex items-center justify-center text-slate-950">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span>🎬 Démo Vidéo Cinématique 16:9 (4K)</span>
                </button>
              )}

              <a
                id="hero-projects-cta"
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#08261c] hover:bg-[#0d3427] text-emerald-100 font-bold text-sm border border-emerald-500/40 hover:border-emerald-400 transition-all hover:scale-[1.02] cursor-pointer shadow-md"
              >
                <span>Découvrir mes Réalisations</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>

              <button
                id="hero-view-cv-cta"
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0b241c] hover:bg-[#103227] text-emerald-100 font-semibold text-sm border border-[#1d4c3c] hover:border-emerald-500/50 transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Consulter le CV (PDF)</span>
              </button>

              <a
                id="hero-whatsapp-cta"
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0a2019] hover:bg-[#0f2d23] text-emerald-200 hover:text-white font-medium text-sm border border-[#163c2f] hover:border-[#205240] transition-colors"
                title="Discuter sur WhatsApp"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Direct Contact Badges (Click to Copy) */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-emerald-300/70">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a2019]/80 border border-[#163c2f] hover:border-emerald-600/50 text-emerald-200 hover:text-white transition-all cursor-pointer"
                title="Cliquer pour copier l'email"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-emerald-600" />
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a2019]/80 border border-[#163c2f] hover:border-emerald-600/50 text-emerald-200 hover:text-white transition-all cursor-pointer"
                title="Cliquer pour copier le numéro"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-emerald-600" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Portrait Card & Tech Stack Aura */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow Card */}
              <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#0a221b]/95 to-[#061611]/95 border border-[#184234] shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Top Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-[#14362b] mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-emerald-200">Profil Validé & Certifié</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-700/40">
                    ENI Fianarantsoa
                  </span>
                </div>

                {/* Profile Photo Display with Emerald Border & Glow */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-2xl bg-gradient-to-tr from-[#0b241c] via-[#093529] to-[#061913] group">
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      alt={PERSONAL_INFO.fullName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay at Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#040f0b] via-[#040f0b]/70 to-transparent flex flex-col justify-end p-2.5">
                      <div className="font-mono text-xs font-bold text-white truncate">
                        {PERSONAL_INFO.shortName}
                      </div>
                      <div className="text-[10px] text-emerald-300 font-medium truncate">
                        {PERSONAL_INFO.title}
                      </div>
                    </div>

                    {/* Verified Student Badge */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#061611]/90 text-[10px] font-mono text-emerald-300 border border-[#184234] backdrop-blur-sm">
                      M2 ENI
                    </div>
                  </div>
                </div>

                {/* Core Domains Mini Grid */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-2.5 rounded-xl bg-[#061712]/80 border border-[#14362b]">
                    <Smartphone className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-emerald-100">Mobile</div>
                    <div className="text-[9px] text-emerald-400/70">Flutter • React N.</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#061712]/80 border border-[#14362b]">
                    <Terminal className="w-4 h-4 text-teal-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-emerald-100">Full-Stack</div>
                    <div className="text-[9px] text-teal-400/70">React • Laravel</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#061712]/80 border border-[#14362b]">
                    <Server className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-emerald-100">DevOps</div>
                    <div className="text-[9px] text-amber-400/70">Docker • CI/CD</div>
                  </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-4 pt-3 border-t border-[#14362b] text-center">
                  <p className="text-xs text-emerald-200/70 italic">
                    "Rigueur, passion du code propre et esprit d'innovation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-14 pt-10 border-t border-[#14362b] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-[#081e17]/70 border border-[#163c2f] text-center hover:border-emerald-500/40 transition-colors shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-emerald-200/70 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
