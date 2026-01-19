import React from 'react';
import { ArrowRight, ChevronDown, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000 bg-black">
      
      {/* Background Effects (Replacement for 3D) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[120px] animate-nebula-move mix-blend-screen opacity-40"></div>
        
        {/* Tech Grid */}
        <div className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }}
        ></div>
      </div>
      
      {/* Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_70%,#000000_100%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-1 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center transform-style-3d flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel mb-8 animate-fade-in-up hover:border-primary/50 transition-colors duration-500 group cursor-default">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#ccff00]"></div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300 font-display group-hover:text-white transition-colors">Mission Control Online</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-in-up text-white leading-[1.05] drop-shadow-2xl mix-blend-screen" style={{ animationDelay: '0.1s' }}>
          <div className="animate-subtle-float">
            We Build the Product <br className="hidden md:block"/>
            You’re Still <span className="text-gradient-cosmic">Overthinking.</span>
          </div>
        </h1>

        <div className="animate-fade-in-up max-w-3xl mx-auto space-y-4" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
            DeCo is a design-led tech studio building scalable products, intelligent systems, and AI-driven solutions for modern businesses.
          </p>
          <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
            We help startups and teams ship high-performance digital products using world-class design, custom systems, and AI-powered automation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up mt-12" style={{ animationDelay: '0.3s' }}>
          {/* Neon Action Button */}
          <a 
            href="#contact"
            className="group relative px-10 py-5 bg-primary text-black rounded-full font-bold text-lg flex items-center gap-2 animate-float shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_50px_rgba(204,255,0,0.7)] hover:scale-105 transition-all duration-300 font-display z-20"
          >
            👉 Start a Project
          </a>
          
          {/* Glass Button */}
          <a 
            href="#workflow"
            className="group px-10 py-5 glass-panel rounded-full font-bold text-lg hover:bg-white/10 text-white transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 z-20"
          >
            <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-tertiary" />
            Our Approach
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-50">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};