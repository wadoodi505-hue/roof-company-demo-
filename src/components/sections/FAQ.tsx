import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements are completed in just 1-2 days. Larger homes or complex rooflines may take up to 3 days. We always prioritize speed without sacrificing our strict quality standards, and we clean up the site entirely at the end of each work day."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide completely free, no-obligation comprehensive roof inspections and estimates. We'll examine your roof's condition, identify any issues, and provide a detailed written proposal outlining your options."
  },
  {
    question: "What roofing materials do you use?",
    answer: "We partner with top-tier manufacturers like GAF, Owens Corning, and CertainTeed. We install architectural asphalt shingles, standing seam metal roofing, concrete/clay tiles, and commercial flat roofing systems (TPO, EPDM)."
  },
  {
    question: "Does homeowners insurance cover roof damage?",
    answer: "If your roof was damaged by an act of nature (wind, hail, fallen trees), your homeowners insurance policy typically covers the replacement cost. We have specialized experts on staff who work directly with your adjuster to ensure your claim is handled fairly."
  },
  {
    question: "How do I know if I need a repair or full replacement?",
    answer: "Signs you may need a replacement include: curling or missing shingles, excessive granule loss (looks like sand in your gutters), ceiling leaks, or a roof age over 20 years. Our free inspection will give you an honest assessment—if a repair will buy you 5 more years safely, that's what we'll recommend."
  },
  {
    question: "Do you offer financing?",
    answer: "Yes, we offer multiple flexible financing options through our lending partners, including 0% interest plans for qualified buyers, and low monthly payment options stretching up to 120 months."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We carry comprehensive general liability insurance, workers' compensation for all our crews, and all necessary state and local licensing. We provide proof of insurance with every estimate."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Greater Metro area and surrounding suburbs within a 50-mile radius. If you're unsure if you fall in our service area, just give us a call."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background gsap-section">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-16 gsap-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions about your roof? We've got answers. Here are the most common things homeowners ask us before starting a project.
          </p>
        </div>

        <div className="gsap-fade-up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-white/5 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
