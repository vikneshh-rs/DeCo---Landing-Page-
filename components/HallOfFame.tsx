import React from 'react';
import { Trophy, ArrowUpRight, Star } from 'lucide-react';

const awards = [
  { year: '2024', org: 'Awwwards', title: 'Site of the Day', project: 'Neon Dreams' },
  { year: '2024', org: 'FWA', title: 'FWA of the Day', project: 'Neon Dreams' },
  { year: '2023', org: 'CSS Design Awards', title: 'Best UI/UX Innovation', project: 'Zen Architecture' },
  { year: '2023', org: 'Clutch', title: 'Top Creative Agency', project: 'Team DeCo Global' },
  { year: '2022', org: 'Behance', title: 'Featured in Interaction', project: 'Urban Flow' },
];

export const HallOfFame: React.FC = () => {
  return (
    <section className="py-32 bg-dark-lighter border-t border-white/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-primary w-6 h-6" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Recognition</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tight">Hall of Fame</h2>
          </div>
          <p className="text-gray-400 max-w-md text-right md:text-left">
            We don't just build for functionality; we build for excellence. Our work has been recognized globally.
          </p>
        </div>

        <div className="flex flex-col">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
            <div className="col-span-2 md:col-span-1">Year</div>
            <div className="col-span-4 md:col-span-3">Organization</div>
            <div className="col-span-6 md:col-span-4">Award</div>
            <div className="hidden md:block md:col-span-3 text-right">Project</div>
            <div className="hidden md:block md:col-span-1"></div>
          </div>

          {/* Rows */}
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="group grid grid-cols-12 gap-4 py-8 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors relative cursor-pointer"
            >
              <div className="col-span-2 md:col-span-1 text-gray-400 font-mono text-sm group-hover:text-primary transition-colors">
                {award.year}
              </div>
              <div className="col-span-4 md:col-span-3 text-white font-bold text-lg md:text-xl group-hover:translate-x-2 transition-transform duration-300">
                {award.org}
              </div>
              <div className="col-span-6 md:col-span-4 text-gray-300 group-hover:text-white transition-colors">
                {award.title}
              </div>
              <div className="hidden md:block md:col-span-3 text-right text-gray-500 group-hover:text-primary transition-colors font-mono text-sm">
                {award.project}
              </div>
              <div className="hidden md:flex md:col-span-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                <ArrowUpRight className="text-primary w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};