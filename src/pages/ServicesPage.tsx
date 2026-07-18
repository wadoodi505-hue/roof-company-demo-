import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Insurance from '@/components/sections/Insurance';
import Financing from '@/components/sections/Financing';
import CostEstimator from '@/components/sections/CostEstimator';
import FreeInspectionCTA from '@/components/sections/FreeInspectionCTA';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.28 } },
};

export default function ServicesPage() {
  useGsapAnimations();
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero
        title="Our Roofing Services"
        subtitle="From emergency tarp-overs at 2 a.m. to full commercial flat-roof systems — every service backed by premium materials, licensed crews, and a lifetime warranty."
        badge="10 Specialty Services"
        breadcrumb="Services"
      />
      <ServicesGrid />
      <Insurance />
      <CostEstimator />
      <Financing />
      <FreeInspectionCTA />
    </motion.div>
  );
}
