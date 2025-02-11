import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '@/shared/locales/en/common.json'
import itTranslation from '@/shared/locales/it/common.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    it: { translation: itTranslation }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  debug: true
})

export default i18n
