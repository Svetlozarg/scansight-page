"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { BG_LOCALE } from "./locale/bg";
import { EN_LOCALE } from "./locale/en";

if (
  typeof localStorage !== "undefined" &&
  !localStorage.getItem("i18nextLng")
) {
  localStorage.setItem("i18nextLng", "bg");
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "bg",
    resources: {
      bg: {
        translation: BG_LOCALE,
      },
      en: {
        translation: EN_LOCALE,
      },
    },
  });

export default i18n;
