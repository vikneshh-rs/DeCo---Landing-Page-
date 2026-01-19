import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

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

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <nav 
          className={`transition-all duration-500 ease-out flex items-center justify-between px-6 md:px-10 py-3 
            ${isScrolled 
              ? 'w-full max-w-5xl bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)]' 
              : 'w-full max-w-7xl bg-transparent border-transparent py-5'
            }`}
        >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-8 md:h-10 relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                 {/* Logo image provided by user */}
                 <img 
                   src="logo.png" 
                   alt="DeCo Logo" 
                   className="h-full w-auto object-contain brightness-0 invert" 
                 />
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-[0.25em] relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-tertiary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contact"
                className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-primary transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(204,255,0,0.6)] hover:scale-105"
              >
                Start Project
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display text-4xl font-bold text-white hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};