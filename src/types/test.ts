import { Project } from './index';

const testProject: Project = {
  id: "test",
  title: "Test Project",
  description: "A test project",
  mainRole: "Test Role",
  supportingRole: "Test Support",
  timeline: "2024",
  imageUrl: "test.jpg",
  links: {},
  developmentPhases: {
    concepting: {
      description: "Test concepting",
      screenshots: []
    },
    preProduction: {
      description: "Test pre-production",
      screenshots: []
    },
    production: {
      description: "Test production",
      screenshots: []
    },
    release: {
      description: "Test release",
      screenshots: []
    }
  }
}; 