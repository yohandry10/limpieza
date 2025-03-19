import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useI18n } from '../i18n/i18nContext';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Contact = () => {
  const { t } = useI18n();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({
    nom: '', // Nombre en francés
    email: '',
    telephone: '', // Teléfono en francés
    service: '',
    message: '',
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_x7jhu7n',
        'template_8qszfhl',
        {
          nom: formState.nom, // Nombre en francés
          user_email: formState.email,
          telephone: formState.telephone, // Teléfono en francés
          service: formState.service,
          message: formState.message,
          heure: new Date().toLocaleString('fr-FR'), // Fecha/hora en francés
        },
        '1Brvn8PTVUzjz4J0G'
      );
      console.log('Email envoyé:', result.text);
      toast.success(t('contact.form.sendSuccess')); // Mensaje de éxito en francés
      setShowConfetti(true);
      setFormState({
        nom: '', // Reiniciar el formulario
        email: '',
        telephone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      toast.error(t('contact.form.sendError')); // Mensaje de error en francés
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {showConfetti && <Confetti width={width} height={height} numberOfPieces={300} recycle={false} />}
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
              {t('contact.title')} {/* Título en francés */}
            </span>
          </h2>
          <p className="text-xl text-gray-800">{t('contact.subtitle')}</p> {/* Subtítulo en francés */}
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
                <label htmlFor="nom" className="block text-sm font-medium text-white mb-2">
                  {t('contact.name')} {/* Nombre en francés */}
                </label>
                <input
                  type="text"
                  id="nom"
                  value={formState.nom}
                  onChange={(e) => setFormState({ ...formState, nom: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/80 border border-gray-600 focus:ring-2 focus:ring-[#C8A35B] focus:border-transparent text-white"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {t('contact.email')} {/* Correo electrónico en francés */}
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
                  <label htmlFor="telephone" className="block text-sm font-medium text-white mb-2">
                    {t('contact.phone')} {/* Teléfono en francés */}
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    value={formState.telephone}
                    onChange={(e) => setFormState({ ...formState, telephone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-gray-600 focus:ring-2 focus:ring-[#C8A35B] focus:border-transparent text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                  {t('contact.service')} {/* Servicio en francés */}
                </label>
                <select
                  id="service"
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/80 border border-gray-600 focus:ring-2 focus:ring-[#C8A35B] focus:border-transparent text-white"
                  required
                >
                  <option value="">{t('contact.selectService')}</option> {/* Seleccionar servicio en francés */}
                  <option value="residential">{t('services.residential.title')}</option>
                  <option value="commercial">{t('services.commercial.title')}</option>
                  <option value="spring">{t('services.spring.title')}</option>
                  <option value="postConstruction">{t('services.postConstruction.title')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  {t('contact.message')} {/* Mensaje en francés */}
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
                className="w-full bg-black text-[#C8A35B] py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 border border-[#C8A35B] hover:bg-[#C8A35B] hover:text-black transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
                {t('contact.send')} {/* Enviar en francés */}
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
                  {t('contact.contactInfo.title')} {/* Información de contacto en francés */}
                </span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.contactInfo.phone')}</h4>
                    <p className="text-gray-300">{t('contact.contactInfo.phoneNumber')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.contactInfo.email')}</h4>
                    <p className="text-gray-300">{t('contact.contactInfo.emailAddress')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.contactInfo.location')}</h4>
                    <p className="text-gray-300">{t('contact.contactInfo.locationDetails')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="font-semibold mb-4">{t('contact.contactInfo.hours')}</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>{t('contact.contactInfo.hoursDetails.0')}</li>
                  <li>{t('contact.contactInfo.hoursDetails.1')}</li>
                  <li>{t('contact.contactInfo.hoursDetails.2')}</li>
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