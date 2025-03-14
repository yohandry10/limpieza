import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useI18n } from '../i18n/i18nContext';
import emailjs from '@emailjs/browser';

// 1) Importamos react-hot-toast
import toast from 'react-hot-toast';

// 2) Importamos react-confetti + hook para medir la ventana
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Contact = () => {
  const { t } = useI18n();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Estado del formulario
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Controla la aparición de confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Obtenemos tamaño de la ventana para Confetti
  const { width, height } = useWindowSize();

  // Apagamos confetti tras 5 segundos
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  // ENVÍO DEL FORMULARIO VIA EMAILJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Envía el correo usando EmailJS
      const result = await emailjs.send(
        'service_x7jhu7n',   // Service ID
        'template_8qszfhl', // Template ID
        {
          name: formState.name,
          user_email: formState.email,
          phone: formState.phone,
          service: formState.service,
          message: formState.message,
          time: new Date().toLocaleString('es-ES') // Fecha/hora en español
        },
        '1Brvn8PTVUzjz4J0G'  // Public Key
      );

      console.log('Correo enviado:', result.text);
      // Mostramos toast de éxito
      toast.success('¡Mensaje enviado exitosamente!');
      // Activamos confetti
      setShowConfetti(true);

      // Limpiamos el formulario
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar correo:', error);
      toast.error('Ocurrió un error al enviar. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Confetti cuando showConfetti es true */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8A35B] to-[#C8A35B]/80">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-800">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-black/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-[#C8A35B]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/80 border border-gray-600 focus:ring-2 focus:ring-[#C8A35B] focus:border-transparent text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-gray-600 focus:ring-2 focus:ring-[#C8A35B] focus:border-transparent text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-gray-600 focus:ring-2 focus:ring-[#C8A35B] focus:border-transparent text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                  {t('contact.form.service')}
                </label>
                <select
                  id="service"
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/80 border border-gray-600 focus:ring-2 focus:ring-[#C8A35B] focus:border-transparent text-white"
                  required
                >
                  <option value="">{t('contact.form.selectService')}</option>
                  <option value="residencial">{t('contact.form.services.residential')}</option>
                  <option value="comercial">{t('contact.form.services.commercial')}</option>
                  <option value="primavera">{t('contact.form.services.spring')}</option>
                  <option value="construccion">{t('contact.form.services.construction')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black/80 border border-gray-600 focus:ring-2 focus:ring-[#C8A35B] focus:border-transparent text-white"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-black text-[#C8A35B] py-3 rounded-lg font-semibold flex items-center justify-center gap-2 border border-[#C8A35B] hover:bg-[#C8A35B] hover:text-black transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
                {t('contact.form.submit')}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:pl-12"
          >
            <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-8 text-white h-full border border-[#C8A35B]">
              <h3 className="text-2xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8A35B] to-[#C8A35B]/80">
                  {t('contact.info.title')}
                </span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.info.phone.title')}</h4>
                    <p className="text-gray-300">{t('contact.info.phone.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.info.email.title')}</h4>
                    <p className="text-gray-300">{t('contact.info.email.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.info.location.title')}</h4>
                    <p className="text-gray-300">{t('contact.info.location.value')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold mb-4">
                  {t('contact.info.hours.title')}
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>{t('contact.info.hours.weekdays')}</li>
                  <li>{t('contact.info.hours.saturday')}</li>
                  <li>{t('contact.info.hours.sunday')}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
