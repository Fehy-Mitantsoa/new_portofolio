import React, { useState } from 'react';
import {
  Server,
  Box,
  GitPullRequest,
  Terminal,
  Cpu,
  Play,
  CheckCircle2,
  Copy,
  Check,
  Workflow,
  ShieldCheck,
  HardDrive,
  RefreshCw,
} from 'lucide-react';
import { DEVOPS_MODULES } from '../data/portfolioData';

export const DevOpsLab: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('docker');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [executionLogs, setExecutionLogs] = useState<string>('');

  const activeModule =
    DEVOPS_MODULES.find((m) => m.id === selectedModuleId) || DEVOPS_MODULES[0];

  const handleRunCommand = () => {
    setIsExecuting(true);
    setExecutionLogs('Executing command in sandboxed environment...');
    setTimeout(() => {
      setExecutionLogs(activeModule.outputSample || 'Operation completed successfully.');
      setIsExecuting(false);
    }, 600);
  };

  const handleCopyCommand = () => {
    if (activeModule.commandSample) {
      navigator.clipboard.writeText(activeModule.commandSample);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'docker':
        return <Box className="w-5 h-5 text-blue-400" />;
      case 'cicd':
        return <GitPullRequest className="w-5 h-5 text-rose-400" />;
      case 'linux':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'webservers':
        return <Server className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="devops" className="py-20 bg-[#061510]/60 relative overflow-hidden border-y border-[#14362b]/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>DevOps & Infrastructure Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Maîtrise du Cycle de Déploiement & Automatisation
          </h2>
          <p className="text-emerald-200/70 text-sm sm:text-base leading-relaxed">
            De la conteneurisation Docker aux pipelines CI/CD et à la gestion de serveurs Linux / Nginx haute disponibilité.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 4 Modules Selector */}
          <div className="lg:col-span-5 space-y-3">
            {DEVOPS_MODULES.map((module) => {
              const isSelected = module.id === selectedModuleId;
              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setSelectedModuleId(module.id);
                    setExecutionLogs('');
                  }}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0a2019] border-emerald-500/70 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-500/40'
                      : 'bg-[#081b15]/70 border-[#16382c] hover:border-emerald-600/40 hover:bg-[#0a2019]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected ? 'bg-[#0e2920]' : 'bg-[#061510]'
                      }`}
                    >
                      {getModuleIcon(module.id)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                          {module.title}
                        </h3>
                        {isSelected && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                            Actif
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-emerald-200/70 mt-1 line-clamp-2">
                        {module.shortDesc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Architecture Summary Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0a2019] via-[#081d16] to-[#0c2920] border border-[#163c2f] space-y-2 mt-4 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Workflow className="w-4 h-4" />
                <span>Workflow DevOps Standard</span>
              </div>
              <p className="text-xs text-emerald-200/70 leading-relaxed">
                Code Source (Git) → Tests & Lint (GitHub Actions) → Build Images Multi-Services (Docker) → Déploiement Sécurisé (Linux / Nginx).
              </p>
            </div>
          </div>

          {/* Right: Active Module Details & Terminal Simulator */}
          <div className="lg:col-span-7 space-y-6">
            {/* Active Details Box */}
            <div className="p-6 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#14362b]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#0d2720]">
                    {getModuleIcon(activeModule.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{activeModule.title}</h3>
                    <p className="text-xs text-emerald-400 font-mono">
                      {activeModule.shortDesc}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#0d2720] text-emerald-200 border border-[#1a4435]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Environnement Validé
                </span>
              </div>

              {/* Bullets List from CV */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300/70">
                  Compétences & Réalisations Pratiques :
                </h4>
                <ul className="space-y-2">
                  {activeModule.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Terminal Simulator Box */}
              <div className="mt-6 rounded-2xl bg-[#05130e] border border-[#14362b] overflow-hidden shadow-inner">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#081e17] border-b border-[#14362b] text-xs font-mono text-emerald-300/70">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-emerald-100 text-[11px]">bash — devops-eni-node</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyCommand}
                      className="p-1 rounded hover:bg-[#0e2920] text-emerald-400 hover:text-white transition-colors"
                      title="Copier la commande"
                    >
                      {copiedCode ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={handleRunCommand}
                      disabled={isExecuting}
                      className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isExecuting ? (
                        <RefreshCw className="w-3 h-3 animate-spin" />
                      ) : (
                        <Play className="w-3 h-3 fill-current" />
                      )}
                      <span>{isExecuting ? 'Exécution...' : 'Tester'}</span>
                    </button>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 font-mono text-xs text-emerald-100 space-y-3 min-h-[140px] select-text">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <span className="text-emerald-500/80 font-bold">fenomirindra@server:~$</span>
                    <span className="text-emerald-100">{activeModule.commandSample}</span>
                  </div>

                  {executionLogs ? (
                    <pre className="text-emerald-300 whitespace-pre-wrap font-mono text-[11px] leading-relaxed p-2.5 rounded-lg bg-[#071712] border border-[#163c2f] text-emerald-300/90">
                      {executionLogs}
                    </pre>
                  ) : (
                    <div className="text-emerald-400/50 text-[11px] italic">
                      // Cliquez sur "Tester" ci-dessus pour simuler l'exécution de la commande DevOps.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
