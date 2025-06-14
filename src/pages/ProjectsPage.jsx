import React, { useEffect, useState } from 'react';
import { fetchRepositories, getTopProjects } from '../utils/githubApi';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const repos = await fetchRepositories();
      const topProjects = getTopProjects(repos, 3);
      setProjects(topProjects);
    };
    getProjects();
  }, []);

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="projects-header text-center">
            <h1 className="text-gradient">My Projects</h1>
            <p className="section-subtitle">
              A showcase of my work, featuring projects that demonstrate my skills and passion for development
            </p>
          </div>
          
          <div className="projects-grid">
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card glass-card"
                  style={{ '--delay': `${index * 0.2}s` }}
                >
                  <div className="project-image">
                    <img 
                      src={project.image || 'https://via.placeholder.com/400x200.png?text=Project+Image'} 
                      alt={project.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200.png?text=Project+Image';
                      }}
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            title="View Live"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                              <polyline points="15,3 21,3 21,9"/>
                              <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                          </a>
                        )}
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            title="View Code"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.description || 'No description available.'}</p>
                    
                    <div className="project-tech">
                      <span className="tech-label">Technologies:</span>
                      <div className="tech-tags">
                        {project.technologies && project.technologies.length > 0 ? (
                          project.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                          ))
                        ) : (
                          <span className="tech-tag">No technologies listed</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="project-actions">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <span>Live Demo</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                        >
                          <span>View Code</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .projects-header {
          margin-bottom: 4rem;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 1rem auto 0;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
        }
        
        .project-card {
          background: rgba(26, 26, 46, 0.8);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: all var(--animation-normal);
          animation: fadeInUp 0.8s ease-out var(--delay, 0s) both;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl), 0 0 50px rgba(102, 126, 234, 0.2);
        }
        
        .project-image {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--animation-normal);
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--animation-normal);
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
        }
        
        .project-link {
          width: 48px;
          height: 48px;
          background: rgba(102, 126, 234, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all var(--animation-fast);
          backdrop-filter: blur(10px);
        }
        
        .project-link:hover {
          background: var(--primary-color);
          transform: scale(1.1);
        }
        
        .project-content {
          padding: 2rem;
        }
        
        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .project-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .project-tech {
          margin-bottom: 2rem;
        }
        
        .tech-label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          background: rgba(102, 126, 234, 0.15);
          color: var(--primary-color);
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(102, 126, 234, 0.3);
        }
        
        .project-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          text-decoration: none;
          transition: all var(--animation-normal);
          font-size: 0.9rem;
        }
        
        .btn-primary {
          background: var(--primary-gradient);
          color: white;
          box-shadow: var(--shadow-sm);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid rgba(102, 126, 234, 0.3);
          color: var(--primary-color);
        }
        
        .btn-outline:hover {
          background: var(--primary-gradient);
          border-color: transparent;
          color: white;
          transform: translateY(-2px);
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .project-content {
            padding: 1.5rem;
          }
          
          .project-actions {
            flex-direction: column;
          }
          
          .btn {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .projects-grid {
            gap: 1.5rem;
          }
          
          .project-image {
            height: 200px;
          }
          
          .project-content {
            padding: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
