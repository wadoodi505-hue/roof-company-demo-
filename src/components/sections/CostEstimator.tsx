import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CostEstimator() {
  const [size, setSize] = useState('1500');
  const [material, setMaterial] = useState('asphalt');

  // Simple pricing logic for the demo
  const getEstimate = () => {
    let baseRate = 0;
    if (material === 'asphalt') baseRate = 4.5;
    if (material === 'metal') baseRate = 9;
    if (material === 'tile') baseRate = 12;
    if (material === 'flat') baseRate = 6;

    const sqFt = parseInt(size);
    const low = sqFt * baseRate;
    const high = sqFt * baseRate * 1.3;

    return {
      low: low.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
      high: high.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    };
  };

  const estimate = getEstimate();

  return (
    <section className="py-24 bg-secondary gsap-section">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="gsap-fade-up">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-6">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Instant Roof Cost <br/>Estimator
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Curious about the cost? Use our interactive tool to get a ballpark estimate for your roof replacement instantly. No email required.
            </p>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Actual costs may vary based on pitch, accessibility, and tear-off.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Includes labor, materials, and standard warranties.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Contact us for an exact, written proposal.
              </li>
            </ul>
          </div>

          <div className="gsap-fade-up">
            <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="space-y-8 relative z-10">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white uppercase tracking-wider">Home Size (Square Feet)</label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger className="w-full h-14 bg-background/50 border-white/10 text-white text-lg">
                      <SelectValue placeholder="Select home size" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-white/10">
                      <SelectItem value="1000">Under 1,000 sq ft</SelectItem>
                      <SelectItem value="1500">1,000 - 2,000 sq ft</SelectItem>
                      <SelectItem value="2500">2,000 - 3,000 sq ft</SelectItem>
                      <SelectItem value="3500">Over 3,000 sq ft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white uppercase tracking-wider">Material Type</label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger className="w-full h-14 bg-background/50 border-white/10 text-white text-lg">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-white/10">
                      <SelectItem value="asphalt">Architectural Asphalt Shingles</SelectItem>
                      <SelectItem value="metal">Standing Seam Metal</SelectItem>
                      <SelectItem value="tile">Concrete / Clay Tile</SelectItem>
                      <SelectItem value="flat">Commercial Flat (TPO/EPDM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm font-medium text-muted-foreground text-center mb-2">Estimated Price Range</p>
                  <motion.div 
                    key={`${size}-${material}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-4xl md:text-5xl font-display font-bold text-center text-primary"
                  >
                    {estimate.low} <span className="text-white/50 text-3xl mx-2">-</span> {estimate.high}
                  </motion.div>
                </div>
                
                <Link href="/contact" className="block mt-4">
                  <button className="w-full bg-white text-background hover:bg-gray-100 font-bold h-14 rounded-md uppercase tracking-wider transition-colors cursor-pointer">
                    Get Exact Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
