import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    whitelist: ['en', 'de'],
    fallbackLng: 'en',
    resources: {
      en: { translation: require('./en/translation.json') },
      de: { translation: require('./de/translation.json') },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
