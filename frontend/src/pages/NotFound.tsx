import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The requested page could not be found."
        canonical="/404"
      />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary-500">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/" 
            className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors font-medium"
          >
            Go Home
          </Link>
          <Link 
            to="/projects" 
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors font-medium"
          >
            View Projects
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors font-medium"
          >
            Contact Me
          </Link>
        </div>
      </main>
    </>
  );
};
