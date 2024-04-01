import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HTTPBackend from "i18next-http-backend";

i18n
  .use(HTTPBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
