import { useState } from 'react';
import './ContactPage.css';
import data from '../data.json';

// SVG Icons as components
export const EmailIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

export const LinkedInIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const GitHubIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const TwitterIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const socialIconMap = {
  LinkedIn: <LinkedInIcon />,
  GitHub: <GitHubIcon />,
  Twitter: <TwitterIcon />,
};

const ContactPage = () => {
  const { email, phone, location, socialMedia } = data.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  console.log('Contact Data:', { email, phone, location, socialMedia }); // Debugging data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send to an API or mailto)
    alert('Form submitted (not really, this is a demo)!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        
        <h1 className="contact-title">
          <span className="gradient-text">Get In Touch</span>
        </h1>
        <p className="contact-subtitle">Let's create something amazing together</p>
        
        <div className="contact-grid">
          <div className="contact-form-section">
            <div className="glass-card form-card">
              <div className="card-header">
                <h2>Send a Message</h2>
                <div className="header-decoration"></div>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                  <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="form-input"
                  />
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    required
                    rows="5"
                    className="form-input form-textarea"
                  ></textarea>
                  <label htmlFor="message" className="form-label">Message</label>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
          
          <div className="contact-info-section">
            <div className="glass-card info-card">
              <div className="card-header">
                <h2>Contact Information</h2>
                <div className="header-decoration"></div>
              </div>
              
              <div className="contact-info-list">
                {email && (
                  <div className="contact-info-item">
                    <div className="info-icon">
                      <EmailIcon />
                    </div>
                    <div className="info-content">
                      <h3>Email</h3>
                      <a href={`mailto:${email}`} className="info-link">{email}</a>
                    </div>
                  </div>
                )}
                
                {phone && (
                  <div className="contact-info-item">
                    <div className="info-icon">
                      <PhoneIcon />
                    </div>
                    <div className="info-content">
                      <h3>Phone</h3>
                      <span className="info-text">{phone}</span>
                    </div>
                  </div>
                )}
                
                {location && (
                  <div className="contact-info-item">
                    <div className="info-icon">
                      <LocationIcon />
                    </div>
                    <div className="info-content">
                      <h3>Location</h3>
                      <span className="info-text">{location}</span>
                    </div>
                  </div>
                )}
              </div>
              
              {socialMedia && socialMedia.length > 0 && (
                <div className="social-section">
                  <h3 className="social-title">Connect with me</h3>
                  <div className="social-links">
                    {socialMedia.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={social.name}
                      >
                        <div className="social-icon">
                          {socialIconMap[social.name] || <div className="social-fallback">{social.name[0]}</div>}
                        </div>
                        <span className="social-name">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
