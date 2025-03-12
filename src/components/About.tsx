import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Lightbulb, Trophy, Users, CheckCircle2, Leaf, Shield, Clock, PenTool as Tool, Heart } from 'lucide-react';
import { ParallaxBanner } from 'react-scroll-parallax';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <ParallaxBanner
        layers={[
          {
            image: 'https://images.unsplash.com/photo-1587578016785-bea53a782ea8?auto=format&fit=crop&q=80',
            speed: -15,
            opacity: [0.15, 0.15],
            scale: [1.05, 1, 'easeOutCubic'],
          }
        ]}
        className="absolute inset-0"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="space-y-20"
        >
          {/* Misión, Visión, Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="group bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-blue-50"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar servicios de limpieza excepcionales que transformen espacios y mejoren la calidad de vida de nuestros clientes, utilizando productos ecológicos y tecnologías innovadoras.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-blue-50"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Visión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como líderes en la industria de limpieza profesional, destacando por nuestra excelencia, innovación y compromiso con la satisfacción del cliente.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-blue-50"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Valores
              </h3>
              <ul className="text-gray-600 space-y-3">
                {[
                  'Excelencia en el servicio',
                  'Compromiso ambiental',
                  'Integridad profesional',
                  'Innovación constante'
                ].map((value, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="leading-relaxed">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Por qué elegirnos */}
          <motion.div
            variants={fadeInUp}
            className="mt-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">
                ¿Por qué elegirnos?
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Experiencia Comprobada",
                  description: "Más de una década transformando espacios en toda la región."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Personal Certificado",
                  description: "Equipo profesional con formación continua y certificaciones."
                },
                {
                  icon: <Leaf className="w-6 h-6" />,
                  title: "Productos Ecológicos",
                  description: "Comprometidos con el medio ambiente y su salud."
                },
                {
                  icon: <Tool className="w-6 h-6" />,
                  title: "Tecnología Avanzada",
                  description: "Equipos y métodos de última generación."
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Servicio Personalizado",
                  description: "Soluciones adaptadas a sus necesidades específicas."
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Atención 24/7",
                  description: "Siempre disponibles cuando nos necesite."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;