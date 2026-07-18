import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import ServiceArea from '@/components/sections/ServiceArea';
import EmergencyBanner from '@/components/sections/EmergencyBanner';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.28 } },
};

export default function ContactPage() {
  useGsapAnimations();
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero
        title="Let's Talk About Your Roof"
        subtitle="Fill out the form or call us directly. We respond within 30 minutes during business hours and 24/7 for emergencies."
        badge="Free Estimates — No Obligation"
        breadcrumb="Contact"
      />
      <ContactForm />
      <ServiceArea />
      <EmergencyBanner />
    </motion.div>
  );
}
