import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import id from './resources/id.json';
import en from './resources/en.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('id'),
  init: () => {},
  cacheUserLanguage: () => {},
};

const resources = {
  id,
  en,
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['id', 'en'],
    resources,
    compatibilityJSON: 'v2',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18next;
