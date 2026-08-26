import React, { useState, useEffect } from 'react';
import {
  Code2,
  Menu,
  X,
  FileDown,
  Mail,
  Smartphone,
  Server,
  Layers,
  GraduationCap,
  Sparkles,
  Play,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCVModal: () => void;
  onOpenCinematicModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal, onOpenCinematicModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'À Propos', href: '#about', icon: Sparkles },
    { label: 'Compétences', href: '#skills', icon: Code2 },
    { label: 'DevOps Lab', href: '#devops', icon: Server },
    { label: 'Projets', href: '#projects', icon: Smartphone },
    { label: 'Expériences', href: '#experiences', icon: Layers },
    { label: 'Formation', href: '#education', icon: GraduationCap },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020b08]/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-xl shadow-black/60 py-3'
          : 'bg-[#030d0a]/75 backdrop-blur-md border-b border-[#113126]/60 py-4 shadow-md shadow-black/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-brand-logo"
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl p-1 transition-all"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-emerald-950/70 group-hover:scale-105 transition-transform ring-2 ring-emerald-500/40 group-hover:ring-emerald-400">
            <img
              src={PERSONAL_INFO.photoUrl}
              alt={PERSONAL_INFO.fullName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#020b08] rounded-full animate-pulse" />
          </div>
          <div>
            <div className="font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-2">
              <span className="group-hover:text-emerald-300 transition-colors">ANDRIAMIFEHY</span>
              <span className="hidden md:inline text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Master 2 ENI
              </span>
            </div>
            <p className="text-xs text-emerald-300/70 font-mono hidden sm:block">
              Fenomirindra M. • Full-Stack & DevOps
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#051a13]/80 p-1.5 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-emerald-200/90 hover:text-white px-3 py-1.5 rounded-xl hover:bg-emerald-500/20 hover:text-emerald-300 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onOpenCinematicModal && (
            <button
              id="nav-showreel-button"
              onClick={onOpenCinematicModal}
              className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white bg-[#062016] hover:bg-emerald-950/90 border border-emerald-500/50 hover:border-emerald-400 px-3 py-2 rounded-xl transition-all shadow-md shadow-emerald-950/70 group cursor-pointer"
            >
              <div className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                <Play className="w-3 h-3 fill-current" />
              </div>
              <span className="hidden xl:inline">Démo Vidéo 16:9</span>
              <span className="xl:hidden">Démo 4K</span>
            </button>
          )}

          <button
            id="nav-cv-button"
            onClick={onOpenCVModal}
            className="flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-white bg-[#061e16] hover:bg-[#0a2c20] border border-emerald-500/40 px-3.5 py-2 rounded-xl transition-all shadow-sm hover:border-emerald-400 cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-emerald-400" />
            <span>Voir / Imprimer CV</span>
          </button>

          <a
            id="nav-contact-button"
            href="#contact"
            className="flex items-center gap-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 px-4 py-2 rounded-xl shadow-lg shadow-emerald-950/70 transition-all hover:scale-[1.02] border border-emerald-300/40"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Me Contacter</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu principal"
          className="lg:hidden p-2 rounded-xl bg-[#061e16] border border-emerald-500/30 text-emerald-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#03100c]/95 backdrop-blur-2xl border-b border-emerald-500/30 px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-emerald-100 hover:text-emerald-300 hover:bg-[#09241b] text-sm font-medium transition-colors"
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-emerald-500/20 flex flex-col gap-2.5">
            {onOpenCinematicModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCinematicModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-emerald-300 bg-[#062016] border border-emerald-500/50 rounded-xl hover:bg-emerald-950/80 shadow-md"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Lancer la Démo Vidéo 16:9 4K</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-emerald-300 bg-[#061e16] border border-emerald-500/40 rounded-xl hover:bg-[#0a2c20]"
            >
              <FileDown className="w-4 h-4" />
              <span>Voir / Imprimer le CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Me Contacter Directement</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
