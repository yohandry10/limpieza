import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const workItems = [
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

const WorkPlan = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="work-plan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Plan de Trabajo</h2>
          <p className="text-xl text-gray-600">Nuestro proceso detallado para una limpieza impecable</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="ml-4 text-gray-700">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkPlan;