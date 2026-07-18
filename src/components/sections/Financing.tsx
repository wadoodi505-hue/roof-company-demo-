import { CreditCard, CheckCircle2 } from 'lucide-react';

export default function Financing() {
  const plans = [
    {
      name: "Good",
      desc: "Perfect for quick repairs or standard replacements.",
      rate: "0% APR",
      term: "12 Months",
      payment: "$99"
    },
    {
      name: "Better",
      desc: "Our most popular option for premium roof systems.",
      rate: "6.99% APR",
      term: "60 Months",
      payment: "$149",
      popular: true
    },
    {
      name: "Best",
      desc: "Lowest monthly payment for complete transformations.",
      rate: "9.99% APR",
      term: "120 Months",
      payment: "$189"
    }
  ];

  return (
    <section className="py-24 bg-background gsap-section">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 gsap-fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <CreditCard className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Flexible Financing Options
          </h2>
          <p className="text-muted-foreground text-lg">
            A new roof is a major investment. We've partnered with leading lenders to offer flexible, budget-friendly payment plans so you can protect your home today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`gsap-fade-up relative rounded-2xl p-8 border ${
                plan.popular 
                  ? 'bg-card border-primary shadow-2xl shadow-primary/10 scale-105 z-10' 
                  : 'bg-secondary/50 border-white/5 mt-4 mb-4'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8 border-b border-white/10 pb-8">
                <h4 className="text-2xl font-display font-bold text-white mb-2">{plan.name} Plan</h4>
                <p className="text-muted-foreground text-sm h-10">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-white">
                  <span className="text-white/60">Interest Rate</span>
                  <span className="font-bold">{plan.rate}</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span className="text-white/60">Term Length</span>
                  <span className="font-bold">{plan.term}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/10 text-white">
                  <span className="text-white/60">Payments from</span>
                  <span className="text-3xl font-display font-bold text-primary">{plan.payment}<span className="text-sm text-white/50 font-sans">/mo</span></span>
                </div>
              </div>

              <button className={`w-full py-3 rounded-md font-bold transition-colors ${
                plan.popular ? 'bg-primary hover:bg-orange-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-white/5 rounded-2xl p-8 max-w-5xl mx-auto gsap-fade-up">
          <h4 className="font-display font-bold text-white text-xl mb-6 text-center">Fast, Easy Approval Process</h4>
          <div className="grid sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-4 sm:pt-0">
              <div className="w-10 h-10 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold mb-3">1</div>
              <h5 className="text-white font-bold mb-2">Apply in Minutes</h5>
              <p className="text-sm text-muted-foreground">Paperless application via text or email.</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="w-10 h-10 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold mb-3">2</div>
              <h5 className="text-white font-bold mb-2">Instant Decision</h5>
              <p className="text-sm text-muted-foreground">Get approved instantly with no hard credit pull.</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="w-10 h-10 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold mb-3">3</div>
              <h5 className="text-white font-bold mb-2">Start Your Project</h5>
              <p className="text-sm text-muted-foreground">Schedule your roof installation immediately.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
