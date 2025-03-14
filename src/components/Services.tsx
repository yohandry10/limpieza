import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Building2, Home, Construction, Shield, Clock, PenTool as Tool } from 'lucide-react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useI18n } from '../i18n/i18nContext';

const Services = () => {
  const { t } = useI18n();

  // Características de cada servicio
  const residentialFeatures = [
    t('services.residential.features.0'),
    t('services.residential.features.1'),
    t('services.residential.features.2'),
    t('services.residential.features.3')
  ];
  const commercialFeatures = [
    t('services.commercial.features.0'),
    t('services.commercial.features.1'),
    t('services.commercial.features.2'),
    t('services.commercial.features.3')
  ];
  const springFeatures = [
    t('services.spring.features.0'),
    t('services.spring.features.1'),
    t('services.spring.features.2'),
    t('services.spring.features.3')
  ];
  const postConstructionFeatures = [
    t('services.postConstruction.features.0'),
    t('services.postConstruction.features.1'),
    t('services.postConstruction.features.2'),
    t('services.postConstruction.features.3')
  ];

  // Array de servicios
  const services = [
    {
      icon: <Home className="w-8 h-8 text-[#C8A35B]" />,
      title: t('services.residential.title'),
      description: t('services.residential.description'),
      image: '/residencial.webp',
      features: residentialFeatures
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#C8A35B]" />,
      title: t('services.commercial.title'),
      description: t('services.commercial.description'),
      image: '/comercial.webp',
      features: commercialFeatures
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#C8A35B]" />,
      title: t('services.spring.title'),
      description: t('services.spring.description'),
      image: '/primavera.webp',
      features: springFeatures
    },
    {
      icon: <Construction className="w-8 h-8 text-[#C8A35B]" />,
      title: t('services.postConstruction.title'),
      description: t('services.postConstruction.description'),
      image: '/construccion.webp',
      features: postConstructionFeatures
    }
  ];

  // Características adicionales
  const additionalFeatures = [
    {
      icon: <Shield className="text-[#C8A35B]" />,
      title: t('services.guarantees.qualityGuarantee'),
      description: t('services.guarantees.qualityDescription')
    },
    {
      icon: <Clock className="text-[#C8A35B]" />,
      title: t('services.guarantees.availability'),
      description: t('services.guarantees.availabilityDescription')
    },
    {
      icon: <Tool className="text-[#C8A35B]" />,
      title: t('services.guarantees.equipment'),
      description: t('services.guarantees.equipmentDescription')
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Parallax sin Unsplash */}
      <ParallaxBanner
        layers={[
          {
            image: '/construccion.webp', // Reemplaza con la imagen local que prefieras
            speed: -15,
            opacity: [0.15, 0.15],
            scale: [1.05, 1, 'easeOutCubic']
          }
        ]}
        className="absolute inset-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado: Título y subtítulo */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8A35B] to-[#C8A35B]/80">
                {t('services.title')}
              </span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Tarjetas de servicios */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-[#C8A35B]"
              >
                {/* Imagen superior */}
                <div className="relative h-40 w-full mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-black/70 p-2 rounded-xl">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Sparkles className="w-4 h-4 text-[#C8A35B] mr-2" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Características adicionales */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-black/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C8A35B]/50 hover:bg-gradient-to-br hover:from-black hover:to-[#C8A35B]/10"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="bg-[#C8A35B]/20 p-3 rounded-xl text-[#C8A35B] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón CTA final */}
          <motion.div variants={itemVariants} className="text-center mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 bg-black text-[#C8A35B] rounded-full text-lg font-semibold overflow-hidden relative transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
                {t('services.guarantees.requestService')}
                <Sparkles className="ml-2 w-5 h-5" />
              </span>
              <span className="absolute inset-0 bg-[#C8A35B] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
