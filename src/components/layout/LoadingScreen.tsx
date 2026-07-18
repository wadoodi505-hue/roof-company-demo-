import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling during load
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm rotate-45">
              <div className="w-6 h-6 border-2 border-background -rotate-45" />
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tight text-white">EliteRoof</h1>
          </motion.div>
          <motion.div 
            className="w-48 h-[2px] bg-secondary mt-8 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "circInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
