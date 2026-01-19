import React, { useRef } from 'react';
import { Palette, Layout, Monitor, Smartphone, MessageSquare, Zap, Bot, Cpu } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Brand Identity',
    description: 'Logos, typography, and visual systems that tell your unique story through high-fidelity aesthetics.',
    icon: 'palette',
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Intuitive interfaces designed for engagement and conversion, blending beauty with functionality.',
    icon: 'layout',
  },
  {
    id: '3',
    title: 'Web Development',
    description: 'Blazing fast websites built with React, Tailwind, and modern tech for peak performance.',
    icon: 'monitor',
  },
  {
    id: '4',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that users love to touch and interact with.',
    icon: 'smartphone',
  },
  {
    id: '5',
    title: 'AI Chatbots & Automation',
    description: 'Intelligent WhatsApp, Telegram, and custom AI agents that handle customer logic and automate business workflows.',
    icon: 'bot',
  },
  {
    id: '6',
    title: 'Custom Systems',
    description: 'High-performance backend architectures and internal tools designed to scale your operations.',
    icon: 'cpu',
  },
];

const IconMap: Record<string, React.FC<any>> = {
  palette: Palette,
  layout: Layout,
  monitor: Monitor,
  smartphone: Smartphone,
  bot: Bot,
  cpu: Cpu,
};

// Enhanced Liquid Glass Orb Component
const LiquidGlassOrb: React.FC<{ color: string; secondaryColor: string; Icon: React.FC<any> }> = ({ color, secondaryColor, Icon }) => {
  return (
    <div className="relative w-32 h-32 mb-10 group-hover:scale-110 transition-transform duration-1000 ease-in-out">
      {/* Dynamic Aura Glow */}
      <div 
        className="absolute inset-[-20%] rounded-full blur-[40px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow" 
        style={{ backgroundColor: color }}
      ></div>
      
      {/* The Glass Body */}
      <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] overflow-hidden">
        {/* Swirling Liquid Interior */}
        <div 
          className="absolute inset-[-50%] animate-spin-slow opacity-40 mix-blend-color-dodge"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${color}, ${secondaryColor}, transparent)`,
            filter: 'blur(15px)',
          }}
        ></div>
        
        {/* Prism/Refraction Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-50"></div>
        
        {/* Specular Highlights */}
        <div className="absolute top-[10%] left-[15%] w-[40%] h-[20%] bg-white/40 rounded-full blur-[3px] rotate-[-15deg]"></div>
        <div className="absolute bottom-[15%] right-[20%] w-[10%] h-[10%] bg-white/20 rounded-full blur-[5px]"></div>
      </div>
      
      {/* The Central Tech Element - Integrated into the glass */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-500 shadow-xl">
           <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
        </div>
        
        {/* Internal Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-30"></div>
      </div>
    </div>
  );
};

// 3D Tilt Card Component
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !glowRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -12; 
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
        glowRef.current.style.opacity = '0.5';
    };

    const handleMouseLeave = () => {
        if (!cardRef.current || !glowRef.current) return;
        cardRef.current.style.transform = 'perspective(2000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        glowRef.current.style.opacity = '0';
    };

    return (
        <div 
            ref={cardRef}
            className={`relative transition-transform duration-500 ease-out will-change-transform ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6)'
            }}
        >
            <div 
                ref={glowRef}
                className="absolute w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 opacity-0 -translate-x-1/2 -translate-y-1/2 z-0"
            />
            {children}
        </div>
    );
};

export const Services: React.FC = () => {
  const serviceThemes = [
    { primary: '#ccff00', secondary: '#06b6d4' }, // Acid Green / Cyan
    { primary: '#9333ea', secondary: '#ec4899' }, // Purple / Pink
    { primary: '#06b6d4', secondary: '#9333ea' }, // Cyan / Purple
    { primary: '#f97316', secondary: '#ccff00' }, // Orange / Green
    { primary: '#10b981', secondary: '#06b6d4' }, // Emerald / Cyan
    { primary: '#ffffff', secondary: '#9333ea' }, // White / Purple
  ];

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
       {/* Ambient Cosmic Lights */}
       <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow opacity-30 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-tertiary/5 rounded-full blur-[150px] animate-nebula-move opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md mb-6">
             <div className="w-1 h-1 rounded-full bg-primary"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Our Expertise</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight leading-tight">
            High-Performance <br /><span className="text-gradient-cosmic">Digital Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We move fast, break conventions, and build future-proof products. <br className="hidden md:block" /> 
            Powered by design-led tech and Liquid Glass aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const theme = serviceThemes[index % serviceThemes.length];
            const Icon = IconMap[service.icon];
            
            return (
              <TiltCard 
                key={service.id}
                className="group p-12 rounded-[3.5rem] relative overflow-hidden flex flex-col items-center text-center"
              >
                {/* Refracted Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Enhanced Liquid Glass Component */}
                <LiquidGlassOrb color={theme.primary} secondaryColor={theme.secondary} Icon={Icon} />

                <h3 className="relative z-20 font-display text-2xl font-bold mb-4 text-white tracking-tight group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="relative z-20 text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500 text-sm">
                  {service.description}
                </p>
                
                {/* Aesthetic Detail */}
                <div className="mt-8 flex gap-1 items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                   <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/40"></div>
                   <div className="w-1.5 h-1.5 rounded-full border border-white/20"></div>
                   <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/40"></div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};