import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600/90 backdrop-blur-md border-b border-red-500 relative z-50 text-white w-full py-3 px-4 shadow-lg shadow-red-900/20">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-pulse">🚨</span>
          <p className="font-medium text-sm sm:text-base tracking-wide">
            <span className="font-bold">24/7 EMERGENCY ROOFING AVAILABLE</span> — We're here when you need us most.
          </p>
        </div>
        
        <a 
          href="tel:+18005551234" 
          className="flex items-center gap-2 bg-white text-red-700 hover:bg-gray-100 px-4 py-1.5 rounded-full font-bold text-sm transition-colors shadow-sm group"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <PhoneCall className="w-4 h-4" />
          </motion.div>
          800-555-1234
        </a>
      </div>
    </div>
  );
}
