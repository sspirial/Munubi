import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border px-6 sm:px-10 py-4">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-6 h-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect fill="white" height="48" width="48" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-primary">Your Name</h2>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-sm font-medium leading-normal text-gray-300 hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full h-10 w-10 bg-border text-gray-300 hover:text-primary hover:bg-secondary transition-all"
        >
          <span className="material-icons text-2xl">code</span>
        </a>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 bg-border text-gray-300 hover:text-primary hover:bg-secondary transition-all"
          aria-label="Toggle menu"
        >
          <span className="material-icons text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          absolute top-full left-0 right-0 bg-background border-b border-border 
          transform transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-6 py-3 text-gray-300 hover:text-primary hover:bg-border transition-all text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
