import { useTranslation } from 'react-i18next'
import credit from '../../assets/icons/credit.svg'

export const SupportMe = () => {
  const { t } = useTranslation()
  return (
    <article className="p-4 border-typography border-2">
      <span className="text-white font-medium block mb-2">
        {t('Support me here')}
      </span>
      <span className="flex gap-2">
        <img src={credit} />
        <span>5220651010445354</span>
      </span>
    </article>
  )
}
