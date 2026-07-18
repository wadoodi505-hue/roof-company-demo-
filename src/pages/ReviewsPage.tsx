import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Testimonials from '@/components/sections/Testimonials';
import Stats from '@/components/sections/Stats';
import FreeInspectionCTA from '@/components/sections/FreeInspectionCTA';
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

const allReviews = [
  { name: 'Michael Chen', city: 'Westside Heights', avatar: avatar1, rating: 5, source: 'Google', date: 'March 2024', text: 'EliteRoof transformed our home. They were done in two days, left the yard spotless, and the new architectural shingles look incredible. Highly recommend their professional crew.' },
  { name: 'Sarah Jenkins', city: 'Oakridge Estate', avatar: avatar2, rating: 5, source: 'Google', date: 'January 2024', text: 'After a severe hail storm, I was stressed about insurance. EliteRoof stepped in, handled the adjuster completely, and got us a premium roof replacement fully covered. Absolute life savers.' },
  { name: 'David & Emily Roth', city: 'Pine Valley', avatar: avatar3, rating: 5, source: 'Yelp', date: 'November 2023', text: 'You get what you pay for. We received cheaper quotes, but EliteRoof\'s presentation, materials, and warranty made it an easy choice. The peace of mind is worth every penny.' },
  { name: 'James Wilson', city: 'Downtown District', avatar: avatar4, rating: 5, source: 'Google', date: 'October 2023', text: 'We needed our commercial flat roof replaced urgently. Their commercial team mobilized fast, didn\'t disrupt our business operations, and delivered a flawless TPO installation.' },
  { name: 'Patricia OBrien', city: 'North Hills', avatar: avatar1, rating: 5, source: 'Google', date: 'September 2023', text: 'I called at midnight during a storm and a real person answered. They had a tarp on my roof by 6 a.m. When I eventually got the full replacement done, the crew was just as impressive.' },
  { name: 'Tony Nguyen', city: 'Riverview', avatar: avatar2, rating: 5, source: 'Facebook', date: 'August 2023', text: 'Financing was easy and the monthly payment fits our budget. What I appreciated most was they never pushed us toward a bigger job than what we needed. Very trustworthy company.' },
  { name: 'Brenda Castillo', city: 'Maplewood', avatar: avatar3, rating: 5, source: 'Google', date: 'July 2023', text: 'Third time using EliteRoof across two different properties. They have the best clean-up crew I have ever seen — not a single nail left in the yard. My kids play out there!' },
  { name: 'Robert and Lisa Park', city: 'Highland Park', avatar: avatar4, rating: 5, source: 'Google', date: 'May 2023', text: 'Entire experience was five stars — from the estimate to the final walk-through. The GAF Master Elite warranty gives us real peace of mind. We will recommend to every neighbor.' },
];

export default function ReviewsPage() {
  useGsapAnimations();

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero
        title="500+ Five-Star Reviews"
        subtitle="Real words from real homeowners. We let our customers do the talking — and they've been very kind."
        badge="4.9★ Average Rating"
        breadcrumb="Reviews"
      />

      {/* Rating summary bar */}
      <section className="py-16 bg-secondary border-b border-white/5 gsap-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center gsap-fade-up">
            {[
              { label: 'Google Reviews', value: '4.9★', count: '312 reviews' },
              { label: 'Yelp', value: '4.8★', count: '94 reviews' },
              { label: 'Facebook', value: '5.0★', count: '67 reviews' },
              { label: 'BBB Rating', value: 'A+', count: 'Accredited' },
            ].map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl font-display font-bold text-primary mb-1">{platform.value}</span>
                <span className="text-white font-bold text-sm mb-1">{platform.label}</span>
                <span className="text-xs text-muted-foreground">{platform.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials carousel */}
      <Testimonials />

      {/* Extended reviews grid */}
      <section className="py-24 bg-background gsap-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14 gsap-fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">More from Our Customers</h2>
            <p className="text-muted-foreground">Every review is verified and unedited.</p>
          </div>

          <div className="gsap-card-group grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allReviews.map((review, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: 'rgba(249,115,22,0.4)' }}
                className="gsap-card bg-card border border-white/5 rounded-2xl p-6 flex flex-col transition-colors"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4 shrink-0" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-white/75 text-sm leading-relaxed flex-grow mb-6">"{review.text}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-white font-bold text-sm truncate">{review.name}</h5>
                    <span className="text-xs text-muted-foreground">{review.city}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <ThumbsUp className="w-3.5 h-3.5 text-primary ml-auto mb-0.5" />
                    <span className="text-[10px] text-muted-foreground">{review.source}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <FreeInspectionCTA />
    </motion.div>
  );
}
