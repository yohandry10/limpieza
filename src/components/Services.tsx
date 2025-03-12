import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Building2, Home, Construction, Shield, Clock, PenTool as Tool } from 'lucide-react';
import { ParallaxBanner } from 'react-scroll-parallax';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Limpieza Residencial',
    description: 'Servicio profesional de limpieza para hogares, adaptado a sus necesidades específicas.',
    image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80',
    features: ['Limpieza profunda', 'Desinfección completa', 'Productos ecológicos', 'Personal capacitado']
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Limpieza Comercial',
    description: 'Mantenimiento integral para oficinas y espacios comerciales.',
    image: 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?auto=format&fit=crop&q=80',
    features: ['Servicio 24/7', 'Equipos especializados', 'Planes personalizados', 'Certificaciones']
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Limpieza de Primavera',
    description: 'Limpieza profunda y renovación completa de espacios.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80',
    features: ['Limpieza intensiva', 'Organización', 'Renovación', 'Desinfección']
  },
  {
    icon: <Construction className="w-8 h-8" />,
    title: 'Post-Construcción',
    description: 'Limpieza especializada después de obras y renovaciones.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    features: ['Remoción de escombros', 'Limpieza profunda', 'Acabados finales', 'Certificación']
  }
];

const additionalFeatures = [
  {
    icon: <Shield />,
    title: 'Garantía de Calidad',
    description: 'Satisfacción garantizada en cada servicio'
  },
  {
    icon: <Clock />,
    title: 'Disponibilidad 24/7',
    description: 'Servicios de emergencia disponibles'
  },
  {
    icon: <Tool />,
    title: 'Equipos Profesionales',
    description: 'Tecnología de última generación'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <ParallaxBanner
        layers={[
          {
            children: (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 backdrop-blur-3xl" />
            ),
            speed: -5
          }
        ]}
        className="absolute inset-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones profesionales de limpieza diseñadas para superar sus expectativas
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-blue-600/90 backdrop-blur-sm p-2 rounded-xl">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Solicitar Servicio
            <Sparkles className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;