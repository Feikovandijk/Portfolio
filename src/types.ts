export interface Project {
    id: string;
    title: string;
    description: string;
    mainRole: string;
    supportingRole?: string;
    timeline: string;
    imageUrl: string;
    quote?: {
      text: string;
      source: string;
    };
    projectStats?: {
      teamSize?: string;
      duration?: string;
      platforms?: string[];
      technologies?: string[];
    };
    keyContributions?: string[];
    mainNarrative?: string;
    bodyTextLeft?: string;
    bodyTextRight?: string;
    mediaShowcase?: Array<{
      type: 'video' | 'image';
      url: string;
      title?: string;
      description?: string;
    }>;
    designDocs?: Array<{
      title: string;
      url: string;
    }>;
    links?: {
      steam?: string;
      youtube?: string;
      website?: string;
      github?: string;
    };
  }
  
  export interface Achievement {
    id: string;
    title: string;
    description: string;
    year: string;
  }
  
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
      linkedin?: string;
      twitter?: string;
    };
  }

  export interface SmallProject {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    imageUrl?: string;
  }