import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import { useI18n } from '../i18n/i18nContext';

const WorkPlan = () => {
  const { t } = useI18n();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Obtener los pasos del plan de trabajo desde las traducciones
  const translatedSteps = t('workplan.steps');
  const workItems: string[] =
    Array.isArray(translatedSteps) ? translatedSteps : [
      'Limpieza de ventanas',
      'Limpieza de marcos y molduras',
      'Limpieza y desinfección de baños',
      'Limpieza interior/exterior de armarios',
      'Limpieza completa de cocina',
      'Limpieza de electrodomésticos',
      'Limpieza de paredes y techos',
      'Limpieza de alfombras',
      'Limpieza de persianas',
      'Limpieza de puertas',
      'Limpieza de muebles tapizados',
      'Desempolvado completo',
      'Aspiración de suelos',
      'Limpieza de escaleras'
    ];

  return (
    <section id="work-plan" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8A35B] to-[#C8A35B]/80">
              {t('workplan.title')}
            </span>
          </h2>
          {/* Subtítulo en gris oscuro */}
          <p className="text-xl text-gray-800">
            {t('workplan.subtitle')}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workItems.map((item: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group bg-black/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-colors duration-300 border border-[#C8A35B]/50 hover:bg-gradient-to-br hover:from-black hover:to-[#C8A35B]/10 flex items-center"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#C8A35B]/20 rounded-full flex items-center justify-center text-[#C8A35B] group-hover:scale-110 transition-transform duration-300">
                <Check className="w-5 h-5" />
              </div>
              <span className="ml-4 text-gray-300 leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkPlan;
