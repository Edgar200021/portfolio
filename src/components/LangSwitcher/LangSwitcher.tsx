import { useState } from 'react'

import arrowdown from '../../assets/icons/arrow-down.svg'
import { useLanguage } from '../../hooks/useLanguage'
import { LANGUAGES } from '../../constants/constants'
import { Button, ButtonTheme } from '../ui/Button/Button'

export const LangSwitcher = () => {
  const { lang, handleLanguage } = useLanguage()
  const [collapsed, setCollapsed] = useState(false)

  function handleCollapsed() {
    setCollapsed(prev => (prev ? false : true))
  }

  return (
    <div role="button" onClick={handleCollapsed}>
      <div className="flex items-center">
        <span className="mr-[6px] ">{lang}</span>
        <img
          src={arrowdown}
          className={`${
            collapsed ? 'rotate-180' : 'rotate-0'
          } transition-transform duration-300 ease`}
          alt=""
        />
      </div>
      <div
        className={`grid ${
          collapsed ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        } overflow-hidden transition-[grid-template-rows] duration-300 ease `}
      >
        <ul className="min-h-0 text:xl">
          {LANGUAGES.map(value => (
            <li key={value}>
              <Button
                theme={ButtonTheme.CLEAR}
                onClick={() => handleLanguage(value)}
              >
                {value}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
