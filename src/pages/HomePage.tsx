import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FreeInspectionCTA from '@/components/sections/FreeInspectionCTA';
import CostEstimator from '@/components/sections/CostEstimator';
import Financing from '@/components/sections/Financing';
import Testimonials from '@/components/sections/Testimonials';
import ServiceArea from '@/components/sections/ServiceArea';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.45 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function HomePage() {
  useGsapAnimations();
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyChooseUs />
      <FreeInspectionCTA />
      <CostEstimator />
      <Financing />
      <Testimonials />
      <ServiceArea />
    </motion.div>
  );
}
