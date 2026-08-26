import {
  TechSkill,
  DevOpsSkill,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  LanguageItem,
  QualityItem,
} from '../types';
import profilePhoto from '../assets/images/fenomirindra_profile_1787747146934.jpg';
import heroScreenBg from '../assets/images/hero_screen_bg_1787747163211.jpg';

export const PERSONAL_INFO = {
  fullName: 'ANDRIAMIFEHY Fenomirindra Mitantsoa',
  shortName: 'Fenomirindra Mitantsoa',
  photoUrl: profilePhoto,
  heroBgUrl: heroScreenBg,
  title: 'Développeur Full-Stack, Mobile & DevOps',
  subTitle: 'Étudiant en Master 2 Informatique — ENI Fianarantsoa',
  objective:
    "Étudiant en deuxième année de Master Professionnel en Informatique à l'École Nationale de l'Informatique (ENI), je recherche une mission freelance ou une opportunité professionnelle en développement web, logiciel ou DevOps afin de mettre en pratique mes compétences et approfondir mon expertise en environnement de production.",
  email: 'andriamifehy18@gmail.com',
  phone: '034 04 065 62',
  phoneInternational: '+261 34 04 065 62',
  location: 'Ankatso Antananarivo, Madagascar',
  country: 'Madagascar',
  availability: 'Disponible pour missions freelance & CDI',
  honorDeclaration:
    "Je déclare sur l'honneur que les informations ci-dessus sont sincères et me concernent.",
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/261340406562',
    emailMailto: 'mailto:andriamifehy18@gmail.com',
  },
  stats: [
    { label: 'Niveau d’études', value: 'Master 2 ENI' },
    { label: 'Projets Majeurs', value: '6+' },
    { label: 'Compétences Tech', value: '15+' },
    { label: 'Disponibilité', value: 'Immédiate' },
  ],
};

export const TECH_SKILLS: TechSkill[] = [
  // Mobile
  {
    name: 'Flutter & Dart',
    category: 'mobile',
    level: 88,
    iconName: 'Smartphone',
    description: 'Développement cross-platform iOS/Android, intégration IA locale, SQLite, State Management.',
    badge: 'Mobile First',
  },
  {
    name: 'React Native',
    category: 'mobile',
    level: 85,
    iconName: 'Smartphone',
    description: 'Applications mobiles natives hybrides, navigation fluide, synchronisation API REST & PostgreSQL.',
  },

  // Frontend
  {
    name: 'React JS',
    category: 'frontend',
    level: 90,
    iconName: 'Code',
    description: 'Composants modernes, Hooks, gestion d’état avancée, interfaces réactives et Single Page Apps.',
    badge: 'Spécialité',
  },
  {
    name: 'HTML5 / CSS3 / Tailwind',
    category: 'frontend',
    level: 95,
    iconName: 'Layout',
    description: 'Intégration responsive mobile-first, design moderne, animations CSS fluides et sémantique propre.',
  },
  {
    name: 'JSP / Java Web',
    category: 'frontend',
    level: 80,
    iconName: 'Globe',
    description: 'JavaServer Pages, Servlets, architecture MVC pour applications web d’entreprise.',
  },

  // Backend
  {
    name: 'PHP & Laravel',
    category: 'backend',
    level: 90,
    iconName: 'Server',
    description: 'Création d’APIs REST sécurisées, ORM Eloquent, Blade, authentification et logique métier complexe.',
    badge: 'Backend Majeur',
  },
  {
    name: 'Python',
    category: 'backend',
    level: 82,
    iconName: 'Terminal',
    description: 'Scripts automatisés, manipulation de données, intégration de modules IA et backend léger.',
  },
  {
    name: 'JAVA (Desktop & EE)',
    category: 'backend',
    level: 85,
    iconName: 'Coffee',
    description: 'Programmation orientée objet avancée, applications de gestion desktop et services robustes.',
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 88,
    iconName: 'Database',
    description: 'Modélisation relationnelle, requêtes complexes, indexation et intégrité transactionnelle.',
  },
  {
    name: 'MySQL',
    category: 'database',
    level: 90,
    iconName: 'Database',
    description: 'Conception de schémas relationnels, optimisation de requêtes SQL et administration.',
  },
  {
    name: 'MongoDB',
    category: 'database',
    level: 78,
    iconName: 'HardDrive',
    description: 'Bases de données NoSQL orientées documents, flexibilité de schéma et agrégations.',
  },
  {
    name: 'SQLite',
    category: 'database',
    level: 85,
    iconName: 'FileSpreadsheet',
    description: 'Base de données locale embarquée pour applications mobiles offline-first.',
  },

  // DevOps
  {
    name: 'Docker & Docker Compose',
    category: 'devops',
    level: 88,
    iconName: 'Box',
    description: 'Conteneurisation multi-services, Dockerfile optimisés, orchestration locale et déploiement.',
    badge: 'DevOps Clé',
  },
  {
    name: 'Git / GitHub & CI/CD',
    category: 'devops',
    level: 90,
    iconName: 'GitBranch',
    description: 'Gestion de versions, pull requests, pipelines automatisés GitHub Actions pour tests et déploiements.',
  },
  {
    name: 'Linux / Bash Scripting',
    category: 'devops',
    level: 86,
    iconName: 'TerminalSquare',
    description: 'Scripts shell, gestion des permissions/droits, tâches planifiées (cron jobs) et administration système.',
  },
  {
    name: 'Serveurs Nginx / Apache',
    category: 'devops',
    level: 84,
    iconName: 'Cpu',
    description: 'Reverse proxy, configuration SSL/TLS, virtual hosts, déploiement d’apps Laravel & React en production.',
  },
];

