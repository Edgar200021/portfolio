import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'


import quoteIcon from '../../assets/icons/quote.svg'
import { Frame, FrameTheme } from '../ui/Frame/Frame'

interface QuoteProps {
  className?: string
  animated?: boolean
}

export const Quote = ({ className, animated }: QuoteProps) => {
  const { t } = useTranslation('')

  const { ref: quoteRef, inView: quoteIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '250px',
  })

  return (
    <article
      ref={quoteRef}
      className={twMerge(
        `relative  text-white ${
          animated &&
          'opacity-0 translate-y-[300px] transition-all duration-[2s] ease'
        } `,
        ` ${
          animated && quoteIsVisible && 'opacity-1 translate-y-0'
        } ${className}`
      )}
    >
      <div className="px-16 max-w-[712px] mx-auto phone:px-4 text-2xl">
        <div className="border-typography border-2 p-8 phone:p-2 relative font-medium">
          {t('With great power comes great electricity bill')}
          <span className="absolute left-5 -top-4">
            <img src={quoteIcon} />
          </span>
          <span className="absolute right-5 -bottom-4">
            <img src={quoteIcon} />
          </span>
        </div>
        <div className="border-typography border-l-2 border-b-2 border-r-2 p-8 phone:p-2 w-fit ml-auto font-normal">
          {t('- Dr. Who')}
        </div>
      </div>
      <Frame
        theme={FrameTheme.NORMAL}
        className="w-[90px] h-[90px] absolute -right-2 top-10 -z-10 tablet:-right-6 phone:hidden"
      />
    </article>
  )
}
