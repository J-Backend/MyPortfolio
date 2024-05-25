import { useState } from "react"
import { LangContext, translations, initialLang } from "./LangContext"

export const LangProvider = ({ children }) => {

    const [lang, setLang] = useState(initialLang)
    const [translation, setTranslation] = useState(translations[lang])
    
    const handleLang = ( langSelected) => {
        const es = 'es'
        const en = 'en'

        if (langSelected === en) {
            setLang(en)
            setTranslation(translations[en])
        } else if (langSelected === es) {
            setLang(es)
            setTranslation(translations[es])
        }
    }

    const data = { translation, handleLang, lang }
    return (
        <LangContext.Provider value={data}>
            {children}
        </LangContext.Provider>
    )
}
