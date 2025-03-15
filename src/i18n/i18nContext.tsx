import React, { createContext, useState, useContext, ReactNode } from 'react';
import enTranslations from './en.json';
import frTranslations from './fr.json';

type Langue = 'fr' | 'en';

interface I18nContextType {
  langue: Langue;
  t: (clé: string) => string;
  changerLangue: (lang: Langue) => void;
  getNextLangue: () => Langue;
}

const traductions = {
  en: enTranslations,
  fr: frTranslations,
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1) Démarrer en français
  const [langue, setLangue] = useState<Langue>('fr');

  const t = (clé: string): string => {
    const keys = clé.split('.');
    let valeur: any = traductions[langue];
    for (const k of keys) {
      if (valeur && valeur[k]) {
        valeur = valeur[k];
      } else {
        // Retourner la clé si la traduction n'existe pas
        return clé;
      }
    }
    return valeur;
  };

  const changerLangue = (lang: Langue) => {
    setLangue(lang);
  };

  // 2) Ordre des langues : fr -> en
  const getNextLangue = (): Langue => {
    const ordreLangues: Langue[] = ['fr', 'en'];
    const currentIndex = ordreLangues.indexOf(langue);
    const nextIndex = (currentIndex + 1) % ordreLangues.length;
    return ordreLangues[nextIndex];
  };

  return (
    <I18nContext.Provider value={{ langue, t, changerLangue, getNextLangue }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n doit être utilisé dans un I18nProvider');
  }
  return context;
};
