import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Proposition de Mission Freelance',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      // Create mailto fallback link
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formState.subject + ' - ' + formState.name
      )}&body=${encodeURIComponent(
        `Bonjour Fenomirindra,\n\nDe la part de: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#061510]/50 relative border-t border-[#14362b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Discutons de vos Projets & Opportunités
          </h2>
          <p className="text-emerald-200/70 text-sm sm:text-base leading-relaxed">
            Disponible immédiatement pour des missions freelance en développement web, applications mobiles ou intégration DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Coordinates Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] shadow-xl space-y-3 group hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#0d2720] text-emerald-400 border border-[#1b4839]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-300/70">
                      Adresse Email
                    </h3>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-emerald-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#0d2720] hover:bg-[#12362b] text-emerald-300 hover:text-white transition-colors cursor-pointer border border-[#1b4839]"
                  title="Copier l'email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-emerald-200/70">
                Réponse rapide garantie sous 24h pour toute proposition.
              </p>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] shadow-xl space-y-3 group hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#0d2720] text-teal-400 border border-[#1b4839]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-300/70">
                      Téléphone & WhatsApp
                    </h3>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-teal-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <span className="text-xs text-emerald-300/60 block font-mono">
                      {PERSONAL_INFO.phoneInternational}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-[#0d2720] hover:bg-[#12362b] text-emerald-300 hover:text-white transition-colors cursor-pointer border border-[#1b4839]"
                  title="Copier le numéro"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="flex gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d2a21] hover:bg-[#12392d] text-emerald-300 border border-[#1b4839] text-xs font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ouvrir WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] shadow-xl space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#0d2720] text-cyan-400 border border-[#1b4839]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-300/70">
                    Localisation
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
              <p className="text-xs text-emerald-200/70 pt-1">
                Disponible pour des missions en présentiel à Antananarivo / Fianarantsoa ou en télétravail international.
              </p>
            </div>

            {/* Declaration of Honor */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#061611] to-[#0a2019] border border-[#163c2f] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-200/80 italic">
                "{PERSONAL_INFO.honorDeclaration}"
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2019]/90 border border-[#163c2f] shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Envoyer un message direct
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/70 mt-1">
                  Remplissez le formulaire ci-dessous pour démarrer une conversation professionnelle.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#0d2a21] border border-[#1b4839] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message préparé avec succès !
                  </h4>
                  <p className="text-xs text-emerald-100/90">
                    Votre client de messagerie s'ouvre pour envoyer l'email directement à{' '}
                    <strong className="text-emerald-400">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        subject: 'Proposition de Mission Freelance',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold text-emerald-400 underline pt-2 cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-emerald-200">
                        Votre Nom / Entreprise *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Ex: Entreprise Tech / Jean Dupont"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-[#163c2f] text-sm text-white placeholder-emerald-400/40 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-emerald-200">
                        Votre Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="nom@exemple.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-[#163c2f] text-sm text-white placeholder-emerald-400/40 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-emerald-200">
                      Sujet / Type d'opportunité *
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-[#163c2f] text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="Proposition de Mission Freelance">
                        💼 Mission Freelance (Web / Mobile / DevOps)
                      </option>
                      <option value="Opportunité d'Emploi / Recrutement">
                        🚀 Recrutement / CDI / CDD
                      </option>
                      <option value="Développement Application Mobile">
                        📱 Projet Application Mobile (Flutter / React Native)
                      </option>
                      <option value="Développement Web & API Laravel / React">
                        🌐 Projet Web & API (Laravel, React, Full-Stack)
                      </option>
                      <option value="Infrastructure DevOps & Déploiement Docker">
                        ⚙️ DevOps / Déploiement Docker / Nginx
                      </option>
                      <option value="Autre demande">Autre échange professionnel</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-emerald-200">
                      Votre Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Décrivez brièvement votre besoin, les technologies souhaitées ou le cadre de la collaboration..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-[#163c2f] text-sm text-white placeholder-emerald-400/40 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-950/60 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? 'Envoi en cours...' : 'Envoyer le Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
