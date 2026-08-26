export type SkillCategory = 'all' | 'frontend' | 'mobile' | 'backend' | 'database' | 'devops';

export interface TechSkill {
  name: string;
  category: 'frontend' | 'mobile' | 'backend' | 'database' | 'devops';
  level: number; // 0 to 100
  iconName: string;
  description: string;
  badge?: string;
}

export interface DevOpsSkill {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  bullets: string[];
  commandSample?: string;
  outputSample?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: 'mobile' | 'web' | 'desktop';
  tags: string[];
  description: string;
  highlights: string[];
  context?: string;
  architecture?: string;
  status: 'Terminé' | 'En cours' | 'Production';
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'Stage' | 'Projet Académique' | 'Freelance / Dev';
  technologies: string[];
  description: string;
  keyPoints: string[];
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  institution: string;
  location: string;
  mention?: string;
  description: string;
  courses?: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  percent: number;
  note: string;
}

export interface QualityItem {
  title: string;
  desc: string;
  icon: string;
}
