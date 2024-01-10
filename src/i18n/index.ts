import {Platform, NativeModules} from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import TextEN from './translations/en';
import TextES from './translations/es';

export const DEVICE_LANGUAGE =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const resources = {
  en: {
    translation: TextEN,
  },
  es: {
    translation: TextES,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: DEVICE_LANGUAGE,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
