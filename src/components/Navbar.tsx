import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useI18n } from '../i18n/i18nContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, changeLanguage, getNextLanguage } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.services'), href: '#services' },
    { name: t('navbar.testimonials'), href: '#testimonials' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  const getNextLanguageFlag = () => {
    switch (language) {
      case 'fr':
        return '/reino-unido.png';
      case 'en':
        return '/mundo.png';
      case 'es':
        return '/francia.png';
      default:
        return '/reino-unido.png';
    }
  };

  const getLanguageButtonText = () => {
    switch (language) {
      case 'fr':
        return 'EN';
      case 'en':
        return 'ES';
      case 'es':
        return 'FR';
      default:
        return 'EN';
    }
  };

  const handleLanguageChange = () => {
    const nextLang = getNextLanguage();
    changeLanguage(nextLang);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo más grande y centrado en móviles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 md:-ml-12 mx-auto md:mx-0" // Centrado en móviles
          >
            <img
              src="/entretien.png"
              alt="Logo"
              className="h-24 w-32 md:h-20 md:w-28 rounded-full object-cover" // Tamaño aumentado en móviles
            />
          </motion.div>

          {/* Menú desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className={`${
                    scrolled ? 'text-gray-900' : 'text-white'
                  } hover:text-[#C8A35B] transition-colors duration-300`}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8A35B] bg-black text-[#C8A35B] overflow-hidden group transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
                  <PhoneCall size={18} />
                  <span className="ml-1">{t('navbar.callNow')}</span>
                </span>
                <span className="absolute inset-0 bg-[#C8A35B] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleLanguageChange}
                className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-full"
              >
                <img
                  src={getNextLanguageFlag()}
                  alt="flag"
                  className="w-5 h-5"
                />
                <span>{getLanguageButtonText()}</span>
              </motion.button>
            </div>
          </div>

          {/* Botón Hamburguesa (móvil) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil tipo “side-drawer” */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-screen bg-white z-50 shadow-xl flex flex-col p-4"
            >
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="mt-8 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-900 hover:text-[#C8A35B] text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                <button className="relative w-full inline-flex items-center justify-center gap-2 border border-[#C8A35B] bg-black text-[#C8A35B] px-4 py-2 rounded-full overflow-hidden group transition-colors duration-300 mt-4">
                  <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
                    <PhoneCall size={18} />
                    <span className="ml-1">{t('navbar.callNow')}</span>
                  </span>
                  <span className="absolute inset-0 bg-[#C8A35B] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </button>

                <button
                  onClick={() => {
                    handleLanguageChange();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full mt-2"
                >
                  <img
                    src={getNextLanguageFlag()}
                    alt="flag-mobile"
                    className="w-5 h-5"
                  />
                  <span>{getLanguageButtonText()}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;