export const DEVOPS_MODULES: DevOpsSkill[] = [
  {
    id: 'docker',
    title: 'Docker & Conteneurisation',
    icon: 'Box',
    shortDesc: 'Isolation et portabilité des environnements applicatifs',
    bullets: [
      'Création d’images Docker légères et sécurisées (Multi-stage builds)',
      'Orchestration avec docker-compose pour architectures multi-services (Web + DB + Cache)',
      'Gestion des volumes persistants et des réseaux isolés',
      'Homogénéisation des environnements de dev, test et production',
    ],
    commandSample: 'docker compose up -d --build && docker ps',
    outputSample:
      'CONTAINER ID   IMAGE             STATUS         PORTS\n3a8f9b2c1d4e   eni-app-frontend  Up 2 hours     0.0.0.0:80->80/tcp\n8b7c6d5e4f3a   eni-app-backend   Up 2 hours     0.0.0.0:8000->8000/tcp\n1e2d3c4b5a6f   postgres:15-alpine Up 2 hours    0.0.0.0:5432->5432/tcp',
  },
  {
    id: 'cicd',
    title: 'Git / GitHub & CI/CD',
    icon: 'GitPullRequest',
    shortDesc: 'Automatisation des tests et flux de livraison continue',
    bullets: [
      'Workflows Git standardisés : branches de features, code reviews & pull requests',
      'Pipelines GitHub Actions automatisés : linting, tests unitaires et intégration',
      'Build et push automatisé des artefacts conteneurisés',
      'Déploiement continu vers les serveurs de pré-production et production',
    ],
    commandSample: 'git push origin main # Déclenche le pipeline CI/CD GitHub Actions',
    outputSample:
      '✓ Job "Lint & Test" completed in 42s\n✓ Job "Build Docker Image" completed in 1m 15s\n✓ Job "Deploy to Staging Server" completed in 35s\nStatus: Pipeline Success (All 14 unit tests passed)',
  },
  {
    id: 'linux',
    title: 'Linux / Bash Scripting',
    icon: 'Terminal',
    shortDesc: 'Automatisation système et administration de serveurs de base',
    bullets: [
      'Écriture de scripts Shell/Bash pour l’automatisation de tâches répétitives',
      'Gestion rigoureuse des utilisateurs, groupes et permissions de fichiers (chmod/chown)',
      'Mise en place de sauvegardes automatiques via tâches planifiées (cron jobs)',
      'Diagnostic, surveillance des ressources (htop, journalctl, netstat) et logs',
    ],
    commandSample: './deploy-and-backup.sh --env=production',
    outputSample:
      '[INFO] 2026-08-26 04:08:00 - Sauvegarde BDD PostgreSQL effectuée (backup_20260826.sql.gz)\n[INFO] Nettoyage des caches Laravel et React effectué\n[INFO] Redémarrage des services systemd : OK\n[SUCCESS] Système opérationnel à 100%',
  },
  {
    id: 'webservers',
    title: 'Serveurs Web (Nginx / Apache)',
    icon: 'Server',
    shortDesc: 'Routage haute performance, Reverse Proxy et Sécurité SSL',
    bullets: [
      'Configuration de Nginx en tant que Reverse Proxy et équilibreur de charge',
      'Déploiement d’applications PHP/Laravel (PHP-FPM) et Single Page Apps React',
      'Sécurisation des communications (certificats SSL/TLS Let’s Encrypt, headers HTTP)',
      'Optimisation des performances : compression Gzip, mise en cache et limitation de débit',
    ],
    commandSample: 'sudo nginx -t && sudo systemctl reload nginx',
    outputSample:
      'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\nService "nginx.service" reloaded successfully.',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'ia-mobile-offline',
    title: 'App Mobile — Apprendre avec IA, Hors Ligne',
    subtitle: 'Assistant d’apprentissage intelligent embarqué sans connexion internet',
    date: 'Juin 2026',
    category: 'mobile',
    status: 'Terminé',
    featured: true,
    tags: ['Flutter', 'Dart', 'Python', 'SQLite', 'IA Embarquée'],
    description:
      'Application mobile innovante conçue pour permettre aux étudiants d’apprendre et de s’exercer avec une intelligence artificielle locale, sans nécessiter de connexion internet permanente.',
    highlights: [
      'Moteur d’intelligence artificielle fonctionnant entièrement hors ligne sur l’appareil',
      'Stockage local rapide et persistant des cours, quiz et progrès avec SQLite',
      'Interface intuitive développée avec Flutter pour une fluidité native sur iOS et Android',
      'Module Python pour le prétraitement des corpus pédagogiques et modèles optimisés',
    ],
    context: 'Projet d’innovation technologique répondant aux défis de connectivité à Madagascar.',
    architecture: 'Architecture MVVM avec couche d’inférence IA locale et persistance SQLite.',
  },
  {
    id: 'gestion-etudiants-mobile',
    title: 'App Mobile — Gestion des Étudiants',
    subtitle: 'Plateforme mobile complète de gestion académique et suivi des notes',
    date: 'Mars – Avril 2026',
    category: 'mobile',
    status: 'Terminé',
    featured: true,
    tags: ['React Native', 'PostgreSQL', 'Node.js / Express', 'REST API'],
    description:
      'Application mobile pour établissements d’enseignement supérieur permettant la gestion complète du cycle de vie étudiant : inscriptions, emplois du temps, suivi des notes et communication.',
    highlights: [
      'Authentification sécurisée avec rôles différenciés (Étudiants, Enseignants, Administration)',
      'Tableaux de bord des notes, moyennes et relevés académiques en temps réel',
      'Base de données relationnelle robuste sous PostgreSQL avec synchronisation',
      'Notifications de cours et interface utilisateur moderne et réactive',
    ],
    context: 'Conçue pour moderniser les échanges académiques et digitaliser les relevés de notes.',
    architecture: 'Client React Native connecté à une API REST sécurisée et base de données PostgreSQL.',
  },
  {
    id: 'stage-cirgn',
    title: 'Stage CIRGN — Gestion Logement & Magasin',
    subtitle: 'Système d’information et d’administration logistique pour le CIRGN',
    date: 'Sept – Nov 2024',
    category: 'web',
    status: 'Terminé',
    featured: true,
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap / Tailwind', 'Architecture MVC'],
    description:
      'Mission de stage au Centre d’Instruction Régional de la Gendarmerie Nationale (CIRGN) : conception et développement d’une application web complète pour l’attribution des logements et la gestion du magasin de matériel.',
    highlights: [
      'Numérisation intégrale de la gestion des logements de fonction et états des lieux',
      'Module de gestion des stocks et mouvements d’équipements du magasin avec alertes de seuil',
      'Génération automatique de rapports administratifs et bordereaux d’inventaire',
      'Architecture sécurisée basée sur le framework Laravel avec contrôle d’accès strict',
    ],
    context: 'Stage professionnel validé au sein d’une institution étatique exigeante.',
    architecture: 'Framework Laravel avec ORM Eloquent, migrations et base de données MySQL normalisée.',
  },
  {
    id: 'app-web-react',
    title: 'Application Web Moderne React JS',
    subtitle: 'Plateforme web interactive avec gestion d’état et composants modulaires',
    date: 'Mars – Mai 2024',
    category: 'web',
    status: 'Terminé',
    tags: ['React JS', 'Tailwind CSS', 'JavaScript ES6+', 'REST API'],
    description:
      'Développement d’une application web monopage (SPA) fluide et hautement interactive, intégrant une gestion d’état optimisée et une interface utilisateur intuitive.',
    highlights: [
      'Composants réutilisables basés sur React et design responsive avec Tailwind CSS',
      'Filtrage dynamique de données en temps réel et navigation fluide sans rechargement',
      'Consommation d’API REST avec gestion des états de chargement et erreurs',
    ],
    context: 'Projet universitaire avancé centré sur l’expérience utilisateur et les performances frontend.',
  },
  {
    id: 'app-web-jsp',
    title: 'Application Web Java Entreprise (JSP)',
    subtitle: 'Système web d’entreprise basé sur l’écosystème Java EE et Servlets',
    date: 'Fév – Mars 2024',
    category: 'web',
    status: 'Terminé',
    tags: ['JSP', 'Java EE', 'Servlets', 'MySQL', 'MVC'],
    description:
      'Conception d’une application web d’entreprise structurée selon le patron de conception Modèle-Vue-Contrôleur (MVC) utilisant les technologies JavaServer Pages et Servlets.',
    highlights: [
      'Séparation stricte des responsabilités (MVC) et sécurité de session Java',
      'Interactions base de données via JDBC et gestion transactionnelle',
      'Formulaires dynamiques avec validation serveur et messages contextuels',
    ],
    context: 'Projet d’approfondissement du génie logiciel et des architectures Java robustes.',
  },
  {
    id: 'stage-lazan-i-betsileo',
    title: 'Stage Lazan’i Betsileo — Suivi des Achats',
    subtitle: 'Application logicielle de bureau pour le suivi commercial et approvisionnements',
    date: 'Août – Nov 2023',
    category: 'desktop',
    status: 'Terminé',
    tags: ['JAVA Desktop', 'Swing / JavaFX', 'MySQL', 'JDBC', 'Reporting'],
    description:
      'Stage au sein de la société viticole renommée Lazan’i Betsileo : développement d’une application de bureau dédiée à la traçabilité des achats de matières premières et au suivi des fournisseurs.',
    highlights: [
      'Automatisation de l’enregistrement des achats de raisins et consommables',
      'Calcul automatique des coûts de revient, facturation et génération de reçus',
      'Tableau de bord de suivi financier des approvisionnements pour la direction',
      'Amélioration significative de la fiabilité des données par rapport aux registres manuels',
    ],
    context: 'Stage professionnel en entreprise agro-industrielle leader dans la région Betsileo.',
  },
];

