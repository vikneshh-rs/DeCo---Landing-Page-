import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Workflow } from './components/Workflow';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { WhoAreWe } from './components/WhoAreWe';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* NEW SECTION: How Deco Drives Business */}
        <section className="py-24 bg-dark border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase text-white">
                How Does <span className="text-primary">DeCo</span> Drive <br />
                Your Business <br />
                Forward?
              </h2>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent hidden md:block"></div>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light pl-6 md:pl-8">
                <span className="text-white font-medium">No fluff, no exaggeration.</span> At Deco, we blend design, code, and innovation to craft seamless, high—performance digital experiences. 
                <br /><br />
                From intuitive user interfaces and scalable applications to enterprise software and AI—powered solutions, we build products that don’t just look great, they deliver results. 
                <br /><br />
                With a sharp focus on scalability, automation, and emerging technologies, we help businesses stay ahead in an ever—evolving digital landscape. Whether you are launching something new or transforming an existing vision, we turn bold ideas into powerful digital realities.
              </p>
            </div>
          </div>
        </section>

        <Services />
        <Workflow />
        <Portfolio />
        
        {/* Removed HallOfFame */}
        <Testimonials />
        <WhoAreWe />
        
        {/* Contact Section Placeholder */}
        <section id="contact" className="py-32 bg-dark-lighter relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)]"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
             <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">Ready to launch?</h2>
             <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
               Let's turn your vision into reality. Reach out to discuss your next big project.
             </p>
             <a href="mailto:hello@teamdeco.agency" className="inline-block px-12 py-6 bg-primary rounded-full text-black font-extrabold text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
               Initiate Launch
             </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;