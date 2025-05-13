export interface AboutContent {
    name: string;
    title: string;
    bio: string;
    images: Array<{
      url: string;
      alt: string;
    }>;
    skills: string[];
    contact: {
      email: string;
      linkedin: string;
      github: string;
      ctftime: string;
    };
  }
  
  export interface DevelopmentPhase {
    videoUrl?: string;
    description: string;
    screenshots: string[];
  }
  
  export interface DevelopmentPhases {
    concepting: DevelopmentPhase;
    preProduction: DevelopmentPhase;
    production: DevelopmentPhase;
    release: DevelopmentPhase;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    mainRole: string;
    supportingRole: string;
    timeline: string;
    tags?: string[];
    process?: {
      challenge: string;
      solution: string;
      outcome: string;
    };
    imageUrl: string;
    quote?: {
      text: string;
      source: string;
    };
    projectStats?: {
      teamSize: string;
      duration: string;
      platforms: string[];
      technologies: string[];
    };
    keyContributions?: string[];
    mainNarrative?: string;
    bodyTextLeft?: string;
    bodyTextRight?: string;
    mediaShowcase?: any[];
    designDocs?: any[];
    links: {
      steam?: string;
      youtube?: string;
      website?: string;
      researchgate?: string;
      blog?: string;
    };
    developmentPhases?: DevelopmentPhases;
  }
  
  export interface Achievement {
    id: string;
    title: string;
    description: string;
    year: string;
  }

  export interface SmallProject {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    imageUrl?: string;
  }

  export interface Links {
    steam?: string;
    youtube?: string;
    researchgate?: string;
    blog?: string;
  }