import React from 'react';
import data from '../data.json';

const AboutPage = () => {
  const { bio, background, aspirations } = data.about;

  return (
    <div className="page">
      <section className="section">
        <div className="container-sm">
          <div className="about-header text-center">
            <h1 className="text-gradient">About Me</h1>
            <p className="section-subtitle">
              Get to know more about my journey, background, and what drives me
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-card glass-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h2>Bio</h2>
              <p>{bio}</p>
            </div>
            
            <div className="about-card glass-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h2>Background</h2>
              <p>{background}</p>
            </div>
            
            <div className="about-card glass-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h2>Career Aspirations</h2>
              <p>{aspirations}</p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number text-gradient">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-gradient">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-gradient">5+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-gradient">∞</div>
              <div className="stat-label">Passion for Learning</div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .about-header {
          margin-bottom: 4rem;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 1rem auto 0;
        }
        
        .about-content {
          display: grid;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .about-card {
          padding: 2.5rem;
          text-align: center;
          position: relative;
          transition: all var(--animation-normal);
        }
        
        .about-card:hover {
          transform: translateY(-8px);
        }
        
        .card-icon {
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
        
        .about-card h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        
        .about-card p {
          line-height: 1.8;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 3rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(102, 126, 234, 0.05);
          border-radius: var(--border-radius);
          border: 1px solid rgba(102, 126, 234, 0.1);
          transition: all var(--animation-normal);
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(102, 126, 234, 0.1);
          border-color: rgba(102, 126, 234, 0.3);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .about-content {
            gap: 1.5rem;
          }
          
          .about-card {
            padding: 2rem;
          }
          
          .about-stats {
            gap: 1rem;
          }
          
          .stat-item {
            padding: 1rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
