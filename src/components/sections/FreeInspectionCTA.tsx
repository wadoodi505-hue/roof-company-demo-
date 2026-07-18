import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function FreeInspectionCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background gsap-section">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-primary/5" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #F97316 0, #F97316 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center border border-white/10 bg-card/50 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl shadow-primary/5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-8 border border-primary/20">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Get Your <span className="text-primary">Free Roof Inspection</span> Today
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            No obligation. No hard selling. Just a detailed, honest assessment of your roof's condition by certified professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-bold bg-primary hover:bg-orange-500 text-white rounded-md shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all group cursor-pointer"
              >
                Schedule Inspection 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline"
              size="lg" 
              className="h-14 px-8 text-base font-bold border-white/20 hover:bg-white/10 text-white rounded-md bg-transparent backdrop-blur-sm"
              asChild
            >
              <a href="tel:+18005551234">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
