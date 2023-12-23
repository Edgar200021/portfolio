import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Languages } from '../types/langSwitcher'

export const useLanguage = () => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'RU')
  const { i18n } = useTranslation()

  const handleLanguage = (lang: Languages): void => {
    setLang(lang)
    localStorage.setItem('lang', lang)
    i18n.changeLanguage(lang.toLocaleLowerCase())
  }

  return { lang, handleLanguage }
}
