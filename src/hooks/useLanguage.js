import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export const useLanguage = () => {

  const { translation, handleLang, lang } = useContext(LangContext)

  return {
    translation,
    handleLang,
    lang
  }
}


