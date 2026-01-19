import React, { useMemo } from 'react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: '1', title: 'Neon Dreams', category: 'Branding', imageUrl: 'https://picsum.photos/800/600?random=1', size: 'large' },
  { id: '2', title: 'Zen Architecture', category: 'Web Design', imageUrl: 'https://picsum.photos/400/600?random=2', size: 'tall' },
  { id: '3', title: 'Future Tech', category: 'Product', imageUrl: 'https://picsum.photos/400/300?random=3', size: 'small' },
  { id: '4', title: 'Eco Life', category: 'App Design', imageUrl: 'https://picsum.photos/400/300?random=4', size: 'small' },
  { id: '5', title: 'Urban Flow', category: 'Photography', imageUrl: 'https://picsum.photos/800/400?random=5', size: 'wide' },
];

export const Portfolio: React.FC = () => {
  // Generate random stars for the background
  const stars = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 3}s`,
      opacity: Math.random() * 0.5 + 0.1
    }));
  }, []);

  return (
    <section id="portfolio" className="py-32 bg-black relative overflow-hidden">
      {/* Animated Star Field */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white animate-twinkle"
            style={{ 
              top: star.top, 
              left: star.left, 
              width: `${star.size}px`, 
              height: `${star.size}px`, 
              animationDelay: star.delay,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      {/* Subtle Cosmic Ray/Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[30%] -left-[20%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-12 blur-[1px]"></div>
          <div className="absolute bottom-[20%] -right-[20%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent -rotate-12 blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">Selected Work</h2>
            <p className="text-gray-500 text-lg">A showcase of our most recent and impactful projects.</p>
          </div>
          <button className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-primary hover:border-primary hover:text-black transition-colors font-bold uppercase tracking-wide text-sm hover:scale-105 transform active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(204,255,0,0.5)]">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] perspective-1000">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className={`relative group rounded-xl ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                item.size === 'tall' ? 'md:col-span-1 md:row-span-2' :
                item.size === 'wide' ? 'md:col-span-2 md:row-span-1' :
                'md:col-span-1 md:row-span-1'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[0.98] group-hover:rotate-x-2 group-hover:shadow-2xl border border-white/5">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating 3D Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center pointer-events-none" style={{ transform: 'translateZ(50px)' }}>
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {item.category}
                </span>
                <h3 className="text-3xl font-display font-extrabold text-white transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-black drop-shadow-lg">
                    {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};