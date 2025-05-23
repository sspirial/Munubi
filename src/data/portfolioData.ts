// Data model for PortfolioPage

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, TypeScript, and Node.js',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl: '/portfolio/ecommerce.jpg',
    liveUrl: 'https://ecommerce.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    category: 'Web',
  },
  // Add more projects as needed
];
