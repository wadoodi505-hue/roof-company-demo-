import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import avatar1 from '@assets/generated_images/avatar-1.jpg';
import avatar2 from '@assets/generated_images/avatar-2.jpg';
import avatar3 from '@assets/generated_images/avatar-3.jpg';
import avatar4 from '@assets/generated_images/avatar-4.jpg';

const REVIEWS = [
  {
    name: "Michael Chen",
    city: "Westside Heights",
    avatar: avatar1,
    text: "EliteRoof transformed our home. They were done in two days, left the yard spotless, and the new architectural shingles look incredible. Highly recommend their professional crew."
  },
  {
    name: "Sarah Jenkins",
    city: "Oakridge Estate",
    avatar: avatar2,
    text: "After a severe hail storm, I was stressed about insurance. EliteRoof stepped in, handled the adjuster completely, and got us a premium roof replacement fully covered. Life savers."
  },
  {
    name: "David & Emily Roth",
    city: "Pine Valley",
    avatar: avatar3,
    text: "You get what you pay for. We received cheaper quotes, but EliteRoof's presentation, materials, and warranty made it an easy choice. The peace of mind is worth every penny."
  },
  {
    name: "James Wilson",
    city: "Downtown District",
    avatar: avatar4,
    text: "We needed our commercial flat roof replaced urgently. Their commercial team mobilized fast, didn't disrupt our business operations, and delivered a flawless TPO installation."
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" className="py-32 bg-secondary gsap-section overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 gsap-fade-up">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
              What Our Customers Say
            </h3>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6">
            {REVIEWS.map((review, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6"
              >
                <div className="bg-card border border-white/5 p-8 rounded-2xl h-full relative">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                  
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-8 relative z-10">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h5 className="font-display font-bold text-white text-lg">{review.name}</h5>
                      <span className="text-sm text-muted-foreground">{review.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === selectedIndex ? 'w-8 bg-primary' : 'bg-white/20'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
