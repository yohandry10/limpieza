import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useI18n } from '../i18n/i18nContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Nuevo estado para determinar si estamos completamente en el top
  const [isAtTop, setIsAtTop] = useState(true);
  const { t, langue, changerLangue, getNextLangue } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      // Se actualiza a true solo si estamos en el top (offset 0)
      setIsAtTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { nom: t('navbar.home'), href: '#home' },
    { nom: t('navbar.services'), href: '#services' },
    { nom: t('navbar.testimonials'), href: '#testimonials' },
    { nom: t('navbar.contact'), href: '#contact' },
  ];

  const getNextLanguageFlag = () => {
    switch (langue) {
      case 'fr':
        return '/reino-unido.png'; // drapeau anglais
      case 'en':
        return '/francia.png'; // drapeau français
      default:
        return '/reino-unido.png';
    }
  };

  const getLanguageButtonText = () => {
    switch (langue) {
      case 'fr':
        return 'EN';
      case 'en':
        return 'FR';
      default:
        return 'EN';
    }
  };

  const handleLanguageChange = () => {
    const nextLang = getNextLangue();
    changerLangue(nextLang);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 bg-transparent transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Botón hamburguesa para móvil: se posiciona desde la derecha para no superponerse al logo */}
          <div className="md:hidden absolute right-8 inset-y-0 flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Logo: solo se muestra si estamos en el top */}
          {isAtTop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0 mx-auto md:ml-[-90px] lg:ml-[-150px]"
              style={{ width: 'auto', height: 'auto', overflow: 'visible' }}
            >
              <img
                src="/entretien.png"
                alt="Logo"
                className="h-48 w-64 object-contain"
                style={{ maxWidth: 'none', margin: 0 }}
              />
            </motion.div>
          )}
          {/* Menú de escritorio */}
          <div className="hidden md:flex absolute right-0 items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.nom}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-white hover:text-[#C8A35B] transition-colors duration-300"
              >
                {item.nom}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="relative inline-flex items-center space-2 px-4 py-2 rounded-full border border-[#C8A35B] bg-black text-[#C8A35B] overflow-hidden group transition-colors duration-300"
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
              <img src={getNextLanguageFlag()} alt="flag" className="w-5 h-5" />
              <span>{getLanguageButtonText()}</span>
            </motion.button>
          </div>
        </div>
      </div>
      {/* Menú móvil tipo “side-drawer” */}
      {isMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 max-w-sm h-screen bg-black/90 z-50 shadow-xl flex flex-col p-4"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>
            <div className="mt-8 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.nom}
                  href={item.href}
                  className="block text-white hover:text-[#C8A35B] text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.nom}
                </a>
              ))}
              <button
                className="relative w-full inline-flex items-center justify-center gap-2 border border-[#C8A35B] bg-black text-[#C8A35B] px-4 py-2 rounded-full overflow-hidden group transition-colors duration-300 mt-4"
              >
                <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
                  <PhoneCall size={18} />
                  <span className="ml-1">{t('navbar.callNow')}</span>
                </span>
                <span className="absolute inset-0 bg-[#C8A35B] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </button>
              <button
                onClick={() => {
                  handleLanguageChange();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full mt-2"
              >
                <img src={getNextLanguageFlag()} alt="flag-mobile" className="w-5 h-5" />
                <span>{getLanguageButtonText()}</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;
