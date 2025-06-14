import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { name, tagline, ctaViewWork, ctaDownloadResume, resumeUrl } = data.home;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-background">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          
          <div className={`hero-content ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="hero-avatar">
              <img 
                src="/assets/professional-photo.jpg"
                alt={name}
                className="avatar-image"
              />
              <div className="avatar-glow"></div>
            </div>
            
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="greeting">Jambo, I'm</span>
                <span className="name text-gradient">{name}</span>
              </h1>
              
              <p className="hero-tagline">
                {tagline}
              </p>
              
              <div className="hero-description">
                <p>
                  Passionate developer crafting digital experiences with modern technologies.
                  I love bringing ideas to life through clean code and beautiful design.
                </p>
              </div>
              
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  <span>{ctaViewWork}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </Link>
                
                <a 
                  href={resumeUrl} 
                  className="btn btn-outline"
                >
                  <span>{ctaDownloadResume}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span className="scroll-text">Scroll</span>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-container {
          max-width: 1200px;
          width: 100%;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          animation: float 6s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 80px;
          height: 80px;
          background: var(--primary-gradient);
          top: 20%;
          left: 10%;
          opacity: 0.1;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 120px;
          height: 120px;
          background: var(--secondary-gradient);
          top: 60%;
          right: 10%;
          opacity: 0.1;
          animation-delay: 2s;
        }
        
        .shape-3 {
          width: 100px;
          height: 100px;
          background: var(--accent-gradient);
          bottom: 20%;
          left: 20%;
          opacity: 0.1;
          animation-delay: 4s;
        }
        
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
          position: relative;
          z-index: 3;
        }
        
        .hero-avatar {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .avatar-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--surface-light);
          box-shadow: var(--shadow-xl);
          transition: all var(--animation-normal);
          position: relative;
          z-index: 2;
        }
        
        .avatar-image:hover {
          transform: scale(1.05);
          box-shadow: var(--shadow-xl), 0 0 40px rgba(102, 126, 234, 0.3);
        }
        
        .avatar-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: var(--primary-gradient);
          border-radius: 50%;
          opacity: 0.2;
          filter: blur(20px);
          animation: pulse 3s ease-in-out infinite;
        }
        
        .hero-text {
          max-width: 800px;
        }
        
        .hero-title {
          margin-bottom: 1.5rem;
        }
        
        .greeting {
          display: block;
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        
        .name {
          display: block;
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1;
        }
        
        .hero-tagline {
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 500;
        }
        
        .hero-description {
          margin-bottom: 3rem;
        }
        
        .hero-description p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          text-decoration: none;
          transition: all var(--animation-normal);
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary {
          background: var(--primary-gradient);
          color: white;
          box-shadow: var(--shadow-md);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg), 0 0 30px rgba(102, 126, 234, 0.4);
        }
        
        .btn-outline {
          background: rgba(102, 126, 234, 0.1);
          border: 2px solid rgba(102, 126, 234, 0.3);
          color: var(--primary-color);
          backdrop-filter: blur(10px);
        }
        
        .btn-outline:hover {
          background: var(--primary-gradient);
          border-color: transparent;
          color: white;
          transform: translateY(-3px);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          animation: fade-in 1s ease-out 2s forwards;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        
        .scroll-indicator:hover {
          opacity: 0.8;
        }
        
        .scroll-text {
          font-size: 0.75rem;
          font-weight: 400;
        }
        
        .scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid var(--text-muted);
          border-radius: 12px;
          position: relative;
        }
        
        .scroll-wheel {
          width: 2px;
          height: 8px;
          background: var(--text-muted);
          border-radius: 1px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll-wheel 2.5s infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @keyframes scroll-wheel {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-container {
            padding: 0 1rem;
          }
          
          .avatar-image {
            width: 150px;
            height: 150px;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
          
          .scroll-indicator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
