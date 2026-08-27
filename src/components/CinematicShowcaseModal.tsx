import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Terminal as TerminalIcon,
  FolderGit2,
  GraduationCap,
  Mail,
  Phone,
  FileDown,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Home,
  ArrowLeft,
} from 'lucide-react';
import { PERSONAL_INFO, TECH_SKILLS, DEVOPS_MODULES, PROJECTS_LIST, EXPERIENCES_LIST, EDUCATION_LIST } from '../data/portfolioData';
import { soundEngine } from '../utils/cinematicAudio';

interface CinematicShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCVModal: () => void;
}

interface SceneConfig {
  id: number;
  title: string;
  chapterLabel: string;
  duration: number; // in seconds
}

const SCENES: SceneConfig[] = [
  { id: 0, title: 'Introduction & Identité', chapterLabel: '01. INTRO', duration: 8 },
  { id: 1, title: 'Vision & Profil Ingénieur', chapterLabel: '02. PROFIL', duration: 8 },
  { id: 2, title: 'Stack Full-Stack & DevOps', chapterLabel: '03. STACK & DEVOPS', duration: 9 },
  { id: 3, title: 'Projets & Réalisations Stars', chapterLabel: '04. PROJETS', duration: 9 },
  { id: 4, title: 'Parcours ENI & Expériences', chapterLabel: '05. PARCOURS', duration: 8 },
  { id: 5, title: 'Disponibilité & Contact', chapterLabel: '06. CONTACT', duration: 8 },
];

const TOTAL_DURATION = SCENES.reduce((acc, s) => acc + s.duration, 0);

