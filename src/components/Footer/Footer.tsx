import logo from '../../assets/icons/logo.svg'
import { useTranslation } from 'react-i18next'
import { SocialList } from '../Social/SocialList'
import { SOCIALS } from '../../constants/constants'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="p-8 border-typography border-t-2">
      <div className="max-w-7xl mx-auto px-16 phone:px-4 ">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-5 phone:justify-center phone:flex-col ">
          <div className="phone:text-center">
            <span className="flex gap-6 mb-4 phone:flex-col phone:items-center">
              <NavLink to="/">
                <img src={logo} />
              </NavLink>
              <a
                href="mailto:easatryan2000@gmail.com"
                className="hover:text-white transition-color duration-300 ease phone:text-lg"
              >
                easatryan2000@gmail.com
              </a>
            </span>
            <span className="text-white phone:text-lg ">{t('Front-end developer')}</span>
          </div>
          <div>
            <span className="block mb-2 text-white font-medium text-2xl phone:text-center">
              {t('Media')}
            </span>
            <SocialList icons={SOCIALS} className="flex items-center gap-2" />
          </div>
        </div>
        <span className="block max-w-xs mx-auto text-center phone:text-lg">
          © {t('Copyright 2023. Made by Edgar')}
        </span>
      </div>
    </footer>
  )
}
