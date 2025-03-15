import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-scroll';
import { useI18n } from '../i18n/i18nContext';

const Hero = () => {
  const { t } = useI18n();

  // Clase base para los botones con efecto de llenado
  const buttonClasses =
    "group relative inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#C8A35B] bg-black text-[#C8A35B] overflow-hidden transition-colors duration-300 transform hover:scale-105";

  return (
    <section id="home" className="relative h-screen">
      <ParallaxBanner
        layers={[
          {
            image:
              'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
            speed: -20,
            opacity: [1, 0.8],
            scale: [1.1, 1, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
          },
        ]}
        className="h-screen"
      >
        {/* Fondo con degradado oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />

        {/* Contenedor del contenido del Hero:
            En móviles se alinea al inicio y se le aplica un padding-top para bajarlo.
            En pantallas medianas o superiores se centra verticalmente */}
        <div className="absolute inset-0 flex flex-col items-center justify-start md:justify-center z-20 pt-36 md:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* H1 con el subtítulo */}
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                <span className="text-white">{t('hero.subtitle')}</span>
              </h1>

              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light">
                {t('about.description')}
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
                  className={buttonClasses}
                >
                  <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
                    {t('contact.title')}
                  </span>
                  <span className="absolute inset-0 bg-[#C8A35B] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </Link>

                <Link
                  to="services"
                  smooth={true}
                  duration={800}
                  className={buttonClasses}
                >
                  <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
                    {t('services.title')}
                  </span>
                  <span className="absolute inset-0 bg-[#C8A35B] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
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
