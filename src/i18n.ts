/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const languages = ['ru', 'en'];
export const langNames: { [key: string]: string } = { ru: 'Русский', en: 'English' };
const resources = languages.reduce((accumulator: any, current) => {
  accumulator[current] = { translation: require(`./lib/translation/${current}/resources.json`) };
  return accumulator;
}, {});

i18n.use(initReactI18next).init({ debug: true, fallbackLng: 'ru', resources });

const lang = localStorage.getItem('lang');
if (lang) {
  i18n.changeLanguage(lang);
} else {
  localStorage.setItem('lang', 'ru');
}
window.addEventListener('storage', (e) => {
  const { key } = e;
  if (key === 'lang') {
    window.location.reload();
  }
});

export default i18n;
