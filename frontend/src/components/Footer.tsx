import React from 'react';
import { siteConfig } from '../data/config';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">{siteConfig.name}</h3>
            <p className="text-gray-600 max-w-md leading-relaxed text-sm">
              Founder & CEO of TravelZync Labs. Building intelligent software and data infrastructure for the future of public mobility.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 tracking-wider uppercase text-xs">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {['Vision', 'About', 'Ventures', 'Innovations', 'Journey', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 tracking-wider uppercase text-xs">Connect</h4>
            <div className="flex space-x-3">
              <a 
                href={siteConfig.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary-600 hover:text-white transition-colors" 
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href={siteConfig.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary-600 hover:text-white transition-colors" 
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href={siteConfig.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary-600 hover:text-white transition-colors" 
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary-600 hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} {siteConfig.name}. TravelZync Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Designed & Engineered for Scalable Mobility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
