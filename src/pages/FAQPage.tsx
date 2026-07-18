import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import FAQ from '@/components/sections/FAQ';
import FreeInspectionCTA from '@/components/sections/FreeInspectionCTA';
import ContactForm from '@/components/sections/ContactForm';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.28 } },
};

export default function FAQPage() {
  useGsapAnimations();
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero
        title="Got Questions? We Have Answers."
        subtitle="The most common roofing questions we hear every day — answered honestly, without the sales pitch."
        badge="8 Common Questions"
        breadcrumb="FAQ"
      />
      <FAQ />
      <FreeInspectionCTA />
      <ContactForm />
    </motion.div>
  );
}
