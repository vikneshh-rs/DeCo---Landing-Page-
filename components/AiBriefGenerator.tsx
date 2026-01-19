import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { generateCreativeBrief } from '../services/geminiService';
import { GeneratedBrief } from '../types';

export const AiBriefGenerator: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [brief, setBrief] = useState<GeneratedBrief | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    
    setLoading(true);
    setError('');
    setBrief(null);
    
    try {
      const result = await generateCreativeBrief(idea);
      if (result) {
        setBrief(result);
      } else {
        setError("Couldn't generate brief. Please try again.");
      }
    } catch (e) {
      setError("Something went wrong with the AI service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-brief" className="py-24 relative overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Gemini 2.5 Flash</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">AI Creative Director</h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Stuck on an idea? Describe it below, and our AI will generate a professional creative brief structure to kickstart your project.
          </p>
        </div>

        {/* Input HUD */}
        <div className="glass-panel rounded-3xl p-3 backdrop-blur-xl border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.1)]">
          <div className="flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g. A minimalist coffee shop brand inspired by Japanese architecture..."
              className="flex-1 bg-white/5 text-white placeholder-gray-500 px-6 py-4 outline-none text-lg rounded-2xl border border-transparent focus:border-indigo-500/50 transition-all focus:bg-white/10"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button 
              onClick={handleGenerate}
              disabled={loading || !idea.trim()}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px] shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
            >
              {loading ? <Loader2 className="animate-spin" /> : <>Generate <ArrowRight className="w-5 h-5" /></>}
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-6 text-center text-red-400 bg-red-400/10 py-3 rounded-lg border border-red-400/20">
            {error}
          </div>
        )}

        {brief && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-colors"></div>
              <h3 className="text-indigo-400 font-bold mb-3 text-lg flex items-center gap-2 font-display">01. Concept</h3>
              <p className="text-gray-300 leading-relaxed font-light">{brief.concept}</p>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-pink-500/50 transition-colors">
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/30 transition-colors"></div>
              <h3 className="text-pink-400 font-bold mb-3 text-lg font-display">02. Visuals</h3>
              <p className="text-gray-300 leading-relaxed font-light">{brief.visualDirection}</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors"></div>
              <h3 className="text-cyan-400 font-bold mb-3 text-lg font-display">03. Audience</h3>
              <p className="text-gray-300 leading-relaxed font-light">{brief.targetAudience}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};