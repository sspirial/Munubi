import { useState } from "react";
import { Link } from "react-router-dom";
import { portfolioProjects } from '../data/portfolioData';
import type { PortfolioProject } from '../data/portfolioData';
import '../styles/base/index.css';
import '../styles/components/index.css';
import '../styles/utilities/index.css';

const PortfolioCard = ({ item }: { item: PortfolioProject }) => {
  return (
    <div className="group relative bg-[#1a1d20] rounded-xl overflow-hidden">
      <div 
        className="aspect-video w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d20] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
          <p className="text-[#a2abb3] text-sm mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-full bg-[#283139] text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-white transition-colors"
              >
                <span className="material-icons text-xl">launch</span>
                Live Demo
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-white transition-colors"
              >
                <span className="material-icons text-xl">code</span>
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col max-w-6xl mx-auto py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portfolio</h1>
        <p className="text-[#a2abb3] text-lg">
          A showcase of my projects and technical expertise.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap 
              ${category === activeCategory 
                ? 'bg-primary text-background' 
                : 'bg-[#283139] text-primary hover:bg-secondary'} 
              transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Interested in working together?
        </h2>
        <p className="text-[#a2abb3] mb-6">
          I'm always open to discussing new projects and opportunities.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-bold hover:bg-white transition-colors"
        >
          Get in Touch
          <span className="material-icons">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPage;