export const CinematicShowcaseModal: React.FC<CinematicShowcaseModalProps> = ({
  isOpen,
  onClose,
  onOpenCVModal,
}) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [sceneProgress, setSceneProgress] = useState<number>(0); // 0 to 1
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  // Initialize sound engine on open
  useEffect(() => {
    if (isOpen) {
      soundEngine.init();
      soundEngine.setMuted(isMuted);
      setCurrentSceneIndex(0);
      setSceneProgress(0);
      setIsPlaying(true);
      soundEngine.playDeepBoom();
    }
  }, [isOpen]);

  // Handle Mute toggle
  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundEngine.setMuted(nextMute);
    if (!nextMute) {
      soundEngine.playChime(600);
    }
  };

  // Main animation timer loop
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const safeIndex = Math.max(0, Math.min(SCENES.length - 1, currentSceneIndex || 0));
    const currentScene = SCENES[safeIndex] || SCENES[0];
    const duration = currentScene?.duration || 8;
    const updateIntervalMs = 50;
    const step = (updateIntervalMs / (duration * 1000)) * playbackSpeed;

    const interval = window.setInterval(() => {
      setSceneProgress((prev) => {
        const next = prev + step;
        if (next >= 1) {
          // Go to next scene
          if (safeIndex < SCENES.length - 1) {
            setCurrentSceneIndex((idx) => Math.min(SCENES.length - 1, (idx || 0) + 1));
            soundEngine.playWhoosh();
            return 0;
          } else {
            // Finished loop or pause at end
            setIsPlaying(false);
            return 1;
          }
        }
        return next;
      });
    }, updateIntervalMs);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying, currentSceneIndex, playbackSpeed]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
      if (e.key === 'ArrowRight') {
        goToScene(Math.min(SCENES.length - 1, currentSceneIndex + 1));
      }
      if (e.key === 'ArrowLeft') {
        goToScene(Math.max(0, currentSceneIndex - 1));
      }
      if (e.key === 'm') toggleMute();
      if (e.key === 'f') toggleFullscreen();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSceneIndex, isMuted]);

  // Project rotation ticker in Scene 3
  useEffect(() => {
    if (currentSceneIndex === 3) {
      const projTimer = setInterval(() => {
        setActiveProjectIndex((prev) => (prev + 1) % Math.max(1, Math.min(3, PROJECTS_LIST.length)));
      }, 3000 / playbackSpeed);
      return () => clearInterval(projTimer);
    }
  }, [currentSceneIndex, playbackSpeed]);

  const goToScene = (index: number) => {
    const safeIdx = Math.max(0, Math.min(SCENES.length - 1, index || 0));
    setCurrentSceneIndex(safeIdx);
    setSceneProgress(0);
    soundEngine.playWhoosh();
  };

  const handleRestart = () => {
    setCurrentSceneIndex(0);
    setSceneProgress(0);
    setIsPlaying(true);
    soundEngine.playDeepBoom();
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Return to home page action
  const handleReturnHome = () => {
    soundEngine.playChime(520);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate global elapsed time safely
  const safeSceneIndex = Math.max(0, Math.min(SCENES.length - 1, currentSceneIndex || 0));
  const activeScene = SCENES[safeSceneIndex] || SCENES[0];
  const currentSceneOffset = SCENES.slice(0, safeSceneIndex).reduce((acc, s) => acc + (s?.duration || 0), 0);
  const totalElapsed = currentSceneOffset + (sceneProgress || 0) * (activeScene?.duration || 8);
  const globalPercentage = TOTAL_DURATION > 0 ? Math.min(100, Math.max(0, (totalElapsed / TOTAL_DURATION) * 100)) : 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-2 sm:p-4 lg:p-6 overflow-hidden">
      {/* 16:9 Cinematic Video Container */}
      <div
        ref={containerRef}
        className={`relative w-full max-w-6xl aspect-video bg-[#030c08] border border-emerald-500/30 rounded-2xl sm:rounded-3xl shadow-[0_0_80px_rgba(16,185,129,0.25)] overflow-hidden flex flex-col justify-between ${
          isFullscreen ? 'h-screen max-w-none rounded-none border-0' : ''
        }`}
      >
        {/* Background Atmosphere & Ambient Video Lights */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            src={PERSONAL_INFO.heroBgUrl}
            alt="Cinematic Screen Ambience"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 filter blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020906] via-[#020b08]/85 to-[#020906]/95" />
          
          {/* Animated Laser Grid & Lens Flare */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-teal-500/15 rounded-full blur-[90px]" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
          
          {/* Subtle Video Scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
        </div>

        {/* Top Video Header HUD */}
        <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#061e16]/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-white">4K SHOWREEL</span>
              <span className="text-emerald-400/60">•</span>
              <span className="text-emerald-300">16:9 CINEMATIC</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-emerald-200/80 font-mono">
              <span className="text-emerald-400 font-bold">{activeScene.chapterLabel}</span>
              <span>— {activeScene.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Home Return Button in Header */}
            <button
              id="modal-header-home-btn"
              onClick={handleReturnHome}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 hover:text-white border border-emerald-500/40 text-xs font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
              title="Retourner à la page d'accueil"
            >
              <Home className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Page d'accueil</span>
            </button>

            <button
              onClick={toggleMute}
              className="p-2 rounded-xl bg-black/60 hover:bg-emerald-950/80 text-emerald-300 hover:text-white border border-emerald-500/30 transition-colors cursor-pointer"
              title={isMuted ? 'Activer le son d’ambiance' : 'Couper le son'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-black/60 hover:bg-emerald-950/80 text-emerald-300 hover:text-white border border-emerald-500/30 transition-colors cursor-pointer hidden sm:block"
              title="Plein écran (F)"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-black/60 hover:bg-red-950/80 text-emerald-300 hover:text-red-300 border border-emerald-500/30 hover:border-red-500/50 transition-colors cursor-pointer"
              title="Fermer (Échap)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Central Scene Stage with Dynamic Transitions */}
        <div className="relative flex-1 flex items-center justify-center px-4 sm:px-10 lg:px-16 overflow-hidden">
          <AnimatePresence mode="wait">
            {/* SCENE 0: INTRO & LOGO REVEAL */}
            {currentSceneIndex === 0 && (
              <motion.div
                key="scene-0"
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.15, filter: 'blur(12px)' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full max-w-4xl text-center space-y-6"
              >
                {/* 3D Animated Monogram Badge */}
                <motion.div
                  initial={{ y: 30, rotateY: 90 }}
                  animate={{ y: 0, rotateY: 0 }}
                  transition={{ duration: 1, ease: 'backOut' }}
                  className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-300 blur-xl opacity-60 animate-pulse" />
                  <div className="relative w-full h-full rounded-3xl bg-[#07241a] border-2 border-emerald-400 flex items-center justify-center shadow-2xl overflow-hidden group">
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      alt={PERSONAL_INFO.fullName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-1">
                      <span className="text-[10px] font-mono font-bold text-emerald-300">AM</span>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Typography */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>PORTFOLIO SHOWCASE • MASTER 2 ENI</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
                  >
                    ANDRIAMIFEHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">Fenomirindra</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-sm sm:text-lg text-emerald-200/90 font-medium max-w-2xl mx-auto"
                  >
                    Développeur Full-Stack, Applications Mobiles (Flutter & React Native) & Ingénierie DevOps
                  </motion.p>
                </div>

                {/* Live Credentials Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-wrap justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-emerald-300"
                >
                  <span className="px-3 py-1.5 rounded-xl bg-[#062016] border border-emerald-500/30">
                    🏛 École Nationale de l'Informatique
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-[#062016] border border-emerald-500/30">
                    🚀 Prêt pour missions Freelance & CDI
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-[#062016] border border-emerald-500/30">
                    🌍 Antananarivo / Remote International
                  </span>
                </motion.div>
              </motion.div>
            )}

            {/* SCENE 1: PROFIL & VISION */}
            {currentSceneIndex === 1 && (
              <motion.div
                key="scene-1"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center"
              >
                <div className="md:col-span-5 flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-3xl overflow-hidden ring-4 ring-emerald-400/50 shadow-2xl shadow-emerald-950/80 bg-[#062016]"
                  >
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      alt={PERSONAL_INFO.fullName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-emerald-300 border border-emerald-500/40">
                      M2 ENI
                    </div>
                  </motion.div>
                  <h3 className="mt-3 text-lg font-bold text-white tracking-tight">Fenomirindra Mitantsoa</h3>
                  <p className="text-xs text-emerald-400 font-mono">Master 2 Professionnel Informatique</p>
                </div>

                <div className="md:col-span-7 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Profil & Vision Professionnelle</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                    Concevoir des architectures fiables, du code propre et des livraisons sécurisées.
                  </h2>

                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed bg-[#051c14]/80 p-3.5 rounded-2xl border border-emerald-500/20">
                    "{PERSONAL_INFO.objective}"
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
                    {PERSONAL_INFO.stats.map((stat, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-[#061d15] border border-emerald-500/30 text-center">
                        <div className="text-base sm:text-lg font-black text-emerald-300">{stat.value}</div>
                        <div className="text-[10px] text-emerald-400/70 truncate">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCENE 2: STACK & DEVOPS LAB */}
            {currentSceneIndex === 2 && (
              <motion.div
                key="scene-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-6 space-y-3 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Compétences Clés & Technologies</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Full-Stack, Mobile Cross-Platform & DevOps
                  </h3>
                  <div className="space-y-2 text-xs font-mono">
                    {[
                      { name: 'Flutter & Dart (Mobile Cross-Platform)', level: 88, color: 'bg-emerald-400' },
                      { name: 'PHP & Laravel (APIs REST & Architecture)', level: 90, color: 'bg-teal-400' },
                      { name: 'React JS & Tailwind CSS (Frontend Réactif)', level: 90, color: 'bg-emerald-300' },
                      { name: 'Docker & Conteneurs multi-services', level: 85, color: 'bg-cyan-400' },
                      { name: 'PostgreSQL & MySQL (Bases Relationnelles)', level: 88, color: 'bg-emerald-400' },
                    ].map((tech, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-[#061e16] border border-emerald-500/20">
                        <div className="flex justify-between font-bold text-white mb-1">
                          <span className="truncate">{tech.name}</span>
                          <span className="text-emerald-300">{tech.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className={`h-full ${tech.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-6 text-left">
                  <div className="p-4 rounded-2xl bg-[#020d09] border border-emerald-500/40 shadow-2xl font-mono text-[11px] text-emerald-300 space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20 text-xs">
                      <div className="flex items-center gap-2">
                        <TerminalIcon className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-white">devops-ci-pipeline.sh</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        RUNNING
                      </span>
                    </div>

                    <div className="space-y-1.5 text-emerald-400/90">
                      <p className="text-slate-400">$ docker-compose -f docker-compose.prod.yml up -d</p>
                      <p className="text-emerald-300">✔ [1/4] Building service [web-laravel]... DONE</p>
                      <p className="text-emerald-300">✔ [2/4] Initializing PostgreSQL Database... READY</p>
                      <p className="text-emerald-300">✔ [3/4] Starting Nginx Reverse Proxy with SSL... SUCCESS</p>
                      <p className="text-emerald-300">✔ [4/4] Automated GitHub Actions CI/CD tests : 100% PASSED</p>
                    </div>

                    <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[10px] text-emerald-400/70">
                      <span>Status: Container Healthy</span>
                      <span>Port: 0.0.0.0:3000 &rarr; 80</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCENE 3: PROJETS STARS */}
            {currentSceneIndex === 3 && (
              <motion.div
                key="scene-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-5xl space-y-4 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                    <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Réalisations & Projets Majeurs</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveProjectIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeProjectIndex === idx ? 'bg-emerald-400 w-6' : 'bg-emerald-500/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#051c14]/90 p-5 sm:p-7 rounded-3xl border border-emerald-500/40 shadow-2xl">
                  <div className="md:col-span-7 space-y-3">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold">
                      {PROJECTS_LIST[activeProjectIndex]?.category.toUpperCase()} • EN PRODUCTION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {PROJECTS_LIST[activeProjectIndex]?.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                      {PROJECTS_LIST[activeProjectIndex]?.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {PROJECTS_LIST[activeProjectIndex]?.tags.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#020d09] border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-2.5 text-xs font-mono">
                    <div className="p-3 rounded-2xl bg-[#020d09] border border-emerald-500/30 space-y-1">
                      <div className="text-[10px] text-emerald-400/70 uppercase">Architecture & Déploiement</div>
                      <div className="font-bold text-white">Dockerisé & Optimisé</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#020d09] border border-emerald-500/30 space-y-1">
                      <div className="text-[10px] text-emerald-400/70 uppercase">Rôle & Contribution</div>
                      <div className="font-bold text-white">Conception Complète & DevOps</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCENE 4: PARCOURS & EXCELLENCE ACADÉMIQUE */}
            {currentSceneIndex === 4 && (
              <motion.div
                key="scene-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-5xl space-y-4 text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Excellence Académique & Expériences</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Diplômes */}
                  <div className="p-5 rounded-3xl bg-[#051c14] border border-emerald-500/30 space-y-3">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Diplômes Universitaires
                    </h4>
                    <div className="space-y-3 text-xs">
                      {EDUCATION_LIST.map((edu, idx) => (
                        <div key={idx} className="p-3 rounded-2xl bg-[#03130d] border border-emerald-500/20">
                          <div className="font-bold text-white flex justify-between">
                            <span>{edu.degree}</span>
                            <span className="text-emerald-400 font-mono">{edu.year}</span>
                          </div>
                          <div className="text-emerald-200/80 text-[11px] mt-0.5">{edu.institution}</div>
                          {edu.mention && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 text-[10px] font-bold border border-amber-400/30">
                              ★ {edu.mention}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stages & Missions */}
                  <div className="p-5 rounded-3xl bg-[#051c14] border border-emerald-500/30 space-y-3">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400" />
                      Expériences Professionnelles
                    </h4>
                    <div className="space-y-3 text-xs">
                      {EXPERIENCES_LIST.slice(0, 2).map((exp, idx) => (
                        <div key={idx} className="p-3 rounded-2xl bg-[#03130d] border border-emerald-500/20">
                          <div className="font-bold text-white flex justify-between">
                            <span>{exp.role}</span>
                            <span className="text-teal-400 font-mono">{exp.period}</span>
                          </div>
                          <div className="text-emerald-300/80 text-[11px] mt-0.5">{exp.company} — {exp.location}</div>
                          <p className="text-[11px] text-emerald-200/70 mt-1 line-clamp-2">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCENE 5: CONTACT & APPEL À L'ACTION */}
            {currentSceneIndex === 5 && (
              <motion.div
                key="scene-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl text-center space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs sm:text-sm font-bold animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>DISPONIBLE IMMÉDIATEMENT POUR VOS MISSIONS</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    Collaborons sur vos projets Web, Mobile & DevOps
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl mx-auto">
                    Prêt à apporter rigueur, dynamisme et expertise technique à vos équipes ou projets freelance.
                  </p>
                </div>

                {/* Direct Action Hub */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs max-w-2xl mx-auto">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-4 rounded-2xl bg-[#062016] border border-emerald-500/40 text-emerald-200 hover:text-white hover:bg-emerald-950/80 transition-all flex flex-col items-center gap-2 shadow-lg"
                  >
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold">Email Direct</span>
                    <span className="text-[11px] text-emerald-400/80 truncate">{PERSONAL_INFO.email}</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-[#062016] border border-emerald-500/40 text-emerald-200 hover:text-white hover:bg-emerald-950/80 transition-all flex flex-col items-center gap-2 shadow-lg"
                  >
                    <Phone className="w-5 h-5 text-teal-400" />
                    <span className="font-bold">WhatsApp / Tél</span>
                    <span className="text-[11px] text-teal-400/80">{PERSONAL_INFO.phone}</span>
                  </a>

                  <button
                    onClick={onOpenCVModal}
                    className="p-4 rounded-2xl bg-[#062016] border border-emerald-500/40 text-emerald-200 hover:text-white hover:bg-emerald-950/80 transition-all flex flex-col items-center gap-2 shadow-lg cursor-pointer"
                  >
                    <FileDown className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold">CV Officiel</span>
                    <span className="text-[11px] text-cyan-400/80">Imprimer / PDF</span>
                  </button>
                </div>

                {/* Post-Video Call-To-Action & Return to Home Controls */}
                <div className="pt-3 flex flex-wrap justify-center items-center gap-3">
                  <button
                    id="video-end-return-home-btn"
                    onClick={handleReturnHome}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-sm shadow-xl shadow-emerald-950/90 transition-all hover:scale-105 cursor-pointer ring-2 ring-emerald-300/80 group"
                  >
                    <div className="w-5 h-5 rounded-lg bg-black/20 flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform">
                      <Home className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span>Retourner à la page d'accueil</span>
                  </button>

                  <button
                    id="video-end-replay-btn"
                    onClick={handleRestart}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#062016] hover:bg-[#0d3425] text-emerald-200 hover:text-white border border-emerald-500/50 font-bold text-sm shadow-md transition-all cursor-pointer hover:scale-102"
                  >
                    <RotateCcw className="w-4 h-4 text-emerald-400" />
                    <span>Rejouer la Présentation</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Video Controls & Timeline Bar */}
        <div className="relative z-20 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 sm:p-5 space-y-2.5 border-t border-emerald-500/20">
          {/* Chapter Markers & Interactive Scrub Bar */}
          <div className="relative w-full h-2 bg-emerald-950/60 rounded-full cursor-pointer overflow-hidden group">
            {/* Global Fill */}
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 rounded-full transition-all duration-75 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
              style={{ width: `${globalPercentage}%` }}
            />

            {/* Clickable Chapter Zones */}
            <div className="absolute inset-0 flex">
              {SCENES.map((scene, idx) => (
                <div
                  key={idx}
                  onClick={() => goToScene(idx)}
                  className="h-full flex-1 border-r border-black/40 hover:bg-emerald-400/20 transition-colors"
                  title={`${scene.chapterLabel} - ${scene.title}`}
                />
              ))}
            </div>
          </div>

          {/* Controls HUD */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            {/* Left Controls: Play/Pause, Prev, Next, Time */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => goToScene(Math.max(0, currentSceneIndex - 1))}
                disabled={currentSceneIndex === 0}
                className="p-1.5 rounded-lg text-emerald-300 hover:text-white disabled:opacity-30 cursor-pointer"
                title="Scène précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-md transition-all cursor-pointer"
                title={isPlaying ? 'Mettre en pause' : 'Lecture'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={() => goToScene(Math.min(SCENES.length - 1, currentSceneIndex + 1))}
                disabled={currentSceneIndex === SCENES.length - 1}
                className="p-1.5 rounded-lg text-emerald-300 hover:text-white disabled:opacity-30 cursor-pointer"
                title="Scène suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleRestart}
                className="p-1.5 rounded-lg text-emerald-300 hover:text-white cursor-pointer"
                title="Recommencer depuis le début"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <div className="font-mono text-[11px] text-emerald-300/80 ml-2 hidden sm:block">
                <span>{Math.floor(totalElapsed)}s</span>
                <span className="text-emerald-500/50"> / </span>
                <span>{TOTAL_DURATION}s</span>
              </div>
            </div>

            {/* Middle: Chapter Navigation Pills */}
            <div className="hidden lg:flex items-center gap-1.5">
              {SCENES.map((scene, idx) => (
                <button
                  key={idx}
                  onClick={() => goToScene(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                    currentSceneIndex === idx
                      ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400 font-bold'
                      : 'bg-black/40 text-emerald-400/60 hover:text-emerald-300 hover:bg-emerald-950/40'
                  }`}
                >
                  {scene.chapterLabel}
                </button>
              ))}
            </div>

            {/* Right Controls: Speed Selector & Home quick return */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-black/60 border border-emerald-500/30 rounded-lg p-0.5 text-[10px] font-mono">
                {[1, 1.5, 2].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setPlaybackSpeed(spd)}
                    className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                      playbackSpeed === spd ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-emerald-300'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>

              <button
                onClick={handleReturnHome}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-white border border-emerald-500/40 text-[11px] font-bold transition-all cursor-pointer"
                title="Retourner à la page d'accueil"
              >
                <Home className="w-3 h-3 text-emerald-400" />
                <span className="hidden sm:inline">Accueil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
