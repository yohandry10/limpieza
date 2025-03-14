import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Lightbulb, Trophy, Users, CheckCircle2, Leaf, Shield, Clock, PenTool as Tool, Heart } from 'lucide-react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useI18n } from '../i18n/i18nContext';

const About = () => {
  const { t } = useI18n();
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
            {/* Misión */}
            <motion.div
              variants={fadeInUp}
              className="group bg-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-[#C8A35B]"
            >
              <div className="bg-gradient-to-br from-[#C8A35B]/20 to-[#C8A35B]/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-[#C8A35B]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              variants={fadeInUp}
              className="group bg-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-[#C8A35B]"
            >
              <div className="bg-gradient-to-br from-[#C8A35B]/20 to-[#C8A35B]/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-[#C8A35B]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              variants={fadeInUp}
              className="group bg-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-[#C8A35B]"
            >
              <div className="bg-gradient-to-br from-[#C8A35B]/20 to-[#C8A35B]/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-[#C8A35B]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.values.title')}
              </h3>
              <ul className="text-gray-300 space-y-3">
                {[
                  t('about.values.excellence'),
                  t('about.values.environment'),
                  t('about.values.integrity'),
                  t('about.values.innovation')
                ].map((value, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A35B] flex-shrink-0" />
                    <span className="leading-relaxed">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Por qué elegirnos */}
          <motion.div variants={fadeInUp} className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8A35B] to-[#C8A35B]/80">
                {t('about.whyChooseUs.title')}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: t('about.whyChooseUs.experience.title'),
                  description: t('about.whyChooseUs.experience.description')
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: t('about.whyChooseUs.certifiedStaff.title'),
                  description: t('about.whyChooseUs.certifiedStaff.description')
                },
                {
                  icon: <Leaf className="w-6 h-6" />,
                  title: t('about.whyChooseUs.ecoProducts.title'),
                  description: t('about.whyChooseUs.ecoProducts.description')
                },
                {
                  icon: <Tool className="w-6 h-6" />,
                  title: t('about.whyChooseUs.advancedTech.title'),
                  description: t('about.whyChooseUs.advancedTech.description')
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: t('about.whyChooseUs.customService.title'),
                  description: t('about.whyChooseUs.customService.description')
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: t('about.whyChooseUs.attention247.title'),
                  description: t('about.whyChooseUs.attention247.description')
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-black/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C8A35B]/50 hover:bg-gradient-to-br hover:from-black hover:to-[#C8A35B]/10"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#C8A35B]/20 p-3 rounded-xl text-[#C8A35B] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
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
