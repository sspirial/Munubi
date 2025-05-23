// Data model for BlogPage

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'TypeScript Best Practices for React Applications',
    excerpt: "Discover how to leverage TypeScript's type system to write more maintainable and error-free React applications.",
    category: 'TypeScript',
    imageUrl: '/blog/typescript-react.jpg',
    date: '2025-05-01',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS. We'll cover best practices, common patterns, and advanced techniques.",
    category: 'CSS',
    imageUrl: '/blog/tailwind-css.jpg',
    date: '2025-04-15',
    readTime: 4,
  },
  // Add more blog posts as needed
];

export const blogCategories: string[] = [
  'All', 'Web Development', 'TypeScript', 'React', 'CSS', 'JavaScript'
];
