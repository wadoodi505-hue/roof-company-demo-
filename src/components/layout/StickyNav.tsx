import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? location === '/' : location.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-[44px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileOpen
            ? 'bg-background/95 backdrop-blur-md border-b border-white/8 py-4 shadow-2xl shadow-black/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0 cursor-pointer">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm rotate-45 transition-transform group-hover:rotate-90 duration-500">
              <div className="w-4 h-4 border-2 border-white -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
            </div>
            <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-white">
              EliteRoof<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors group cursor-pointer ${
                  isActive(link.href) ? 'text-primary' : 'text-white/75 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors group"
            >
              <div className="bg-white/10 group-hover:bg-primary/20 p-2 rounded-full transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm hidden xl:block">800-555-1234</span>
            </a>
            <Link href="/contact" className="cursor-pointer">
              <Button className="bg-primary hover:bg-orange-500 text-white font-bold h-10 px-5 rounded-md uppercase tracking-wider text-xs shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                Free Estimate
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] group focus:outline-none"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block w-6 h-[2px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block w-6 h-[2px] bg-white rounded-full origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col lg:hidden"
          >
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

            {/* Orange accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent shrink-0" />

            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0">
              <Link href="/" className="flex items-center gap-2 cursor-pointer">
                <div className="w-7 h-7 bg-primary flex items-center justify-center rounded-sm rotate-45">
                  <div className="w-3.5 h-3.5 border-2 border-white -rotate-45" />
                </div>
                <span className="text-xl font-display font-bold text-white">
                  EliteRoof<span className="text-primary">.</span>
                </span>
              </Link>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-4 text-4xl font-display font-bold border-b border-white/5 transition-all duration-300 cursor-pointer ${
                        isActive(link.href)
                          ? 'text-primary pl-4 border-primary/30'
                          : 'text-white/80 hover:text-white hover:pl-4'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {isActive(link.href) && (
                          <motion.span
                            layoutId="active-mobile"
                            className="block w-2 h-2 rounded-full bg-primary shrink-0"
                          />
                        )}
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="px-8 pb-10 pt-6 space-y-3 border-t border-white/5 shrink-0"
            >
              <Link href="/contact" className="cursor-pointer block">
                <button className="w-full bg-primary hover:bg-orange-500 text-white font-bold h-14 rounded-xl uppercase tracking-wider text-sm transition-all shadow-lg shadow-primary/25">
                  Get Free Estimate
                </button>
              </Link>
              <a
                href="tel:+18005551234"
                className="flex items-center justify-center gap-3 w-full border border-white/15 hover:border-primary/50 text-white rounded-xl h-14 font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                Call 800-555-1234
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
