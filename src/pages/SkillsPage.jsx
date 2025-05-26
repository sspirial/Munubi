import React, { useEffect, useState } from 'react';
import { fetchRepositories } from '../utils/githubApi';

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      const repos = await fetchRepositories();
      const languages = new Set();
      for (const repo of repos) {
        if (repo.language) languages.add(repo.language);
      }
      setSkills(Array.from(languages));
    };
    getSkills();
  }, []);

  return (
    <div className="page">
      <section className="section">
        <div className="container-sm">
          <div className="skills-header text-center">
            <h1 className="text-gradient">Skills & Expertise</h1>
            <p className="section-subtitle">
              Technologies and soft skills that I use to create amazing digital experiences
            </p>
          </div>
          
          <div className="skills-content">
            <div className="skills-section">
              <div className="skills-section-header">
                <div className="section-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                    <line x1="7" y1="7" x2="7" y2="7"/>
                    <line x1="11" y1="7" x2="17" y2="7"/>
                    <line x1="7" y1="11" x2="7" y2="11"/>
                    <line x1="11" y1="11" x2="17" y2="11"/>
                    <line x1="7" y1="15" x2="7" y2="15"/>
                    <line x1="11" y1="15" x2="17" y2="15"/>
                  </svg>
                </div>
                <h2>Technical Skills</h2>
                <p>Programming languages, frameworks, and tools I work with</p>
              </div>
              
              <div className="skills-grid">
                {skills && skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <div key={skill} className="skill-item" style={{ '--delay': `${index * 0.1}s` }}>
                      <span className="skill-text">{skill}</span>
                      <div className="skill-glow"></div>
                    </div>
                  ))
                ) : (
                  <p>No skills available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .skills-header {
          margin-bottom: 4rem;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 1rem auto 0;
        }
        
        .skills-content {
          display: grid;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        
        .skills-section {
          position: relative;
        }
        
        .skills-section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .section-icon {
          width: 64px;
          height: 64px;
          background: var(--primary-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          box-shadow: var(--shadow-md);
        }
        
        .skills-section-header h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .skills-section-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        
        .skill-item {
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: var(--border-radius);
          padding: 1rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all var(--animation-normal);
          cursor: pointer;
          animation: fadeInUp 0.8s ease-out var(--delay, 0s) both;
        }
        
        .skill-item:hover {
          transform: translateY(-5px);
          border-color: rgba(102, 126, 234, 0.4);
          background: rgba(102, 126, 234, 0.15);
        }
        
        .skill-text {
          font-weight: 600;
          color: var(--text-primary);
          position: relative;
          z-index: 2;
        }
        
        .skill-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--primary-gradient);
          opacity: 0;
          transition: opacity var(--animation-normal);
        }
        
        .skill-item:hover .skill-glow {
          opacity: 0.1;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .skills-content {
            gap: 3rem;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 0.8rem;
          }
          
          .skill-item {
            padding: 0.8rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
