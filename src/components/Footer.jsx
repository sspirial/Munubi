import './Footer.css';
// import { LinkedInIcon, GitHubIcon, TwitterIcon, EmailIcon } from '../pages/ContactPage';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', url: '/about/' },
    { name: 'Projects', url: '/projects/' },
    { name: 'Contact', url: '/contact/' },
  ];

  return (
    <footer className="footer">
      <div className="footer-decoration"></div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/assets/sspirial-logo.png" alt="Sspirial Logo" />
            <span>Emmanuel Munubi</span>
          </div>
          
          <div className="footer-links">
            {quickLinks.map((link) => (
              <a key={link.name} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
     
          <p className="footer-copyright">
            © {currentYear} Emmanuel Munubi. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
