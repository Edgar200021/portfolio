import { useInView } from 'react-intersection-observer'


import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { SectionTitle } from '../ui/SectionTitle/SectionTitle'
import { MessageMe } from '../ui/MessageMe/MessageMe'
import { SupportMe } from '../SupportMe/SupportMe'
import { Frame, FrameTheme } from '../ui/Frame/Frame'

interface ContastSectionProps {
  className?: string
  titleHidden?: boolean
  showSupport?: boolean
  animated?: boolean
}

export const ContactsSection = ({
  className,
  titleHidden,
  showSupport,
  animated,
}: ContastSectionProps) => {
  const { t } = useTranslation('')
  const { ref: contactsSectionRef, inView: contactsSectionVisible } = useInView(
    {
      triggerOnce: true,
      threshold: 0.3,
    }
  )

  return (
    <section
      ref={contactsSectionRef}
      className={twMerge('relative', className)}
    >
      <div className="max-w-7xl mx-auto px-16 phone:px-4">
        {!titleHidden && (
          <SectionTitle title="contacts" className="max-w-[190px] mb-12" />
        )}
        <div className="flex justify-between flex-wrap gap-5 tablet:justify-center">
          <p
            className={twMerge(
              `max-w-[450px] font-medium ${
                animated &&
                'opacity-0 translate-x-[-1000px] transition-all duration-[2s] ease-in-out'
              }`,
              animated && contactsSectionVisible && 'opacity-1 translate-x-0'
            )}
          >
            {t(
              `I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me`
            )}
          </p>
          <div
            className={twMerge(
              `
             ${
               showSupport
                 ? 'flex gap-3 items-start flex-wrap phone:flex-col-reverse phone:items-center'
                 : ''
             } ${
                animated &&
                'opacity-0 translate-x-[1000px] transition-all duration-[2s] ease-in-out'
              }`,
              animated && contactsSectionVisible && 'opacity-1 translate-x-0'
            )}
          >
            {showSupport && <SupportMe />}
            <MessageMe />
          </div>
        </div>
      </div>
      <Frame
        theme={FrameTheme.GRID}
        className="absolute bottom-0 -left-12 phone:hidden"
      />
    </section>
  )
}
