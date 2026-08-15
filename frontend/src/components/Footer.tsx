import React from 'react';
import { siteConfig } from '../data/config';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white">{siteConfig.name}</h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Founder & CEO of TravelZync Labs. Technology entrepreneur and product builder.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase text-sm">Navigation</h4>
            <ul className="space-y-2">
              {['About', 'Journey', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase text-sm">Connect</h4>
            <div className="flex space-x-4">
              {/* Replace placeholders with real links in config */}
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-primary-400 transition-colors">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with React & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
