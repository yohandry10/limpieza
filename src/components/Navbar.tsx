import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Función que selecciona la bandera según el próximo idioma
  const getNextLanguageFlag = () => {
    switch (language) {
      case 'fr':
        // Estamos en francés, el siguiente es inglés => bandera Reino Unido
        return '/reino-unido.png';
      case 'en':
        // Estamos en inglés, el siguiente es español => bandera “mundo”
        return '/mundo.png';
      case 'es':
        // Estamos en español, el siguiente es francés => bandera Francia
        return '/francia.png';
      default:
        return '/reino-unido.png'; // fallback
    }
  };

  // Texto del botón de idioma (próximo idioma)
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            {/* Logo ovalado */}
            <img
              src="/entretien.png"
              alt="Logo"
              className="h-16 w-24 rounded-full object-cover"
            />
          </motion.div>

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

              {/* Botón LLAMAR AHORA con traducción */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8A35B] bg-black text-[#C8A35B] overflow-hidden group transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
                  <PhoneCall size={18} />
                  <span className="ml-1">{t('navbar.callNow')}</span>
                </span>
                <span
                  className="absolute inset-0 bg-[#C8A35B] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                />
              </motion.button>

              {/* Botón de idioma con bandera */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleLanguageChange}
                className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-full"
              >
                {/* Bandera del próximo idioma */}
                <img
                  src={getNextLanguageFlag()}
                  alt="flag"
                  className="w-5 h-5"
                />
                {/* Texto del próximo idioma */}
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

      {/* Menú móvil */}
      <MobileMenu
        isOpen={isOpen}
        navItems={navItems}
        callNowText={t('navbar.callNow')}
        getNextLanguageFlag={getNextLanguageFlag}
        getLanguageButtonText={getLanguageButtonText}
        handleLanguageChange={handleLanguageChange}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
};

// Subcomponente para el menú móvil
const MobileMenu = ({
  isOpen,
  navItems,
  callNowText,
  getNextLanguageFlag,
  getLanguageButtonText,
  handleLanguageChange,
  onClose
}: {
  isOpen: boolean;
  navItems: { name: string; href: string }[];
  callNowText: string;
  getNextLanguageFlag: () => string;
  getLanguageButtonText: () => string;
  handleLanguageChange: () => void;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
      className="md:hidden bg-white"
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-gray-900 hover:text-[#C8A35B]"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}

        {/* Botón LLAMAR AHORA (móvil) */}
        <button className="relative w-full inline-flex items-center justify-center gap-2 border border-[#C8A35B] bg-black text-[#C8A35B] px-4 py-2 rounded-full overflow-hidden group transition-colors duration-300 mt-4">
          <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
            <PhoneCall size={18} />
            <span className="ml-1">{callNowText}</span>
          </span>
          <span className="absolute inset-0 bg-[#C8A35B] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        </button>

        {/* Botón de idioma móvil con bandera */}
        <button
          onClick={() => {
            handleLanguageChange();
            onClose();
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
  );
};

export default Navbar;
