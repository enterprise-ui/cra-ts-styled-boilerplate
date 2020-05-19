export default {
  whitelist: ['en', 'de'],
  fallbackLng: 'en',
  resources: {
    en: { translation: require('./en/translation.json') },
    de: { translation: require('./de/translation.json') },
  },
  interpolation: {
    escapeValue: false,
  },
};
