import { useEffect, useState } from 'react'

import logo from '../../assets/icons/logo.svg'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '../ui/Button/Button'
import { routesConfig } from '../../routes/routesConfig'
import { AppLink } from '../ui/AppLink/AppLink'
import { LangSwitcher } from '../LangSwitcher/LangSwitcher'
import { SocialList } from '../Social/SocialList'
import { SOCIALS } from '../../constants/constants'

export const Header = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    document.body.style.overflow = isOpenedMenu ? 'hidden' : 'auto'
  }, [isOpenedMenu])

  function handleOpenedMenu() {
    setIsOpenedMenu(prev => (prev ? false : true))
  }

  return (
    <header
      data-testid="header"
      className="mb-16 min-h-[140px] phone:min-h-[50px] tablet:mb-8 headerAnimation phone:mb-16"
    >
      <div className="max-w-7xl mx-auto px-16 flex justify-between gap-x-4 pt-8 h-full phone:items-center phone:px-4 phone:pt-4">
        <div className="z-40">
          <AppLink to="/">
            <img src={logo} alt="" />
          </AppLink>
        </div>
        <Button
          onClick={handleOpenedMenu}
          theme={ButtonTheme.CLEAR}
          className="relative w-6 h-6 hidden phone:inline-block z-40"
        >
          <span
            className={`inline-block absolute ${
              isOpenedMenu ? 'top-[50%] -rotate-45' : 'top-1'
            } right-0 w-full h-[2px] bg-[#d9d9d9] transition-all duration-300 ease `}
          ></span>
          <span
            className={`inline-block top-[50%] right-0 ${
              isOpenedMenu ? 'w-full rotate-45' : 'w-1/2'
            } h-[2px] absolute bg-[#d9d9d9] transition-all duration-300 ease`}
          ></span>
        </Button>
        <div
          className={`phone:absolute ${
            isOpenedMenu
              ? 'phone:left-0 pl-4 overscroll-contain overflow-auto'
              : 'phone:-left-[1000px]'
          } phone:top-0 phone:w-full phone:h-full phone:z-30 transition-[left] duration-300 ease bg-bg `}
        >
          <div className="h-full flex gap-x-8 text-typography text-xl phone:text-3xl phone:pt-36  phone:flex-col phone:gap-x-0 phone:gap-y-8 whitespace-nowrap">
            <ul className="flex gap-x-8 phone:flex-col phone:gap-x-0 phone:gap-y-8 ">
              {routesConfig.map(({ path, value }) => (
                <li key={value}>
                  <AppLink
                    onClick={() => setIsOpenedMenu(false)}
                    to={path}
                    className="hover:text-white"
                  >
                    <span className="text-primary font-medium mr-1">#</span>
                    {t(value) as string}
                  </AppLink>
                </li>
              ))}
            </ul>
            <LangSwitcher />
            <SocialList
              icons={SOCIALS}
              iconSize={80}
              className="mt-auto hidden phone:flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
