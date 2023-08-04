import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    // namespace
    translation: {
      'click me': 'Click me'
    }
  },
  vi: {
    // namespace
    translation: {
      'click me': 'Kich me'
    }
  }
}

use(initReactI18next).init({
  resources,
  lng: 'vi', // if you're using a language detector, do not define the lng option
  fallbackLng: 'vi',

  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
})
