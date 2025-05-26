import React from 'react';
import data from '../data.json';

const EducationPage = () => {
  const educationHistory = data.education;

  return (
    <div className="page">
      <section className="section">
        <div className="container-sm">
          <div className="education-header text-center">
            <h1 className="text-gradient">Education & Certifications</h1>
            <p className="section-subtitle">
              My academic journey and professional certifications that shaped my expertise
            </p>
          </div>
          
          <div className="education-timeline">
            {educationHistory.map((edu, index) => (
              <div 
                key={`${edu.institution}-${index}`} 
                className="timeline-item"
                style={{ '--delay': `${index * 0.3}s` }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  {index < educationHistory.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="timeline-content glass-card">
                  <div className="education-badge">
                    <span className="badge-text">{edu.duration}</span>
                  </div>
                  
                  <h3 className="institution-name">{edu.institution}</h3>
                  <h4 className="degree-name">{edu.degree}</h4>
                  
                  {edu.details && (
                    <p className="education-details">{edu.details}</p>
                  )}
                  
                  <div className="education-footer">
                    <div className="achievement-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="education-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3>Academic Excellence</h3>
              <p>Committed to continuous learning and academic achievement</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h3>Certifications</h3>
              <p>Industry-recognized certifications validating expertise</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3>Practical Skills</h3>
              <p>Hands-on experience through projects and coursework</p>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .education-header {
          margin-bottom: 4rem;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 1rem auto 0;
        }
        
        .education-timeline {
          position: relative;
          margin-bottom: 4rem;
        }
        
        .timeline-item {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          animation: fadeInLeft 0.8s ease-out var(--delay, 0s) both;
        }
        
        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
          animation-name: fadeInRight;
        }
        
        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          flex-shrink: 0;
        }
        
        .timeline-dot {
          width: 60px;
          height: 60px;
          background: var(--primary-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: var(--shadow-md);
          position: relative;
          z-index: 2;
        }
        
        .timeline-line {
          width: 2px;
          height: 100px;
          background: linear-gradient(180deg, var(--primary-color), transparent);
          margin-top: 1rem;
          position: relative;
        }
        
        .timeline-content {
          flex: 1;
          padding: 2rem;
          position: relative;
          max-width: 500px;
        }
        
        .education-badge {
          position: absolute;
          top: -10px;
          right: 20px;
          background: var(--accent-gradient);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }
        
        .institution-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        
        .degree-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        
        .education-details {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .education-footer {
          display: flex;
          justify-content: flex-end;
        }
        
        .achievement-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(102, 126, 234, 0.1);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(102, 126, 234, 0.3);
        }
        
        .education-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .stat-card {
          background: var(--surface-color);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          transition: all var(--animation-normal);
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          background: var(--surface-light);
          border-color: rgba(102, 126, 234, 0.3);
        }
        
        .stat-icon {
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
        
        .stat-card h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        
        .stat-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column !important;
            gap: 1rem;
            animation-name: fadeInUp !important;
          }
          
          .timeline-marker {
            flex-direction: row;
            justify-content: center;
          }
          
          .timeline-dot {
            width: 50px;
            height: 50px;
          }
          
          .timeline-line {
            display: none;
          }
          
          .timeline-content {
            max-width: 100%;
            padding: 1.5rem;
          }
          
          .education-badge {
            position: static;
            align-self: flex-start;
            margin-bottom: 1rem;
          }
          
          .education-stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .stat-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EducationPage;
