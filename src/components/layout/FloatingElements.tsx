import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingElements() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left side Call Us */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <a 
          href="tel:+18005551234" 
          className="bg-primary hover:bg-orange-500 text-white py-3 px-4 rounded-r-xl flex flex-col items-center gap-2 shadow-lg hover:pr-6 transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-widest text-xs font-bold font-display">
            Call Us 24/7
          </span>
        </a>
      </div>

      {/* Right side Free Estimate */}
      <div className="fixed right-0 top-1/3 -translate-y-1/2 z-40 hidden xl:block">
        <button 
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white hover:bg-gray-100 text-background py-3 px-4 rounded-l-xl flex flex-col items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:pl-6 transition-all duration-300"
        >
          <Calendar className="w-5 h-5 text-primary" />
          <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-widest text-xs font-bold font-display">
            Free Estimate
          </span>
        </button>
      </div>

      {/* Bottom Right Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="bg-card border border-white/10 hover:border-primary text-white p-3 rounded-full shadow-lg transition-colors group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        <button 
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-110 flex items-center justify-center relative group"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-white text-background text-sm font-medium py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Chat with us
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-white"></div>
          </div>
        </button>

      </div>
    </>
  );
}
