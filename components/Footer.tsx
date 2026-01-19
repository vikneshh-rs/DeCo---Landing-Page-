import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a href="#" className="flex items-center gap-2 justify-center md:justify-start mb-6 group">
              <div className="h-8 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                 <img 
                   src="logo.png" 
                   alt="DeCo Logo" 
                   className="h-full w-auto object-contain brightness-0 invert" 
                 />
              </div>
            </a>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              DeCo is a design-led tech studio building scalable products and AI-driven solutions for the future of business.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-black transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-black transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-wider font-semibold">
          <p>© 2024 Team DeCo Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};