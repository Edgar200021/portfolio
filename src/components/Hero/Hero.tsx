
import hero from '../../assets/img/hero.png'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { Modal } from '../Modal/Modal'
import { Button, ButtonTheme } from '../ui/Button/Button'
import {Form} from '../Form/Form'
import { Frame, FrameTheme } from '../ui/Frame/Frame'


interface HeroProps {
  className?: string
}

export const Hero = ({ className }: HeroProps) => {
  const { t } = useTranslation('')

  return (
    <section className={twMerge('min-h-[calc(100vh-150px)] ', className)}>
      <div className="max-w-7xl mx-auto px-16 phone:px-4 flex justify-center items-center gap-x-24 gap-y-8 phone:gap-y-28 smallPhone:gap-y-36 flex-wrap ">
        <div className="max-w-[460px] animatedLeft ">
          <h1 className="text-5xl max-w-[410px] mb-8 phone:text-5xl">
            <span>{t('Edgar is a ')}&nbsp;</span>
            <span className="text-primary">{t('full-stack developer')}</span>
          </h1>
          <span className="block mb-6 text-xl  ">
            {t(
              'I build responsive websites that blend technology with creativity.'
            )}
          </span>
          <Modal>
            <Modal.Open
              renderButton={open => (
                <Button
                  onClick={() => open('form')}
                  theme={ButtonTheme.PRIMARY}
                  className="phone:text-base"
                >
                  {t('Contact me')} 
                </Button>
              )}
            ></Modal.Open>
            <Modal.Window
              name="form"
              renderChildren={onCloseModal => (
                <Form onCloseModal={onCloseModal} />
              )}
            ></Modal.Window>
          </Modal>
        </div>
        <div className="animatedRight relative">
          <div className="max-w-[450px] min-w-[200px]">
            <img src={hero} alt="Главная картинка" />
            <Frame
              theme={FrameTheme.GRID}
              count={25}
              className="absolute right-0 bottom-20 phone:right-5"
            />
          </div>
          <span className="block text-xl font-bold py-2 px-9 border-typography border-2 relative before:block before:content-[''] before:absolute before:translate-y-[-50%] before:w-4 before:h-4 before:left-2 before:top-[50%]  before:bg-primary phone:pl-9 phone:pr-3 phone:text-base">
            {t('Currently working on Portfolio')}
          </span>
        </div>
      </div>
    </section>
  )
}
