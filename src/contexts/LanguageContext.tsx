import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.resume': 'My Resume',
    'nav.about': 'About Me',
    'nav.projects': 'My Projects',
    'nav.contact': 'Contact me',
    'hero.greeting': "👋 Hi, I'm",
    'hero.title': 'Full Stack Web Developer',
    'hero.description': 'Crafting interactive, scalable, and human-centered digital experiences',
    'hero.viewWork': 'View My Work',
    'hero.connect': "Let's Connect",
    'about.title': 'About Me',
    'about.journey': 'My Journey',
    'about.journeyText': 'Trained at Le Wagon Cape Town, I transformed my passion for technology into expertise in building modern, full-stack web applications. Every line of code I write is driven by curiosity, innovation, and the desire to create seamless digital experiences.',
    'about.strengths': 'Key Strengths',
    'about.strength1': 'Modern UI/UX Design',
    'about.strength2': 'Full-Stack Development',
    'about.strength3': 'Scalable Architecture',
    'about.timeline.bootcamp.period': '2023',
    'about.timeline.bootcamp.title': 'Le Wagon Bootcamp',
    'about.timeline.bootcamp.role': 'Full-Stack Training',
    'about.timeline.bootcamp.description': 'Graduated from Le Wagon Cape Town after 9 weeks of intensive full-stack development focused on modern frameworks and best practices.',
    'about.timeline.projects.period': '2024',
    'about.timeline.projects.title': 'Real-World Projects',
    'about.timeline.projects.role': 'Product Builder',
    'about.timeline.projects.description': 'Designed and shipped human-centered web experiences, collaborating with teams and delivering measurable user impact.',
    'about.timeline.future.period': 'Now',
    'about.timeline.future.title': 'Future Vision',
    'about.timeline.future.role': 'Innovation Mindset',
    'about.timeline.future.description': 'Exploring immersive interfaces, AI-assisted workflows, and polished developer experiences to push the limits of the web.',
    'about.stats.title': 'Core Stack Focus',
    'about.stats.caption': 'Weekly time investment across key disciplines',
    'about.softskills.communication': 'Client communication',
    'about.softskills.leadership': 'Technical leadership',
    'about.softskills.problemSolving': 'Creative problem-solving',
    'about.highlight.title': 'Full stack artisan',
    'about.highlight.subtitle': 'Merging design, engineering, and strategy for ambitious brands.',
    'projects.title': 'Featured Projects',
    'projects.allTitle': 'All Projects',
    'projects.viewGithub': 'View All on GitHub',
    'projects.seeDetails': 'See Details',
    'skills.title': 'Tech Stack',
    'experience.title': 'Experience & Education',
    'experience.bootcamp': 'Le Wagon Bootcamp - Cape Town',
    'experience.bootcampDesc': 'Intensive full-stack web development program covering modern frameworks, databases, and deployment.',
    'experience.growth': 'Post-Graduation Growth',
    'experience.growthDesc': 'Built real-world applications, contributed to open-source projects, and continuously expanded my tech stack.',
    'contact.title': 'Get In Touch',
    'contact.description': "Have a project in mind? Let's build something amazing together!",
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'footer.rights': '© 2025 Revyll OGANDAGA | Built with Vision',
    'modal.contact.title': "Let's Connect",
    'modal.contact.description': "Fill out the form below and I'll get back to you as soon as possible.",
    'modal.resume.title': 'My Resumes',
    'modal.resume.description': 'Select a resume to view',
  },
  fr: {
    'nav.resume': 'Mon CV',
    'nav.about': 'À Propos',
    'nav.projects': 'Mes Projets',
    'nav.contact': 'Contact',
    'hero.greeting': "👋 Salut, je suis",
    'hero.title': 'Développeur Web Full Stack',
    'hero.description': 'Création d\'expériences numériques interactives, évolutives et centrées sur l\'humain',
    'hero.viewWork': 'Voir Mon Travail',
    'hero.connect': 'Connectons-nous',
    'about.title': 'À Propos de Moi',
    'about.journey': 'Mon Parcours',
    'about.journeyText': 'Formé au Wagon Cape Town, j\'ai transformé ma passion pour la technologie en expertise dans la construction d\'applications web modernes et complètes. Chaque ligne de code que j\'écris est motivée par la curiosité, l\'innovation et le désir de créer des expériences numériques fluides.',
    'about.strengths': 'Points Forts',
    'about.strength1': 'Design UI/UX Moderne',
    'about.strength2': 'Développement Full-Stack',
    'about.strength3': 'Architecture Évolutive',
    'about.timeline.bootcamp.period': '2023',
    'about.timeline.bootcamp.title': 'Bootcamp Le Wagon',
    'about.timeline.bootcamp.role': 'Formation Full-Stack',
    'about.timeline.bootcamp.description': 'Diplômé du Wagon Cape Town après 9 semaines intensives de développement full-stack axé sur les frameworks modernes et les bonnes pratiques.',
    'about.timeline.projects.period': '2024',
    'about.timeline.projects.title': 'Projets Réels',
    'about.timeline.projects.role': 'Créateur de Produits',
    'about.timeline.projects.description': 'Conception et livraison d’expériences web centrées sur l’humain, en collaboration avec les équipes et avec un impact utilisateur mesurable.',
    'about.timeline.future.period': 'Aujourd’hui',
    'about.timeline.future.title': 'Vision Future',
    'about.timeline.future.role': 'Esprit d’Innovation',
    'about.timeline.future.description': 'Exploration d’interfaces immersives, de workflows assistés par l’IA et d’expériences développeur raffinées pour repousser les limites du web.',
    'about.stats.title': 'Focalisation du Stack',
    'about.stats.caption': 'Temps hebdomadaire investi sur les disciplines clés',
    'about.softskills.communication': 'Communication client',
    'about.softskills.leadership': 'Leadership technique',
    'about.softskills.problemSolving': 'Résolution créative',
    'about.highlight.title': 'Artisan full stack',
    'about.highlight.subtitle': 'Allier design, ingénierie et stratégie pour des marques ambitieuses.',
    'projects.title': 'Projets en Vedette',
    'projects.allTitle': 'Tous les Projets',
    'projects.viewGithub': 'Voir Tout sur GitHub',
    'projects.seeDetails': 'Voir Détails',
    'skills.title': 'Stack Technique',
    'experience.title': 'Expérience & Formation',
    'experience.bootcamp': 'Le Wagon Bootcamp - Cape Town',
    'experience.bootcampDesc': 'Programme intensif de développement web full-stack couvrant les frameworks modernes, les bases de données et le déploiement.',
    'experience.growth': 'Croissance Post-Diplôme',
    'experience.growthDesc': 'Construction d\'applications réelles, contribution à des projets open-source et expansion continue de ma stack technique.',
    'contact.title': 'Contactez-Moi',
    'contact.description': 'Vous avez un projet en tête ? Construisons quelque chose d\'incroyable ensemble !',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer',
    'contact.info': 'Informations de Contact',
    'footer.rights': '© 2025 Revyll OGANDAGA | Construit avec Vision',
    'modal.contact.title': 'Connectons-nous',
    'modal.contact.description': 'Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.',
    'modal.resume.title': 'Mes CV',
    'modal.resume.description': 'Sélectionnez un CV à consulter',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
