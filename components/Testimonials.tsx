import React, { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Team DeCo didn't just build a website, they crafted a digital experience that completely repositioned our brand in the market. The ROI has been incredible.",
    name: "Alex Rivera",
    role: "CMO, TechFlow",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    quote: "The level of creativity and technical execution is unmatched. They turned our complex requirements into a seamless, beautiful interface that our users actually love.",
    name: "Sarah Chen",
    role: "Founder, Zenith",
    image: "https://picsum.photos/100/100?random=21"
  },
  {
    quote: "Fast, efficient, and mind-blowingly creative. Working with DeCo was the best investment we made this year. They simply 'get it'.",
    name: "Marcus Johnson",
    role: "Director, ArtStream",
    image: "https://picsum.photos/100/100?random=22"
  }
];

// 3D Tilt Component
const TiltWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5; 
        const rotateY = ((x - centerX) / centerX) * 5;

        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    return (
        <div 
            ref={ref}
            className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-gray-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Star className="w-3 h-3 text-primary fill-primary" />
            <span>Trusted by Industry Leaders</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Client <span className="text-gradient-cosmic">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TiltWrapper 
              key={index}
              className="group glass-panel p-8 rounded-3xl relative hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5"
            >
              <Quote className="w-10 h-10 text-white/20 mb-6 group-hover:text-primary transition-colors duration-500" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light" style={{ transform: 'translateZ(20px)' }}>
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6" style={{ transform: 'translateZ(20px)' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-primary transition-colors grayscale group-hover:grayscale-0"
                />
                <div>
                  <h4 className="text-white font-bold font-display">{item.name}</h4>
                  <span className="text-gray-500 text-sm">{item.role}</span>
                </div>
              </div>
            </TiltWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};