import React, { useRef } from 'react';
import { Target, Layout, Code2, Settings } from 'lucide-react';

const TeamCard: React.FC<{ icon: React.FC<any>; title: string; description: string; color: string }> = ({ icon: Icon, title, description, color }) => {
    const ref = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || !glowRef.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;

        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
        glowRef.current.style.opacity = '0.4';
    };

    const handleMouseLeave = () => {
        if (!ref.current || !glowRef.current) return;
        ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        glowRef.current.style.opacity = '0';
    };

    return (
        <div 
            ref={ref}
            className="group relative bg-white/5 border border-white/10 p-8 rounded-[2rem] transition-all duration-300 ease-out overflow-hidden backdrop-blur-xl shadow-2xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Liquid Glow Layer */}
            <div 
                ref={glowRef}
                className="absolute w-48 h-48 rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 opacity-0 -translate-x-1/2 -translate-y-1/2 z-0"
                style={{ backgroundColor: color }}
            />
            
            <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                    <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-white font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{description}</p>
                </div>
            </div>
        </div>
    );
};

export const WhoAreWe: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            
            {/* Visual Side - Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
                <TeamCard 
                  icon={Target} 
                  title="Strategists" 
                  description="We translate business goals into clear product direction and execution plans." 
                  color="#ccff00"
                />
                <TeamCard 
                  icon={Layout} 
                  title="Designers" 
                  description="Creating intuitive, user-focused interfaces that balance form and function." 
                  color="#9333ea"
                />
                <TeamCard 
                  icon={Code2} 
                  title="Engineers" 
                  description="Building reliable, scalable systems with clean architecture and modern tech." 
                  color="#06b6d4"
                />
                <TeamCard 
                  icon={Settings} 
                  title="Operators" 
                  description="Optimizing workflows, automations, and internal tools for efficiency and scale." 
                  color="#ffffff"
                />
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-primary"></div>
                  <span className="text-gray-400 font-bold tracking-[0.4em] uppercase text-[10px]">About Us</span>
                </div>
                
                <h2 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] tracking-tight">
                    Who is <br/><span className="text-gradient-cosmic">Team DeCo?</span>
                </h2>
                
                <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
                    <p>
                        We are a design-led technology studio focused on building purposeful digital products. At Team DeCo, we combine strategy, UI/UX design, engineering, and automation to help businesses move from ideas to execution—fast and efficiently.
                    </p>
                    <p>
                        We believe great products sit at the intersection of clarity, usability, and performance. That’s why every solution we build is rooted in problem-solving, not just aesthetics.
                    </p>
                    <p>
                        From crafting intuitive user experiences to developing scalable internal systems and AI-powered tools, we partner closely with teams to create products that deliver real business outcomes.
                    </p>
                    <p className="text-white font-display font-bold text-2xl tracking-tight border-l-2 border-primary pl-6">
                        We don’t chase trends. <br />
                        <span className="text-primary">We design systems that last.</span>
                    </p>
                </div>
            </div>
        </div>

        {/* Metrics Section */}
        <div className="pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center md:items-start">
                <span className="text-5xl md:text-6xl font-display font-extrabold text-white mb-2">10+</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <span className="text-5xl md:text-6xl font-display font-extrabold text-white mb-2">4+</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Active Collaborations</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <span className="text-5xl md:text-6xl font-display font-extrabold text-white mb-2">98%</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Client Satisfaction</span>
            </div>
        </div>
      </div>
    </section>
  );
};