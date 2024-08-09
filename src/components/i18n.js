// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {clientDataEN,blogDataEN,serviceDataEN} from './locales/en/translation';
import {clientDataFr,blogDataFR,serviceDataFR} from './locales/fr/translation';
import { clientDataAR,blogDataAR,serviceDataAR} from './locales/ar/translation';
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: clientDataEN,blogDataEN,serviceDataEN
      },
      fr: {
        translation: clientDataFr,blogDataFR,serviceDataFR
      },
      ar:{
        translation:clientDataAR,blogDataAR,serviceDataAR
      }
    },
    fallbackLng: 'en', // Default language if detection fails
    interpolation: {
      escapeValue: false, // React already safely escapes values
    },
  });

export default i18n;
