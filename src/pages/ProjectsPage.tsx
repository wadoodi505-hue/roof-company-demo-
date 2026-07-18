import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import Stats from '@/components/sections/Stats';
import FreeInspectionCTA from '@/components/sections/FreeInspectionCTA';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.28 } },
};

export default function ProjectsPage() {
  useGsapAnimations();
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero
        title="Our Project Portfolio"
        subtitle="Browse hundreds of completed residential and commercial projects across the Greater Metro Area — every one finished on time and built to last decades."
        badge="Award-Winning Work"
        breadcrumb="Projects"
      />
      <ProjectShowcase />
      <Stats />
      <FreeInspectionCTA />
    </motion.div>
  );
}
