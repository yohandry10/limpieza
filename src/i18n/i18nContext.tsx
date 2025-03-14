import React, { createContext, useState, useContext, ReactNode } from 'react';
import esTranslations from './es.json';
import enTranslations from './en.json';
import frTranslations from './fr.json';

type Language = 'es' | 'en' | 'fr';

interface I18nContextType {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
  getNextLanguage: () => Language;
}

const translations = {
  es: esTranslations,
  en: enTranslations,
  fr: frTranslations
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1) Inicia en francés
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback a la key si no existe la traducción
        return key;
      }
    }
    return value;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  // 2) Orden de idiomas: fr -> en -> es
  const getNextLanguage = (): Language => {
    const languageOrder: Language[] = ['fr', 'en', 'es'];
    const currentIndex = languageOrder.indexOf(language);
    const nextIndex = (currentIndex + 1) % languageOrder.length;
    return languageOrder[nextIndex];
  };

  return (
    <I18nContext.Provider value={{ language, t, changeLanguage, getNextLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
