import { useInView } from 'react-intersection-observer'

import { useTranslation } from 'react-i18next'

import image from '../../assets/img/about.png'
import { twMerge } from 'tailwind-merge'
import { SectionTitle } from '../ui/SectionTitle/SectionTitle'
import { Button, ButtonTheme } from '../ui/Button/Button'
import { Frame, FrameTheme } from '../ui/Frame/Frame'

interface AboutSectionProps {
  className?: string
  centered?: boolean
  titleHidden?: boolean
  animated?: boolean
}

export const AboutSection = ({
  className,
  centered,
  titleHidden,
  animated,
}: AboutSectionProps) => {
  const { t } = useTranslation('')
  const { ref: aboutSectionRef, inView: aboutSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  console.log(aboutSectionVisible)

  return (
    <section ref={aboutSectionRef} className={twMerge('relative', className)}>
      <div className="max-w-7xl mx-auto px-16 phone:px-4">
        {!titleHidden && (
          <SectionTitle title="about-me" className="max-w-[516px] mb-6" />
        )}
        <div
          className={`flex justify-between ${
            centered ? 'items-center' : ''
          } flex-wrap gap-10 tablet:justify-center`}
        >
          <p
            className={twMerge(
              `space-y-10 max-w-[515px] ${
                animated &&
                'opacity-0 translate-x-[-1000px] transition-all duration-[2s] ease-in-out'
              }`,
              animated && aboutSectionVisible && ' opacity-1 translate-x-0 '
            )}
          >
            <span className="block">{t('Hello, i’m Edgar!')}</span>
            <span className="block">
              {t(
                'I’m a self-taught front-end developer based in Gyumri, Armenia.'
              )}
              {t(
                'I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.'
              )}
            </span>

            <span className="block">
              {t(
                'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.'
              )}
            </span>
            <Button theme={ButtonTheme.PRIMARY}>{t('Read more')} &rarr;</Button>
          </p>
          <div
            className={twMerge(
              `relative max-w-[345px] w-full  ${
                animated &&
                'opacity-0 translate-x-[1000px] transition-all duration-[2s] ease-in-out '
              }`,
              animated && aboutSectionVisible && 'opacity-1 translate-x-0 '
            )}
          >
            <img src={image} alt="Обо мне" />
            <span className="block w-[80%] mx-auto h-[1px] bg-primary"></span>
            <Frame theme={FrameTheme.GRID} className="absolute left-0 top-20" />
            <Frame
              theme={FrameTheme.GRID}
              className="absolute right-6 bottom-40 "
            />
          </div>
        </div>
      </div>
      <Frame
        theme={FrameTheme.GRID}
        className="absolute -right-5 bottom-40 -z-10 phone:hidden"
      />
      <Frame
        theme={FrameTheme.NORMAL}
        className="absolute -left-12 top-28 w-40 h-40 -z-10 desktop:hidden"
      />
    </section>
  )
}
