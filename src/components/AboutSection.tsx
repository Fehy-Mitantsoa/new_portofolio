import React from 'react';
import {
  User,
  CheckCircle,
  Zap,
  Clock,
  Users,
  Languages,
  Heart,
  Trophy,
  Headphones,
  Compass,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  LANGUAGES_LIST,
  QUALITIES_LIST,
  HOBBIES,
} from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getQualityIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-teal-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-emerald-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-teal-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      default:
        return <Heart className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#061510]/50 relative border-y border-[#14362b]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <User className="w-3.5 h-3.5" />
            <span>À Propos & Profil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionné par le Développement Logiciel & le DevOps
          </h2>
          <p className="text-emerald-200/70 text-sm sm:text-base leading-relaxed">
            Un profil d'ingénieur logiciel complet alliant rigueur académique de l'ENI et compétences pratiques en développement web, mobile et déploiement d'infrastructures.
          </p>
        </div>

        {/* 2 Column Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Qualities */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>Mon Parcours & Vision</span>
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Actuellement en <strong className="text-white">Master 2 Professionnel en Informatique</strong> à la prestigieuse <span className="text-emerald-300 font-semibold">École Nationale de l'Informatique (ENI) de Fianarantsoa</span>, j'ai acquis de solides fondations théoriques et méthodologiques.
              </p>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Fort de plusieurs expériences en entreprise et projets de R&D (stage au <strong className="text-white">CIRGN</strong>, projet <strong className="text-white">Lazan'i Betsileo</strong>, applications mobiles <strong className="text-white">Flutter & IA</strong>), je maîtrise la chaîne de valeur complète : de la conception logicielle au déploiement conteneurisé sous Linux et Nginx.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-[#0d2a21] text-xs font-medium text-emerald-200 border border-[#1b4839]">
                  ⚡ Méthodologie Agile
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0d2a21] text-xs font-medium text-emerald-200 border border-[#1b4839]">
                  🛡️ Sécurité & Bonnes Pratiques
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0d2a21] text-xs font-medium text-emerald-200 border border-[#1b4839]">
                  📱 Mobile First & Responsive
                </span>
              </div>
            </div>

            {/* Qualities Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Qualités Professionnelles</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUALITIES_LIST.map((quality, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-[#091e17]/80 border border-[#153a2d] hover:border-emerald-600/40 transition-all space-y-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#0e2920]">
                        {getQualityIcon(quality.icon)}
                      </div>
                      <h4 className="text-sm font-bold text-white">{quality.title}</h4>
                    </div>
                    <p className="text-xs text-emerald-200/70 pl-1">{quality.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Languages, Hobbies & Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Languages Card */}
            <div className="p-6 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-teal-400" />
                <span>Langues Pratiquées</span>
              </h3>
              <div className="space-y-4">
                {LANGUAGES_LIST.map((lang, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-white">{lang.name}</span>
                      <span className="text-emerald-300 font-mono">{lang.level}</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 w-full bg-[#071611] rounded-full overflow-hidden border border-[#14362b]">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-emerald-200/60">{lang.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies Card */}
            <div className="p-6 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-400" />
                <span>Centres d'Intérêt & Loisirs</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {HOBBIES.map((hobby, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#061712]/80 border border-[#14362b]"
                  >
                    <div className="p-2 rounded-lg bg-[#0c241d]">
                      {getHobbyIcon(hobby.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{hobby.name}</div>
                      <div className="text-[11px] text-emerald-200/70">{hobby.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Location & Coordination Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c281f] via-[#081d16] to-[#05140f] border border-emerald-700/40 space-y-2.5 shadow-md">
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Coordonnées Directes
              </div>
              <div className="space-y-1.5 text-xs text-emerald-100/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-300 underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-300">
                    {PERSONAL_INFO.phone} ({PERSONAL_INFO.phoneInternational})
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
