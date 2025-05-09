import { AboutContent, Project, Achievement } from '../types';

export const aboutContent: AboutContent = {
  name: "Hi! I'm Feiko.",
  title: "Game & Technical Designer",
  bio: `I'm a technical and game designer who loves turning challenges into engaging experiences. I've been lucky enough to have worked on a variety of projects—from coding to crafting gameplay—and each one has taught me something new. As a generalist, I'm quick to learn, adapt, and use my diverse experience to help shape any project into something fantastic.

I'm naturally curious—whether I'm solving tricky software issues or diving into hands-on challenges like car projects and home renovations (and occasionally 'fixing' something that wasn't broken keeps life interesting). Every unconventional project is an opportunity to learn something new.

I also have a deep interest in understanding what makes games truly click. My Master's thesis delved into how singleplayer survival games affect our minds and how multiplayer elements change the way we play, insights that continue to shape my approach to design.

I value collaboration and believe that great games are built by teams who share ideas and support each other. When I'm not immersed in game development, you'll likely find me outdoors, climbing rocks and embracing new adventures.`,
  images: [
    {
      url: "/images/about-1.jpg",
      alt: "Feiko working on game development"
    },
    {
      url: "/images/about-2.jpg",
      alt: "Feiko climbing outdoors"
    },
    {
      url: "/images/about-3.jpg",
      alt: "Feiko working on technical projects"
    }
  ],
  skills: [
    "Systems Design",
    "Level Design",
    "Player Experience",
    "Unity",
    "Unreal Engine",
    "Prototyping",
    "User Research"
  ],
  contact: {
    email: "mail@feiko.org",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  }
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Arid 2.0",
    description: "Development of an untitled sequel to Arid, alongside founding and expanding Viscacha Studios.",
    mainRole: "Lead Game Design, Business Development",
    supportingRole: "Technical Design",
    timeline: "2023 - Present",
    process: {
      challenge: "Creating engaging gameplay mechanics that effectively communicate environmental concepts without sacrificing entertainment value.",
      solution: "Implemented a dynamic ecosystem simulation where player actions have visible long-term consequences. Designed intuitive feedback systems to help players understand the impact of their decisions.",
      outcome: "Players reported both high engagement and increased awareness of environmental issues. The game maintains a 4.5/5 rating with over 100,000 downloads."
    },
    imageUrl: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
    links: {
      steam: "https://store.steampowered.com/",
      youtube: "https://youtube.com/"
    }
  },
  {
    id: "project-2",
    title: "ARID",
    description: "A gritty, exploration-survival experience set in the Atacama Desert; the driest place on earth.",
    mainRole: "Game Designer",
    supportingRole: "Technical Designer",
    timeline: "2020 - 2022",
    process: {
      challenge: "Balancing survival mechanics with exploration to create an engaging yet challenging experience.",
      solution: "Developed a dynamic weather system and resource distribution that encourages strategic planning and exploration.",
      outcome: "Successfully launched on Steam with 'Very Positive' reviews. Players particularly praised the atmospheric environment and survival mechanics."
    },
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    links: {
      steam: "https://store.steampowered.com/"
    }
  }
];

export const achievements: Achievement[] = [
  {
    id: "achievement-1",
    title: "ARID: Best Student Game @ Dutch Game Awards",
    description: "Arid was awarded the Best Student Game at the Dutch Game Awards in 2021. Because of this award, Arid has been archived at the Dutch Institude of Sound & Vision, a digital archiving institute.",
    year: "2021"
  },
  {
    id: "achievement-2",
    title: "ARID: Best Design & Audience Award @ BUas",
    description: "Arid won the Best Design and Audience Awards at the yearly award ceremony at the Breda University of Applied Sciences in 2021.",
    year: "2021"
  },
  {
    id: "achievement-3",
    title: "ARID: Hobby GOTY @ GDWC",
    description: "Arid was nominated as Hobby Game of the Year at the Game Development World Championships in 2021.",
    year: "2021"
  },
  {
    id: "achievement-4",
    title: "Streamlined: Best Design & Best Art @ BUas",
    description: "Streamlined Mastermind won Best Design & Best Art at the yearly award ceremony @ Breda University of Applied Sciences.",
    year: "2020"
  },
  {
    id: "achievement-5",
    title: "Aztech: Best Design @ BUas",
    description: "Aztech received the Best Design award at Breda University of Applied Sciences.",
    year: "2019"
  }
];