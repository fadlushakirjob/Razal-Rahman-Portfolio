import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/config';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://razal-rahman-portfolio.onrender.com';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);
      
      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(response.data.message || 'Failed to send message.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.response?.data?.message || 'Unable to send your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column / Pitch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950/80 border border-primary-800/60 text-primary-400 text-xs font-semibold uppercase tracking-wider">
            Get in Touch
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's connect & build the future.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Whether you're an investor, a fleet operator, a potential collaborator, or a journalist — I read every message personally and look forward to connecting.
          </p>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3">
            <div className="flex items-center gap-3 text-zinc-200 font-semibold text-sm">
              <Mail size={18} className="text-primary-400" />
              Direct Email
            </div>
            <a 
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-primary-400 hover:text-primary-300 font-medium text-base block break-all transition-colors"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </motion.div>

        {/* Right column / Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-white/10 shadow-2xl backdrop-blur-md"
        >
          {status === 'success' ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 bg-primary-950/80 border border-primary-800/60 text-primary-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Received!</h3>
              <p className="text-zinc-300 max-w-md mx-auto">
                Thanks for reaching out — I have received your email and will respond as soon as possible.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-950/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary-500 focus:bg-zinc-900 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-950/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary-500 focus:bg-zinc-900 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Subject / Topic</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Partnership inquiry / Investment / Transit discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary-500 focus:bg-zinc-900 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about what you're working on or how we can collaborate..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary-500 focus:bg-zinc-900 transition-all resize-none"
                />
              </div>
              
              {status === 'error' && (
                <div className="p-4 bg-rose-950/60 border border-rose-800/60 rounded-xl text-rose-300 text-sm">
                  {errorMessage}
                </div>
              )}
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
