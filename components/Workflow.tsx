import React, { useEffect, useRef } from 'react';
import { Search, Map, PenTool, FileCheck, Code2, Bug, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Intake & Discovery",
    description: "We dive deep into your goals, challenges, and current systems to frame the real problem and define the project’s north star.",
    icon: Search
  },
  {
    id: 2,
    title: "Strategy & Blueprint",
    description: "We map the user journey, outline feature sets, and establish the technical strategy. This becomes the master plan for the build.",
    icon: Map
  },
  {
    id: 3,
    title: "UI/UX Architecture",
    description: "We craft intuitive interfaces and high-fidelity screens that align perfectly with your brand identity and user expectations.",
    icon: PenTool
  },
  {
    id: 4,
    title: "Scope & Agreement",
    description: "Transparency is key. We lock the scope, finalize deliverables, and sign the agreement so there are no surprises.",
    icon: FileCheck
  },
  {
    id: 5,
    title: "Development",
    description: "We turn designs into functional reality with clean, scalable code and modular architecture tailored to your needs.",
    icon: Code2
  },
  {
    id: 6,
    title: "Quality Assurance",
    description: "Rigorous testing for usability, performance, and security ensures a bug-free, smooth user experience at launch.",
    icon: Bug
  },
  {
    id: 7,
    title: "Launch & Support",
    description: "We handle the deployment and provide documentation and support to ensure your product thrives in the wild.",
    icon: Rocket
  }
];

export const Workflow: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        // Parallax background effect
        if (bgRef.current) {
          bgRef.current.style.backgroundPositionY = `${window.scrollY * 0.05}px`;
        }

        // Animated Progress Line Logic
        if (sectionRef.current && lineRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Start the line animation when the section is slightly visible
          const startOffset = windowHeight * 0.4; 
          const relativeY = -rect.top + startOffset;
          
          // Calculate height: constrain between 0 and section height
          const maxLineHeight = rect.height - 150; 
          let height = Math.max(0, relativeY);
          height = Math.min(height, maxLineHeight);

          lineRef.current.style.height = `${height}px`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="workflow" ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 opacity-[0.03] will-change-scroll pointer-events-none"
        style={{ 
            backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Fade overlay for background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-tertiary font-bold tracking-widest uppercase text-xs mb-3 block">Process</span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white">How We <span className="text-gradient-cosmic">Work</span></h2>
        </div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
          
          {/* Animated Progress Line */}
          <div 
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-tertiary to-secondary hidden md:block shadow-[0_0_15px_rgba(204,255,0,0.5)]"
            style={{ height: '0px', transition: 'height 0.1s linear' }}
          ></div>
          
          <div className="space-y-12 md:space-y-24 pt-4">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`group relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Center Node (Icon) */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2 group-hover:border-primary group-hover:scale-110 transition-all duration-500 z-10 backdrop-blur-sm">
                      <step.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    {/* Pulsing halo */}
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:left-1/2 md:-translate-x-1/2"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="glass-panel relative p-8 rounded-3xl group-hover:-translate-y-2 duration-500">
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                         <span className="text-white/5 font-display font-bold text-6xl absolute top-2 opacity-50 select-none pointer-events-none">0{step.id}</span>
                         <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors relative z-10">{step.title}</h3>
                         <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 relative z-10 font-light">
                           {step.description}
                         </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};