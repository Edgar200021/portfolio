import { twMerge } from 'tailwind-merge'
import discord from '../../../assets/icons/discord.svg'
import email from '../../../assets/icons/email.svg'
import { useTranslation } from 'react-i18next'

interface MessageMeProps {
  className?: string
}

export const MessageMe = ({ className }: MessageMeProps) => {
  const { t } = useTranslation('')

  return (
    <article className={twMerge('p-4 border-typography border-2 ', className)}>
      <span className="block mb-4 text-white font-bold phone:text-xl">
        {t('Message me here')}
      </span>
      <ul className="space-y-2 phone:text-lg">
        <li className=" inline-flex items-center gap-2">
          <img src={discord} /> <span>edgar200023</span>
        </li>
        <li className="hover:scale-90 transition-transform duration-300 ease">
          <a
            href="mailto:easatryan2000@gmail.com"
            className="inline-flex items-center gap-2"
          >
            <img src={email} /> <span>easatryan2000@gmail.com</span>
          </a>
        </li>
      </ul>
    </article>
  )
}
