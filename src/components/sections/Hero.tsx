import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Shield, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

import heroBg from '@assets/generated_images/hero-roof.jpg';

export default function Hero() {
  const ctaClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Floating Particles (CSS animated via framer-motion) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-sm rotate-45"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.2 
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-12 pb-24 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-white/90">24/7 Emergency Service Available</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white max-w-5xl leading-[1.1] mb-6"
        >
          Premium Roofing Solutions You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Trust</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light"
        >
          Protecting Homes With Expert Roofing Services, Fast Response, Honest Pricing, and Guaranteed Quality.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
        >
          <Button 
            onClick={(e) => ctaClick(e, '#contact')}
            size="lg" 
            className="h-14 px-8 text-base font-bold tracking-wide uppercase bg-primary hover:bg-orange-500 text-white rounded-md shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] hover:-translate-y-1"
          >
            Get Free Estimate
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="h-14 px-8 text-base font-bold tracking-wide uppercase border-white/20 hover:bg-white hover:text-background text-white bg-transparent backdrop-blur-sm transition-all hover:-translate-y-1"
            asChild
          >
            <a href="tel:+18005551234">Call Now: 800-555-1234</a>
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl border-t border-white/10 pt-8"
        >
          {[
            { icon: Shield, text: "Licensed & Insured" },
            { icon: Star, text: "5-Star Rated" },
            { icon: Clock, text: "24/7 Emergency" },
            { icon: CheckCircle2, text: "Free Estimates" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-white/70">
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
