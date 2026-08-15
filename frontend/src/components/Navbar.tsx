import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'About', href: '#about' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Innovations', href: '#innovations' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-600 shadow-md py-3' : 'bg-primary-600 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>{siteConfig.name.toUpperCase()}</span>
              <span className="hidden sm:inline text-xs font-normal bg-white/20 px-2 py-0.5 rounded-full text-white">
                Founder
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/85 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-white text-primary-600 hover:bg-gray-100 font-semibold text-xs transition-colors uppercase tracking-wider"
            >
              Connect
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-1"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-200 shadow-xl">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-800 hover:text-primary-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
