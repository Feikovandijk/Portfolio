export interface AboutContent {
    name: string;
    title: string;
    bio: string;
    images: {
      url: string;
      alt: string;
    }[];
    skills: string[];
    contact: {
      email: string;
      linkedin: string;
      twitter: string;
    };
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    mainRole: string;
    supportingRole: string;
    timeline: string;
    process: {
      challenge: string;
      solution: string;
      outcome: string;
    };
    imageUrl: string;
    links: {
      steam?: string;
      youtube?: string;
    };
  }
  
  export interface Achievement {
    id: string;
    title: string;
    description: string;
    year: string;
  }