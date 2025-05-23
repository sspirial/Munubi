// Data model for ProjectsPage

export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  role: string;
  imageUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Fitness App',
    description: 'A mobile fitness app with personalized workout plans and progress tracking.',
    overview: 'A comprehensive fitness app for users to track workouts and progress.',
    role: 'Lead Developer',
    imageUrl: '/projects/fitness-app.jpg',
    tags: ['React Native', 'TypeScript', 'Mobile'],
  },
  // Add more projects as needed
];
