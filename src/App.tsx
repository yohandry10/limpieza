import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, useScroll, useSpring } from 'framer-motion';
import { I18nProvider } from './i18n/i18nContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WorkPlan from './components/WorkPlan';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <I18nProvider>
      <ParallaxProvider>
        <Toaster position="top-right" reverseOrder={false} />
        {/* Botón fijo inferior derecho: al hacer clic abre WhatsApp para enviar mensaje */}
        <a
          href="https://wa.me/4388709696"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-4 z-50"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-16 h-16" />
        </a>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform origin-left z-50"
          style={{ scaleX }}
        />
        <div className="min-h-screen snap-y snap-mandatory">
          <Navbar />
          <div className="snap-start">
            <Hero />
          </div>
          <div className="snap-start">
            <About />
          </div>
          <div className="snap-start">
            <Services />
          </div>
          <div className="snap-start">
            <WorkPlan />
          </div>
          <div className="snap-start">
            <Testimonials />
          </div>
          <div className="snap-start">
            <Contact />
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
    </I18nProvider>
  );
}

export default App;
