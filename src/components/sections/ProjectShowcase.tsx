import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import proj1 from '@assets/generated_images/project-1.jpg';
import proj2 from '@assets/generated_images/project-2.jpg';
import proj3 from '@assets/generated_images/project-3.jpg';
import proj4 from '@assets/generated_images/project-4.jpg';
import proj5 from '@assets/generated_images/project-5.jpg';

const ALL_PROJECTS = [
  { id: 1, image: proj1, category: 'Residential', title: 'Luxury Asphalt Replacement', location: 'North Hills' },
  { id: 2, image: proj2, category: 'Commercial', title: 'Modern Flat Roof System', location: 'Downtown Business Park' },
  { id: 3, image: proj3, category: 'Residential', title: 'Charcoal Slate Installation', location: 'Heritage Estate' },
  { id: 4, image: proj4, category: 'Storm Damage', title: 'Full Wind Damage Restoration', location: 'Suburban Heights' },
  { id: 5, image: proj5, category: 'Commercial', title: 'Warehouse Metal Roofing', location: 'Industrial Sector' },
];

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Storm Damage'];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = ALL_PROJECTS.filter(
    (p) => activeTab === 'All' || p.category === activeTab
  );

  return (
    <section id="projects" className="py-32 bg-secondary gsap-section">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 gsap-fade-up">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
              Our Work Speaks <br/>For Itself
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-card border border-white/5"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-display font-bold text-white mb-1">
                    {project.title}
                  </h4>
                  <p className="text-white/70 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center gsap-fade-up">
          <button className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors uppercase tracking-wider text-sm border-b-2 border-primary pb-1">
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
