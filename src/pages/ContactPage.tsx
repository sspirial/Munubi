import { useState } from 'react';
import type { FormEvent } from 'react';
import { contactFields, contactIntro } from '../data/contactData';
import type { ContactField } from '../data/contactData';
import '../styles/base/index.css';
import '../styles/components/index.css';
import '../styles/utilities/index.css';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">{contactIntro.title}</h1>
        <p className="text-[#a2abb3] text-lg">
          {contactIntro.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {contactFields.map((field: ContactField) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-primary mb-2">
              {field.label}
            </label>
            {field.type !== 'textarea' ? (
              <input
                type={field.type}
                id={field.id}
                value={formData[field.name as keyof FormData]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-[#1a1d20] border border-border text-primary placeholder-[#a2abb3] focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={field.placeholder}
                required
              />
            ) : (
              <textarea
                id={field.id}
                value={formData[field.name as keyof FormData]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1d20] border border-border text-primary placeholder-[#a2abb3] focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder={field.placeholder}
                required
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-4 px-6 rounded-lg bg-primary text-background font-bold hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <a
          href="mailto:your.email@example.com"
          className="flex flex-col items-center p-6 rounded-lg bg-[#1a1d20] hover:bg-secondary transition-colors"
        >
          <span className="material-icons text-3xl text-primary mb-2">email</span>
          <span className="text-primary">Email</span>
          <span className="text-[#a2abb3] text-sm">your.email@example.com</span>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 rounded-lg bg-[#1a1d20] hover:bg-secondary transition-colors"
        >
          <span className="material-icons text-3xl text-primary mb-2">linkedin</span>
          <span className="text-primary">LinkedIn</span>
          <span className="text-[#a2abb3] text-sm">Connect with me</span>
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 rounded-lg bg-[#1a1d20] hover:bg-secondary transition-colors"
        >
          <span className="material-icons text-3xl text-primary mb-2">code</span>
          <span className="text-primary">GitHub</span>
          <span className="text-[#a2abb3] text-sm">View my code</span>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
