import { ShieldCheck, Banknote, HardHat, Clock, FileText, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: HardHat,
      title: "Licensed Experts",
      desc: "Fully licensed, bonded, and insured master roofers."
    },
    {
      icon: ShieldCheck,
      title: "Lifetime Warranty",
      desc: "Industry-leading warranties on materials and labor."
    },
    {
      icon: Banknote,
      title: "Financing Available",
      desc: "Flexible payment plans to fit your budget perfectly."
    },
    {
      icon: Clock,
      title: "Emergency Service",
      desc: "24/7 rapid response for critical storm damage."
    },
    {
      icon: FileText,
      title: "Insurance Assistance",
      desc: "We work directly with your adjuster to maximize claims."
    },
    {
      icon: ThumbsUp,
      title: "Top Rated Company",
      desc: "Over 500+ 5-star reviews from local homeowners."
    }
  ];

  return (
    <section className="py-24 bg-background gsap-section relative border-y border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 gsap-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Why Choose EliteRoof?
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just build roofs; we build trust. Experience the difference of working with a premium contractor that prioritizes quality above all else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="gsap-fade-up p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
