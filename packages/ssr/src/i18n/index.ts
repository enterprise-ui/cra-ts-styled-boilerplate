import i18n from 'i18next';
import { LanguageDetector } from 'i18next-express-middleware';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector);

export default i18n;
