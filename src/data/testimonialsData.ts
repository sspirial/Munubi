// Data model for TestimonialsPage

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  location: string;
  imageUrl: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie Chen',
    title: 'Product Designer',
    location: 'San Francisco, CA',
    imageUrl: '/testimonials/sophie.jpg',
    content: 'Working with Sophie was a fantastic experience. Her attention to detail and creativity brought our project to life.',
  },
  // Add more testimonials as needed
];
