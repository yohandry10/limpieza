import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo modificado para mostrarse completo y sin forma ovalada */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden border-2 border-[#C8A35B] w-64">
              <img
                src="/entretien.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Si el logo incluye un lema que debe ser legible, se puede colocar aquí */}
          
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C8A35B]">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C8A35B] transition-colors"
                >
                  Limpieza Residencial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C8A35B] transition-colors"
                >
                  Limpieza Comercial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C8A35B] transition-colors"
                >
                  Limpieza de Primavera
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C8A35B] transition-colors"
                >
                  Post-Construcción
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C8A35B]">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C8A35B] transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C8A35B] transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C8A35B] transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#C8A35B] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C8A35B]">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61573824164412"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-14 h-14 border-2 border-[#C8A35B] rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-black z-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <Facebook
                  strokeWidth={1.5}
                  stroke="#C8A35B"
                  fill="none"
                  className="relative z-10 w-8 h-8 transition-colors duration-300"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/entretien.menager0/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-14 h-14 border-2 border-[#C8A35B] rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-black z-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <Instagram
                  strokeWidth={1.5}
                  stroke="#C8A35B"
                  fill="none"
                  className="relative z-10 w-8 h-8 transition-colors duration-300"
                />
              </a>

              {/* Twitter (seguir usando # o colocar otro link si lo deseas) */}
              <a
                href="#"
                className="group relative inline-flex items-center justify-center w-14 h-14 border-2 border-[#C8A35B] rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-black z-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <Twitter
                  strokeWidth={1.5}
                  stroke="#C8A35B"
                  fill="none"
                  className="relative z-10 w-8 h-8 transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
