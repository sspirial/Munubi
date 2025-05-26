import React from 'react';
import './Footer.css';
import logo from '/public/assets/sspirial-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '⚡' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧' },
  ];

  const quickLinks = [
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-decoration"></div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Sspirial Logo" />
            <span>Emmanuel Munubi</span>
          </div>
          
          <div className="footer-links">
            {quickLinks.map((link) => (
              <a key={link.name} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <p className="footer-copyright">
            © {currentYear} Emmanuel Munubi. All rights reserved. Made with ❤️ and modern CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
