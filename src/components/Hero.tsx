import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen">
      <ParallaxBanner
        layers={[
          {
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
            speed: -20,
            opacity: [1, 0.8],
            scale: [1.1, 1, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
          }
        ]}
        className="h-screen"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Transformamos Espacios<br />
                <span className="text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  En Experiencias
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                Servicios profesionales de limpieza que elevan el estándar de calidad y confort en cada rincón
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="group px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
                >
                  <span className="relative z-10">Solicitar Cotización</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={800}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  <span className="relative z-10">Explorar Servicios</span>
                  <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20 cursor-pointer"
        >
          <Link to="services" smooth={true} duration={800}>
            <ChevronDown size={32} className="animate-bounce" />
          </Link>
        </motion.div>
      </ParallaxBanner>
    </section>
  );
};

export default Hero;