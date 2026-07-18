import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle BG pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm rotate-45">
                <div className="w-4 h-4 border-2 border-white -rotate-45" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-white">EliteRoof<span className="text-primary">.</span></span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Premium roofing solutions protecting homes and businesses with guaranteed quality, fast response times, and honest pricing.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Projects', 'Customer Reviews', 'Financing', 'Insurance Claims', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Residential Roofing', 'Commercial Roofing', 'Roof Replacement', 'Roof Repair', 'Storm Damage Repair', 'Metal Roofing', 'Gutters & Siding'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>1234 Premium Ave, Suite 100<br/>Metro City, ST 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:8005551234" className="hover:text-white transition-colors">1-800-555-1234</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@eliteroof.com" className="hover:text-white transition-colors">info@eliteroof.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Mon-Sat: 7:00 AM - 7:00 PM<br/>Sun: Closed (24/7 Emergencies)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EliteRoof Co. All rights reserved. License #C39-123456
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