export const EXPERIENCES_LIST: ExperienceItem[] = [
  {
    id: 'exp-mobile-ia',
    period: 'Juin 2026',
    role: 'Développeur Mobile & IA',
    company: 'Projet Académique & R&D',
    location: 'Fianarantsoa / Antananarivo',
    type: 'Projet Académique',
    technologies: ['Flutter', 'Dart', 'Python', 'SQLite'],
    description:
      'Conception et développement d’une application mobile d’apprentissage assisté par Intelligence Artificielle fonctionnant de manière autonome hors ligne.',
    keyPoints: [
      'Intégration d’un modèle d’IA local optimisé pour smartphone sans dépendance cloud',
      'Persistance des données utilisateurs et synchronisation SQLite',
      'Tests d’utilisabilité et validation des performances d’exécution',
    ],
  },
  {
    id: 'exp-mobile-etudiants',
    period: 'Mars – Avril 2026',
    role: 'Développeur Mobile Full-Stack',
    company: 'Projet Universitaire — ENI',
    location: 'Fianarantsoa',
    type: 'Projet Académique',
    technologies: ['React Native', 'PostgreSQL', 'Express.js', 'Git'],
    description:
      'Création d’une solution mobile complète pour la gestion des étudiants et du cursus universitaire.',
    keyPoints: [
      'Conception de l’architecture mobile et liaison avec la base de données PostgreSQL',
      'Implémentation du module de consultation des notes et des emplois du temps',
      'Automatisation des tests et gestion de code sous GitHub',
    ],
  },
  {
    id: 'exp-stage-cirgn',
    period: 'Septembre – Novembre 2024',
    role: 'Stagiaire Développeur Web Full-Stack',
    company: 'CIRGN (Centre d’Instruction Régional de la Gendarmerie Nationale)',
    location: 'Madagascar',
    type: 'Stage',
    technologies: ['PHP', 'Laravel', 'MySQL', 'HTML/CSS', 'Git'],
    description:
      'Développement d’une application web sécurisée pour la gestion des logements et du magasin d’équipements.',
    keyPoints: [
      'Recueil du besoin métier auprès des officiers et formalisation du cahier des charges',
      'Développement sous Laravel avec gestion des droits d’accès par grades et fonctions',
      'Déploiement sur serveur local et formation des utilisateurs finaux',
    ],
  },
  {
    id: 'exp-app-react',
    period: 'Mars – Mai 2024',
    role: 'Développeur Frontend React',
    company: 'Projet Spécialisé Web — ENI',
    location: 'Fianarantsoa',
    type: 'Projet Académique',
    technologies: ['React JS', 'Tailwind CSS', 'JavaScript', 'REST API'],
    description:
      'Création d’une interface web dynamique et interactive répondant aux standards modernes du web.',
    keyPoints: [
      'Mise en place d’un design system moderne et composants réutilisables',
      'Optimisation du rendu pour une navigation instantanée',
    ],
  },
  {
    id: 'exp-app-jsp',
    period: 'Février – Mars 2024',
    role: 'Développeur Java Web',
    company: 'Projet Académique Java EE',
    location: 'Fianarantsoa',
    type: 'Projet Académique',
    technologies: ['JSP', 'Java EE', 'Servlets', 'MySQL'],
    description:
      'Réalisation d’une application web transactionnelle basée sur l’architecture Java Enterprise Edition.',
    keyPoints: [
      'Implémentation de l’architecture Modèle-Vue-Contrôleur (MVC)',
      'Sécurisation des sessions et accès aux données relationnelles',
    ],
  },
  {
    id: 'exp-stage-lazan',
    period: 'Août – Novembre 2023',
    role: 'Stagiaire Développeur Logiciel Desktop',
    company: 'Société Lazan’i Betsileo',
    location: 'Fianarantsoa',
    type: 'Stage',
    technologies: ['JAVA Desktop', 'Swing', 'MySQL', 'JDBC'],
    description:
      'Conception d’un logiciel de gestion des achats pour la coopérative vinicole Lazan’i Betsileo.',
    keyPoints: [
      'Automatisation de la saisie des récoltes et des paiements des fournisseurs',
      'Génération des états récapitulatifs périodiques pour la comptabilité',
      'Amélioration de la traçabilité des flux financiers et des approvisionnements',
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'master-2',
    year: '2025 – 2026',
    degree: 'Master Professionnel — Deuxième Année',
    institution: 'École Nationale de l’Informatique (ENI)',
    location: 'Fianarantsoa, Madagascar',
    description:
      'Spécialisation avancée en génie logiciel, architectures distribuées, intelligence artificielle, DevOps et conduite de projets informatiques complexes.',
    courses: [
      'Architectures Microservices & Cloud',
      'DevOps & Conteneurisation (Docker, CI/CD)',
      'Développement Mobile Avancé (Flutter & React Native)',
      'Systèmes Décisionnels & IA',
    ],
  },
  {
    id: 'licence-pro',
    year: '2023 – 2024',
    degree: 'Licence Professionnelle — Troisième Année',
    institution: 'École Nationale de l’Informatique (ENI)',
    location: 'Fianarantsoa, Madagascar',
    mention: 'Mention Bien',
    description:
      'Formation rigoureuse et polyvalente en développement logiciel, bases de données, réseaux et administration système Linux. Diplômé avec la Mention Bien.',
    courses: [
      'Génie Logiciel & Modélisation UML',
      'Frameworks Web (Laravel, React, Java EE)',
      'Bases de Données Relationnelles & NoSQL',
      'Administration Système & Réseaux',
    ],
  },
  {
    id: 'baccalaureat',
    year: '2021 – 2022',
    degree: 'Baccalauréat Série D (Scientifique)',
    institution: 'Lycée Sagesse Saint Louis Marie',
    location: 'Fandriana, Madagascar',
    mention: 'Mention Assez Bien',
    description:
      'Formation scientifique solide en Mathématiques, Sciences Physiques et Sciences Naturelles.',
  },
];

export const LANGUAGES_LIST: LanguageItem[] = [
  {
    name: 'Français',
    level: 'Courant / Professionnel',
    percent: 92,
    note: 'Excellente communication orale et écrite, rédaction technique et spécifications.',
  },
  {
    name: 'Anglais',
    level: 'Technique / Intermédiaire',
    percent: 80,
    note: 'Lecture fluide de documentations techniques, veille technologique, échanges pro.',
  },
  {
    name: 'Malgache',
    level: 'Langue Maternelle',
    percent: 100,
    note: 'Langue native.',
  },
];

export const QUALITIES_LIST: QualityItem[] = [
  {
    title: 'Sérieux & Rigoureux',
    desc: 'Code propre, documenté, structuré et respect strict des normes de développement et délais.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Dynamique & Motivé',
    desc: 'Passionné d’apprentissage continu, proactif face aux défis technologiques et force de proposition.',
    icon: 'Zap',
  },
  {
    title: 'Ponctuel & Fiable',
    desc: 'Respect scrupuleux des engagements, gestion exemplaire du temps et livraison dans les temps.',
    icon: 'Clock',
  },
  {
    title: 'Travail en Équipe',
    desc: 'Excellente communication collaborative, utilisation fluide des outils Git/GitHub et agilité.',
    icon: 'Users',
  },
];

export const HOBBIES = [
  { name: 'Football', icon: 'Trophy', desc: 'Pratique sportive, esprit d’équipe et endurance' },
  { name: 'Écouter de la musique', icon: 'Headphones', desc: 'Concentration créative et détente' },
  { name: 'Veille Technologique', icon: 'Compass', desc: 'Nouvelles tendances IA, DevOps et Web/Mobile' },
];
