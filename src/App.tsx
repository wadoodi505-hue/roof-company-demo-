import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import StickyNav from '@/components/layout/StickyNav';
import FloatingElements from '@/components/layout/FloatingElements';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';
import EmergencyBanner from '@/components/sections/EmergencyBanner';

import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ProjectsPage from '@/pages/ProjectsPage';
import AboutPage from '@/pages/AboutPage';
import ReviewsPage from '@/pages/ReviewsPage';
import FAQPage from '@/pages/FAQPage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/not-found';

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const [location] = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  // Scroll progress bar (runs once globally)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });

    // Cursor spotlight
    const updateCursor = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateCursor);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Switch key={location} location={location}>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function MainLayout() {
  return (
    <ReactLenis root>
      <div className="relative bg-background text-foreground min-h-screen cursor-spotlight">
        <LoadingScreen />

        {/* Scroll progress bar */}
        <div
          id="scroll-progress"
          className="fixed top-0 left-0 h-[3px] w-full bg-gradient-to-r from-primary via-orange-400 to-primary z-[100] origin-left scale-x-0"
        />

        <EmergencyBanner />
        <StickyNav />

        <main>
          <AnimatedRoutes />
        </main>

        <Footer />
        <FloatingElements />
      </div>
    </ReactLenis>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <MainLayout />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
