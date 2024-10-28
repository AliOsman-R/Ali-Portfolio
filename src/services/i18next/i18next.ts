import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie';

const getInitialLanguage = () => {
	const storedLanguage = Cookies.get('i18next');
	const storedDir = Cookies.get('langDir');
	const dir = navigator.language.includes('ar') ? 'rtl' : 'ltr'
	document.body.dir = storedDir || dir
	return storedLanguage || (navigator.language.includes('ar') ? 'ar' : 'en');
  };

i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
	returnObjects:true,
	backend: {
		loadPath: '/locales/{{lng}}/translation.json',
	},
	supportedLngs:['ar', 'en'],
	lng:getInitialLanguage(),
    fallbackLng: 'en',
		detection: {
			order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
			caches: ["cookie"]
		}
})

export default i18n