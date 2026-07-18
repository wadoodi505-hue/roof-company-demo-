import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useGsapAnimations() {
  useEffect(() => {
    // Short delay to let React render the page before attaching triggers
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();

      const sections = gsap.utils.toArray<HTMLElement>('.gsap-section');
      const triggers: ScrollTrigger[] = [];

      sections.forEach((section) => {
        const elements = section.querySelectorAll('.gsap-fade-up');
        if (elements.length) {
          // Reset visibility
          gsap.set(elements, { opacity: 0, y: 50 });

          const trigger = ScrollTrigger.create({
            trigger: section,
            start: 'top 82%',
            onEnter: () => {
              gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.85,
                stagger: 0.12,
                ease: 'power3.out',
              });
            },
            once: true,
          });
          triggers.push(trigger);
        }
      });

      // Clip-path text reveals for section headings
      const headings = gsap.utils.toArray<HTMLElement>('.gsap-clip-reveal');
      headings.forEach((heading) => {
        gsap.set(heading, { clipPath: 'inset(0 100% 0 0)', opacity: 1 });
        const trigger = ScrollTrigger.create({
          trigger: heading,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(heading, {
              clipPath: 'inset(0 0% 0 0)',
              duration: 0.9,
              ease: 'power3.out',
            });
          },
          once: true,
        });
        triggers.push(trigger);
      });

      // Staggered card scale-in
      const cardGroups = gsap.utils.toArray<HTMLElement>('.gsap-card-group');
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll('.gsap-card');
        if (cards.length) {
          gsap.set(cards, { opacity: 0, scale: 0.92, y: 30 });
          const trigger = ScrollTrigger.create({
            trigger: group,
            start: 'top 80%',
            onEnter: () => {
              gsap.to(cards, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
              });
            },
            once: true,
          });
          triggers.push(trigger);
        }
      });

      return () => {
        triggers.forEach((t) => t.kill());
      };
    }, 120);

    return () => clearTimeout(timeout);
  }, []);
}
