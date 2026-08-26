import React from 'react';
import {
  ArrowUp,
  Heart,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCVModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCVModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020907] border-t border-emerald-500/20 text-emerald-300/80 text-xs py-14 relative overflow-hidden">
      {/* Radiant Top Glow Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-950/80">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight block">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                  M2 Informatique • Développeur Full-Stack & DevOps
                </span>
              </div>
            </div>
            <p className="text-emerald-200/80 text-xs leading-relaxed max-w-sm">
              Développeur Full-Stack, Mobile (Flutter & React Native) & Spécialiste DevOps. Étudiant en Master 2 Informatique à l'École Nationale de l'Informatique (ENI) de Fianarantsoa.
            </p>
            <div className="pt-1 flex items-center gap-2 text-emerald-300 font-mono text-[11px] bg-[#051c14] border border-emerald-500/30 p-2.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="italic">{PERSONAL_INFO.honorDeclaration}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Navigation Rapide
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> À Propos & Qualités
                </a>
              </li>
              <li>
                <a href="#skills" className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Compétences & Stack
                </a>
              </li>
              <li>
                <a href="#devops" className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> DevOps Lab & Terminal
                </a>
              </li>
              <li>
                <a href="#projects" className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Projets & Réalisations
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Expériences & Stages
                </a>
              </li>
              <li>
                <a href="#education" className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Formations (ENI)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Contact & Documents
            </h4>
            <div className="space-y-2.5 text-xs bg-[#04150f] border border-emerald-500/20 p-3.5 rounded-2xl">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-emerald-100 hover:text-white transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-emerald-100">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenCVModal}
                className="w-full px-4 py-2.5 rounded-xl bg-[#061e16] hover:bg-[#0a2c20] border border-emerald-500/40 text-emerald-200 hover:text-white font-bold text-xs transition-all shadow-md cursor-pointer hover:border-emerald-400 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Afficher le CV Complet (PDF / Impression)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-300/70">
          <div>
            © {new Date().getFullYear()} ANDRIAMIFEHY Fenomirindra Mitantsoa. Développeur Full-Stack, Mobile & DevOps.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white bg-[#051c14] hover:bg-[#08281d] border border-emerald-500/30 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-sm"
              title="Retour en haut"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
