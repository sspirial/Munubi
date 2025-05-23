// Data model for AboutPage

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    title: "Integrity",
    description: "Ensuring my work is honest, ethical, and transparent."
  },
  {
    title: "Creativity & Innovation",
    description: "Constantly seeking new ways to solve problems and push boundaries."
  },
  {
    title: "User-Centered",
    description: "Putting users first in every design decision and solution."
  },
  {
    title: "Collaboration",
    description: "Working effectively with teams to achieve shared goals."
  },
  {
    title: "Continuous Learning",
    description: "Staying current with the latest technologies and best practices."
  },
  {
    title: "Attention to Detail",
    description: "Ensuring excellence in every aspect of development."
  }
];

export const skills: string[] = [
  "React", "TypeScript", "JavaScript", "HTML5",
  "CSS3", "Tailwind CSS", "Node.js", "Git",
  "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"
];
