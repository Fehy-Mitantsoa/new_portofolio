import React from 'react';
import {
  X,
  FileDown,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import cvPdf from '../assets/doc/ANDRIAMIFEHY.pdf';
import {
  PERSONAL_INFO,
  EDUCATION_LIST,
  EXPERIENCES_LIST,
  TECH_SKILLS,
  DEVOPS_MODULES,
  QUALITIES_LIST,
  LANGUAGES_LIST,
} from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'CV_ANDRIAMIFEHY_Fenomirindra.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#040e0a]/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
      <div
        className="relative w-full max-w-4xl bg-[#0a2019] border border-[#184234] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col print:border-0 print:rounded-none print:shadow-none print:max-h-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar (Hidden during print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#061611] border-b border-[#14362b] print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-300 bg-[#0d2a21] px-2.5 py-1 rounded border border-[#1b4839]">
              CV OFFICIEL
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white truncate">
              {PERSONAL_INFO.fullName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCv}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Télécharger le CV (PDF)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-[#0d2720] hover:bg-[#13382d] text-emerald-300 hover:text-white transition-colors cursor-pointer border border-[#1b4839]"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div
          className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0a2019] text-emerald-100 print:bg-white print:text-slate-900 print:p-6 print:overflow-visible text-left"
        >
          {/* Top CV Header: Left Teal Banner Style */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[#14362b] print:border-slate-300 pb-8">
            {/* Profile Avatar / Photo column */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 border-3 border-emerald-400/50 print:border-emerald-700 shadow-xl overflow-hidden relative">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white print:text-slate-900 tracking-tight uppercase">
                  ANDRIAMIFEHY
                </h1>
                <p className="text-sm font-semibold text-emerald-400 print:text-emerald-700">
                  Fenomirindra Mitantsoa
                </p>
                <p className="text-xs text-emerald-300/70 print:text-slate-600 italic">
                  Étudiant Master 2 — Informatique
                </p>
              </div>

              {/* Coordinates */}
              <div className="space-y-1.5 text-xs text-emerald-200/90 print:text-slate-700 pt-2 font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Right Header: Objectif */}
            <div className="md:col-span-8 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#061611] border border-[#14362b] print:bg-emerald-50 print:border-emerald-200">
                <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-2">
                  ■ OBJECTIF
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/90 print:text-slate-800 leading-relaxed">
                  {PERSONAL_INFO.objective}
                </p>
              </div>

              {/* Quick Tags Bar */}
              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded bg-[#0d2720] border border-[#1b4839] print:bg-slate-100 text-emerald-200 print:text-slate-800">
                  ⚡ Master 2 ENI
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0d2720] border border-[#1b4839] print:bg-slate-100 text-emerald-200 print:text-slate-800">
                  📱 Flutter & React Native
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0d2720] border border-[#1b4839] print:bg-slate-100 text-emerald-200 print:text-slate-800">
                  🌐 PHP Laravel & React JS
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0d2720] border border-[#1b4839] print:bg-slate-100 text-emerald-200 print:text-slate-800">
                  🐳 Docker & CI/CD
                </span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Body replicating CV structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Compétences, DevOps, Langues, Qualités, Loisirs */}
            <div className="md:col-span-4 space-y-6">
              {/* Compétences Tech */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-[#14362b] print:border-slate-300 pb-1">
                  ■ COMPÉTENCES TECH
                </h3>
                <div className="space-y-2 text-xs">
                  {[
                    { name: 'HTML / CSS', lvl: 95 },
                    { name: 'PHP & Laravel', lvl: 90 },
                    { name: 'React JS, React Native', lvl: 88 },
                    { name: 'Flutter, Dart', lvl: 88 },
                    { name: 'Python', lvl: 82 },
                    { name: 'JAVA', lvl: 85 },
                    { name: 'MySQL, PostgreSQL', lvl: 90 },
                    { name: 'MongoDB', lvl: 78 },
                  ].map((s, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-[11px] font-semibold text-emerald-100 print:text-slate-800">
                        <span>{s.name}</span>
                        <span className="text-emerald-400 print:text-emerald-700">{s.lvl}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#061611] print:bg-slate-200 rounded-full mt-0.5 border border-[#14362b]/50">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${s.lvl}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DevOps Skills */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-teal-400 print:text-teal-800 border-b border-[#14362b] print:border-slate-300 pb-1">
                  ■ DEVOPS
                </h3>
                <div className="space-y-2 text-xs">
                  {[
                    { name: 'Docker', lvl: 88 },
                    { name: 'Git / GitHub', lvl: 90 },
                    { name: 'Linux / Bash', lvl: 86 },
                    { name: 'CI/CD (GitHub Actions)', lvl: 85 },
                    { name: 'Nginx / Apache', lvl: 84 },
                  ].map((s, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-[11px] font-semibold text-emerald-100 print:text-slate-800">
                        <span>{s.name}</span>
                        <span className="text-teal-400 print:text-teal-700">{s.lvl}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#061611] print:bg-slate-200 rounded-full mt-0.5 border border-[#14362b]/50">
                        <div
                          className="h-full bg-teal-500 rounded-full"
                          style={{ width: `${s.lvl}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Langues */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-[#14362b] print:border-slate-300 pb-1">
                  ■ LANGUES
                </h3>
                <div className="space-y-1.5 text-xs text-emerald-100/90 print:text-slate-800">
                  <div className="flex justify-between">
                    <span className="font-semibold">Français</span>
                    <span className="text-emerald-300/70 print:text-slate-600">Courant / Pro</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Anglais</span>
                    <span className="text-emerald-300/70 print:text-slate-600">Technique</span>
                  </div>
                </div>
              </div>

              {/* Qualités */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-[#14362b] print:border-slate-300 pb-1">
                  ■ QUALITÉS
                </h3>
                <ul className="space-y-1 text-xs text-emerald-100/90 print:text-slate-800">
                  <li>✔ Sérieux et Rigoureux</li>
                  <li>✔ Dynamique et motivé</li>
                  <li>✔ Ponctuel</li>
                  <li>✔ Travail en équipe</li>
                </ul>
              </div>

              {/* Loisirs */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-[#14362b] print:border-slate-300 pb-1">
                  ■ LOISIRS
                </h3>
                <p className="text-xs text-emerald-100/90 print:text-slate-800">
                  ▪ Football, Écouter de la musique
                </p>
              </div>
            </div>

            {/* Right Column: Formations, Expériences, Connaissances DevOps */}
            <div className="md:col-span-8 space-y-6">
              {/* Formations & Diplômes */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-[#14362b] print:border-slate-300 pb-1">
                  ■ FORMATIONS & DIPLÔMES
                </h3>
                <div className="space-y-3 text-xs">
                  {EDUCATION_LIST.map((edu) => (
                    <div key={edu.id} className="space-y-0.5">
                      <div className="flex items-center justify-between font-bold text-white print:text-slate-900">
                        <span>{edu.degree}</span>
                        <span className="font-mono text-emerald-400 print:text-emerald-700">{edu.year}</span>
                      </div>
                      <div className="text-emerald-200/80 print:text-slate-700">
                        {edu.institution}
                        {edu.mention && (
                          <span className="ml-2 font-semibold text-amber-300 print:text-amber-700">
                            — {edu.mention}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expérience Professionnelle */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-[#14362b] print:border-slate-300 pb-1">
                  ■ EXPÉRIENCE PROFESSIONNELLE
                </h3>
                <div className="space-y-3 text-xs">
                  {[
                    {
                      date: 'Juin 2026',
                      title: 'App. mobile — Apprendre avec IA, hors ligne',
                      tech: 'Flutter, Dart et Python, SQLite',
                    },
                    {
                      date: 'Mars–Avr 2026',
                      title: 'App. mobile — Gestion des Étudiants',
                      tech: 'React Native, PostgreSQL',
                    },
                    {
                      date: 'Sept–Nov 2024',
                      title: 'Stage CIRGN — Gestion logement & magasin',
                      tech: 'PHP, Laravel',
                    },
                    {
                      date: 'Mars–Mai 2024',
                      title: 'Application web',
                      tech: 'React JS',
                    },
                    {
                      date: 'Fév–Mars 2024',
                      title: 'Application web',
                      tech: 'JSP',
                    },
                    {
                      date: 'Août–Nov 2023',
                      title: 'Stage Lazan’i Betsileo — Suivi achats',
                      tech: 'JAVA Desktop',
                    },
                  ].map((exp, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex items-center justify-between font-bold text-white print:text-slate-900">
                        <span>{exp.title}</span>
                        <span className="font-mono text-emerald-400 print:text-emerald-700">{exp.date}</span>
                      </div>
                      <div className="text-emerald-300/70 print:text-slate-600 font-mono text-[11px]">
                        Technologies : <span className="text-emerald-100 print:text-slate-800">{exp.tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connaissances DevOps Box */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-[#14362b] print:border-slate-300 pb-1">
                  ■ CONNAISSANCES DEVOPS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#061611] border border-[#14362b] print:bg-slate-50 print:border-slate-200 space-y-1">
                    <strong className="text-white print:text-slate-900 block">▪ Docker & Conteneurisation</strong>
                    <p className="text-emerald-200/70 print:text-slate-600 text-[11px]">
                      Images Docker, docker-compose pour apps multi-services (web + base de données).
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#061611] border border-[#14362b] print:bg-slate-50 print:border-slate-200 space-y-1">
                    <strong className="text-white print:text-slate-900 block">▪ Git / GitHub & CI-CD</strong>
                    <p className="text-emerald-200/70 print:text-slate-600 text-[11px]">
                      Versioning, pull requests, GitHub Actions pour tests et déploiements automatisés.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#061611] border border-[#14362b] print:bg-slate-50 print:border-slate-200 space-y-1">
                    <strong className="text-white print:text-slate-900 block">▪ Linux / Bash</strong>
                    <p className="text-emerald-200/70 print:text-slate-600 text-[11px]">
                      Scripts shell, gestion fichiers/droits, cron jobs, administration serveur de base.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#061611] border border-[#14362b] print:bg-slate-50 print:border-slate-200 space-y-1">
                    <strong className="text-white print:text-slate-900 block">▪ Serveurs Web</strong>
                    <p className="text-emerald-200/70 print:text-slate-600 text-[11px]">
                      Configuration Nginx/Apache pour déployer apps PHP/Laravel et React en production.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Affirmation */}
              <div className="pt-4 border-t border-[#14362b] print:border-slate-300 text-center">
                <p className="text-xs italic text-emerald-300/80 print:text-slate-600">
                  "{PERSONAL_INFO.honorDeclaration}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
