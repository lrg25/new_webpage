import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import translationCA from './locales/ca/translation.json';

// the translations
const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  },
  ca: {
    translation: translationCA
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;