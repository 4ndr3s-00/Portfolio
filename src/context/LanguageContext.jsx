import { createContext, useContext, useState, useEffect } from 'react'
import es from '../i18n/es'
import en from '../i18n/en'

const LanguageContext = createContext()

const translations = { es, en }

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem('portfolio-lang') || 'es',
  )

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
