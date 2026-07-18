import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, badge, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-44 pb-28 overflow-hidden bg-background border-b border-white/5">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[700px] h-[500px] bg-primary/8 blur-[140px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 w-[500px] h-[350px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Horizontal scan line animation */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none"
        initial={{ top: '0%' }}
        animate={{ top: '100%' }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
        >
          <Link href="/" className="hover:text-primary transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-white/60">{breadcrumb || title}</span>
        </motion.div>

        {badge && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-semibold text-primary tracking-wide">{badge}</span>
          </motion.div>
        )}

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white max-w-3xl leading-[1.1]"
          >
            {title}
          </motion.h1>
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ originX: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-[3px] w-28 bg-gradient-to-r from-primary to-orange-300 rounded-full"
        />
      </div>
    </section>
  );
}
