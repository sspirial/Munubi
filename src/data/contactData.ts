// Data model for ContactPage

export interface ContactField {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const contactFields: ContactField[] = [
  { id: 'name', label: 'Your Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
  { id: 'email', label: 'Your Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
  { id: 'subject', label: 'Subject', name: 'subject', type: 'text', placeholder: 'Enter the subject' },
  { id: 'message', label: 'Message', name: 'message', type: 'textarea', placeholder: 'Enter your message' },
];

export const contactIntro = {
  title: 'Get in Touch',
  description: "I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out, and I'll get back to you as soon as possible."
};
