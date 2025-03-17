import React from 'react';
import { useI18n } from '../i18n/i18nContext';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden w-64">
              <img src="/defi.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          {/* Sección de Servicios */}
          <div>
            <h4>{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C8A35B] transition-colors">
                  {t('footer.services.residential')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C8A35B] transition-colors">
                  {t('footer.services.commercial')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C8A35B] transition-colors">
                  {t('footer.services.spring')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C8A35B] transition-colors">
                  {t('footer.services.postConstruction')}
                </a>
              </li>
            </ul>
          </div>
          {/* Sección de Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C8A35B]">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C8A35B] transition-colors">
                  {t('footer.quickLinks.home')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C8A35B] transition-colors">
                  {t('footer.quickLinks.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C8A35B] transition-colors">
                  {t('footer.quickLinks.testimonials')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C8A35B] transition-colors">
                  {t('footer.quickLinks.contact')}
                </a>
              </li>
            </ul>
          </div>
          {/* Sección de Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C8A35B]">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61573824164412"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-14 h-14 rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-black z-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <Facebook strokeWidth={1.5} stroke="#C8A35B" fill="none" className="relative z-10 w-8 h-8 transition-colors duration-300" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/entretien.menager0/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-14 h-14 rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-black z-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <Instagram strokeWidth={1.5} stroke="#C8A35B" fill="none" className="relative z-10 w-8 h-8 transition-colors duration-300" />
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="relative inline-flex items-center justify-center w-14 h-14 rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-black z-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <Twitter strokeWidth={1.5} stroke="#C8A35B" fill="none" className="relative z-10 w-8 h-8 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
        {/* Pie de página */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
