import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const CITIES = [
  "Metro City", "North Hills", "Southpoint", "West End", 
  "Eastside", "Oakridge", "Pine Valley", "Riverview",
  "Highland Park", "Lakewood", "Springfield", "Crestview",
  "Maplewood", "Sunset Ridge", "Downtown District"
];

export default function ServiceArea() {
  return (
    <section className="py-24 bg-background gsap-section border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="gsap-fade-up">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Coverage Area</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Serving the Greater <br/>Metro Area
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We proudly provide elite roofing services across the entire metropolitan region. Our localized crews mean faster response times for emergencies and a deep understanding of local building codes.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {CITIES.map((city, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 rounded-full bg-card border border-white/5 text-white/80 text-sm flex items-center gap-2 hover:border-primary/50 hover:text-white transition-colors cursor-default"
                >
                  <MapPin className="w-3 h-3 text-primary" />
                  {city}
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Map Placeholder */}
          <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-card border border-white/10 flex items-center justify-center p-8 gsap-fade-up">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="relative w-full h-full border border-primary/20 rounded-xl bg-background/50 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
              <div className="absolute top-1/4 left-1/4">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <MapPin className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
              <div className="absolute bottom-1/3 right-1/4">
                <MapPin className="w-6 h-6 text-primary/50" />
              </div>
              <div className="absolute top-1/2 right-1/3">
                <MapPin className="w-5 h-5 text-primary/30" />
              </div>
              <div className="text-center z-10 bg-card p-4 rounded-xl border border-white/10 shadow-2xl">
                <h4 className="font-display font-bold text-white text-lg">Central Hub</h4>
                <p className="text-sm text-muted-foreground">Rapid response units dispatched instantly.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
