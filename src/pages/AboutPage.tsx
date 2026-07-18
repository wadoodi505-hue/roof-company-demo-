import { motion } from 'framer-motion';
import { Award, Users, MapPin, Handshake, ShieldCheck, Zap } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Stats from '@/components/sections/Stats';
import ServiceArea from '@/components/sections/ServiceArea';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

import avatar1 from '@assets/generated_images/avatar-1.jpg';
import avatar2 from '@assets/generated_images/avatar-2.jpg';
import avatar3 from '@assets/generated_images/avatar-3.jpg';
import avatar4 from '@assets/generated_images/avatar-4.jpg';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.28 } },
};

const teamMembers = [
  { name: 'Marcus Reynolds', role: 'Founder & CEO', avatar: avatar1, bio: '20+ years transforming homes. Built EliteRoof from a single truck into the most trusted roofing company in the region.' },
  { name: 'Sandra Kim', role: 'Head of Operations', avatar: avatar2, bio: 'Ex-construction project manager who ensures every crew, every day runs on schedule and on budget.' },
  { name: 'David Okafor', role: 'Lead Estimator', avatar: avatar3, bio: 'Certified roof inspector with an obsessive eye for detail. His proposals save homeowners thousands on insurance claims.' },
  { name: 'Emily Torres', role: 'Customer Success', avatar: avatar4, bio: 'Fluent in both Spanish and the language of insurance adjusters — she fights to get clients what they deserve.' },
];

const values = [
  { icon: ShieldCheck, title: 'Quality First', desc: 'We never cut corners. Period. If it is not done right, we redo it at our cost.' },
  { icon: Handshake, title: 'Honest Pricing', desc: 'No bait-and-switch. The number in your estimate is the number on your invoice.' },
  { icon: Zap, title: 'Speed Without Sacrifice', desc: 'We are fast because we are organized, not because we rush. Most roofs: 1-2 days.' },
  { icon: Users, title: 'Local Crews Only', desc: 'No sub-contracted strangers. Every worker on your roof is a trained EliteRoof employee.' },
  { icon: Award, title: 'Manufacturer Certified', desc: 'GAF Master Elite certified — fewer than 2% of roofers nationwide achieve this status.' },
  { icon: MapPin, title: 'Community Focused', desc: 'We live where we work. We sponsor local teams, donate to shelters, and give back.' },
];

export default function AboutPage() {
  useGsapAnimations();

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero
        title="Built on Trust. Proven by Roofs."
        subtitle="Since 2004 we've been protecting homes and businesses across the metro area. This is our story — and why we do this work differently."
        badge="20+ Years of Excellence"
        breadcrumb="About"
      />

      {/* Story Section */}
      <section className="py-28 bg-background gsap-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="gsap-fade-up">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Started with one truck.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                  Built an institution.
                </span>
              </h3>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  In 2004, Marcus Reynolds loaded a truck with shingles and knocked on doors in North Hills. His pitch was simple: better materials, better workmanship, and you'll never call us twice about the same leak.
                </p>
                <p>
                  Word spread. By 2010, EliteRoof had grown to 12 crews and a reputation that outpaced any advertising budget. By 2020, we'd replaced over 5,000 roofs and survived every economic cycle by doing one thing obsessively — getting it right the first time.
                </p>
                <p>
                  Today we are a GAF Master Elite® Certified contractor, one of fewer than 2% of roofing companies in the country to earn that distinction. It means rigorous factory training, premium warranties, and a network of the best materials in the industry.
                </p>
              </div>
            </div>

            {/* Story visual */}
            <div className="gsap-fade-up relative">
              <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full" />
              <div className="relative bg-card border border-white/10 rounded-3xl p-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { year: '2004', event: 'Founded in North Hills with 1 crew' },
                    { year: '2008', event: 'Expanded to commercial roofing' },
                    { year: '2012', event: 'GAF Master Elite® certification earned' },
                    { year: '2016', event: 'Launched 24/7 emergency response' },
                    { year: '2020', event: '5,000th roof milestone reached' },
                    { year: '2024', event: '500+ five-star reviews — and counting' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border-l-2 border-primary/40 pl-4 py-1"
                    >
                      <span className="text-primary font-display font-bold text-lg">{item.year}</span>
                      <p className="text-sm text-muted-foreground mt-1 leading-snug">{item.event}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary gsap-section border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 gsap-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              Six principles that guide every estimate, every installation, and every callback.
            </p>
          </div>

          <div className="gsap-card-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, borderColor: 'rgba(249,115,22,0.5)' }}
                className="gsap-card bg-card border border-white/5 rounded-2xl p-8 flex gap-5 items-start transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-lg mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-background gsap-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 gsap-fade-up">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The People</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
              Meet the Leadership Team
            </h3>
          </div>

          <div className="gsap-card-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="gsap-card group text-center"
              >
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-110" />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative w-28 h-28 rounded-full object-cover border-2 border-white/10 group-hover:border-primary/50 transition-colors"
                  />
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-1">{member.name}</h4>
                <span className="text-primary text-sm font-bold uppercase tracking-wider">{member.role}</span>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Stats />
      <ServiceArea />
    </motion.div>
  );
}
