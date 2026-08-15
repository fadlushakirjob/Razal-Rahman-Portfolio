import React from 'react';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Razal | Let's Build Something Meaningful"
        description="Get in touch with Razal for business inquiries, partnerships, technology discussions, or collaborations."
        canonical="/contact"
      />
      <main className="pt-24 min-h-screen">
        <ContactForm />
      </main>
    </>
  );
};
