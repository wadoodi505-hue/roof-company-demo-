import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const counters = gsap.utils.toArray<HTMLElement>('.counter-value');
    
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target') || '0');
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: target % 1 === 0 ? 1 : 0.1 },
            ease: "power2.out",
            onUpdate: function() {
              if (target % 1 !== 0) {
                counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
              }
            }
          });
        },
        once: true
      });
    });
  }, []);

  const stats = [
    { value: 20, suffix: '+', label: 'Years Experience' },
    { value: 5000, suffix: '+', label: 'Roofs Completed' },
    { value: 4.9, suffix: '★', label: 'Average Rating' },
    { value: 500, suffix: '+', label: '5-Star Reviews' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/50 border-y border-white/5 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-white/10">
          
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 flex items-baseline">
                <span className="counter-value" data-target={stat.value}>0</span>
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
