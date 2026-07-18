import { Home, Wrench, ShieldAlert, CloudLightning, Factory, CheckSquare, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
  const services = [
    {
      icon: Home,
      title: "Roof Replacement",
      desc: "Complete tear-off and replacement using premium architectural shingles or metal.",
    },
    {
      icon: Wrench,
      title: "Roof Repair",
      desc: "Targeted fixes for leaks, missing shingles, and structural wear to extend roof life.",
    },
    {
      icon: ShieldAlert,
      title: "Emergency Roofing",
      desc: "24/7 rapid response tarping and temporary repairs to prevent further interior damage.",
    },
    {
      icon: CloudLightning,
      title: "Storm Damage",
      desc: "Comprehensive hail and wind damage restoration, fully coordinated with your insurance.",
    },
    {
      icon: Factory,
      title: "Commercial Roofing",
      desc: "Flat roofs, TPO, EPDM, and metal roofing solutions for businesses and warehouses.",
    },
    {
      icon: CheckSquare,
      title: "Roof Inspection",
      desc: "Detailed drone and manual inspections with full photographic reports.",
    },
    {
      icon: Droplets,
      title: "Gutter Installation",
      desc: "Seamless aluminum gutters and protective leaf guards to direct water away.",
    }
  ];

  return (
    <section id="services" className="py-32 bg-background gsap-section relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        
        <div className="mb-20 max-w-3xl gsap-fade-up">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Comprehensive <br/>
            <span className="text-gradient">Roofing Services</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            From minor leak repairs to complete commercial installations, we bring uncompromising quality and meticulous attention to detail to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="gsap-fade-up group p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden h-full flex flex-col"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:border-primary/30">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>

              <div className="mt-auto flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors">
                Learn more 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <div className="gsap-fade-up group p-8 rounded-2xl bg-primary flex flex-col items-center justify-center text-center h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
            <h4 className="text-2xl font-display font-bold text-white mb-4 relative z-10">Don't see what you need?</h4>
            <p className="text-white/80 mb-6 text-sm relative z-10">We handle custom projects of all sizes.</p>
            <button className="bg-white text-primary font-bold py-3 px-6 rounded-md hover:shadow-lg transition-all relative z-10 hover:bg-gray-50 uppercase text-sm tracking-wider w-full">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
