import '../styles/base/index.css';
import '../styles/components/index.css';
import '../styles/utilities/index.css';
import { values, skills } from '../data/aboutData';
import type { Value } from '../data/aboutData';

const ValueCard = ({ value }: { value: Value }) => {
  return (
    <div className="bg-[#1A1D21] p-6 rounded-xl shadow-lg">
      <h3 className="text-primary text-xl font-semibold mb-2">{value.title}</h3>
      <p className="text-[#A0AEC0] text-base leading-relaxed">
        {value.description}
      </p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="flex flex-col max-w-4xl flex-1">
      <section className="mb-12">
        <h1 className="text-primary text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-8 text-center md:text-left">
          About Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Professional photo"
              className="w-full h-auto object-cover aspect-[3/4]"
              src="/your-profile-image.jpg"  // Replace with your image path
            />
          </div>
          <div className="md:col-span-2 space-y-6 text-primary">
            <p className="text-lg leading-relaxed">
              I'm a passionate developer with expertise in building modern web applications. 
              My journey in development began with a curiosity about how technology can solve 
              real-world problems, and it has evolved into a career dedicated to creating 
              efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-lg leading-relaxed">
              My development philosophy centers on writing clean, maintainable code and 
              creating intuitive user experiences. I specialize in front-end development 
              with React, TypeScript, and modern CSS frameworks, while maintaining a strong 
              understanding of backend technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-primary text-3xl font-bold leading-tight tracking-tight mb-6">
          My Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-primary text-3xl font-bold leading-tight tracking-tight mb-6">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#1A1D21] px-4 py-2 rounded-lg text-center text-primary hover:bg-secondary transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
