import { ClipboardCheck, Camera, FileSignature, Home } from 'lucide-react';
import { Link } from 'wouter';

export default function Insurance() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Free Damage Inspection",
      desc: "We perform a thorough evaluation to identify all storm-related damage."
    },
    {
      icon: Camera,
      title: "We Document Everything",
      desc: "Detailed photographic evidence and specialized reporting for your claim."
    },
    {
      icon: FileSignature,
      title: "Meet with Adjuster",
      desc: "We meet your insurance adjuster on-site to ensure no damage is overlooked."
    },
    {
      icon: Home,
      title: "Restore Your Home",
      desc: "Once approved, we install your new premium roof quickly and cleanly."
    }
  ];

  return (
    <section className="py-24 bg-secondary gsap-section border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 gsap-fade-up">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Storm Damage</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              We Handle Your <br/>Insurance Claim
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Dealing with insurance companies after a storm can be a nightmare. Our dedicated insurance specialists speak their language and advocate on your behalf to ensure you get the full replacement value you deserve.
            </p>
            <Link href="/contact" className="inline-block">
              <button className="bg-white hover:bg-gray-100 text-background font-bold py-4 px-8 rounded-md uppercase tracking-wider text-sm transition-colors cursor-pointer">
                Request Storm Inspection
              </button>
            </Link>
          </div>

          <div className="lg:col-span-3 relative gsap-fade-up">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 hidden md:block" />
            
            <div className="space-y-8 relative">
              {steps.map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-start gap-6 relative ${i % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background hidden md:block z-10" />
                  
                  <div className={`md:w-1/2 flex gap-4 ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    <div className={`flex flex-col ${i % 2 !== 0 ? 'md:items-end' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-card border border-white/5 flex items-center justify-center mb-4 text-primary shrink-0">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-display font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
