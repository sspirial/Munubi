import { Link } from 'react-router-dom';
import '../styles/base/index.css';
import '../styles/components/index.css';
import '../styles/utilities/index.css';
import { testimonials } from '../data/testimonialsData';
import type { Testimonial } from '../data/testimonialsData';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col bg-[#1a1d20] rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-[#2c3135]"
          style={{ backgroundImage: `url(${testimonial.imageUrl})` }}
        />
        <div>
          <h3 className="text-primary font-bold">{testimonial.name}</h3>
          <p className="text-sm text-[#a2abb3]">
            {testimonial.title} &ndash; {testimonial.location}
          </p>
        </div>
      </div>
      <blockquote className="text-[#a2abb3] italic mb-6">
        "{testimonial.content}"
      </blockquote>
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Client Testimonials
        </h1>
        <p className="text-[#a2abb3] text-lg max-w-2xl mx-auto">
          Don't just take my word for it. Here's what people I've worked with have to say about our collaboration.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center bg-[#1a1d20] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-[#a2abb3] mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance work. Let's discuss how I can help bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-bold hover:bg-white transition-colors"
          >
            Get in Touch
            <span className="material-icons">arrow_forward</span>
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
          >
            View Portfolio
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
