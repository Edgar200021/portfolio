import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'

import frameIcon from '../../assets/icons/frame.svg'
import { SectionTitle } from '../ui/SectionTitle/SectionTitle'
import { twMerge } from 'tailwind-merge'
import { Frame, FrameTheme } from '../ui/Frame/Frame'
import { Skills } from '../ui/Skills/Skills'
import { SkillsTitle } from '../../types/skills'
import { SKILLS } from '../../constants/constants'

interface SkillsSectionProps {
  className?: string
  animated?: boolean
}

export const SkillsSection = ({ className, animated }: SkillsSectionProps) => {
  const { t } = useTranslation('')
  const { ref: skillsSectionRef, inView: skillsSectionVisible } = useInView({
    triggerOnce: true,
    rootMargin: '40px',
    threshold: 0.3,
  })
  return (
    <section ref={skillsSectionRef} className={className}>
      <div className="max-w-7xl mx-auto px-16 phone:px-4">
        <SectionTitle className="mb-3 max-w-[400px]" title="skills" />
        <div className="flex justify-between items-center flex-wrap  gap-14 bigTablet:justify-center">
          <div
            className={twMerge(
              `relative max-w-[350px] h-[400px] w-full ${
                animated &&
                'translate-x-[-1000px] opacity-0 duration-[2s] ease-in-out'
              }`,
              animated && skillsSectionVisible && 'translate-x-0 opacity-1'
            )}
            style={{
              animationDelay: '0s',
              MozAnimationDuration: '2',
            }}
          >
            <Frame theme={FrameTheme.GRID} className="absolute left-6 top-12" />
            <Frame
              theme={FrameTheme.GRID}
              className="absolute top-40 left-48"
            />
            <Frame
              theme={FrameTheme.NORMAL}
              className="w-24 h-24 absolute right-9 top-0"
            />
            <Frame
              theme={FrameTheme.NORMAL}
              className="w-12 h-12 absolute right-0 bottom-7"
            />
            <div className="absolute bottom-0 left-7">
              <img src={frameIcon} />
            </div>
          </div>
          <div
            className={twMerge(
              `flex flex-row-reverse gap-4 flex-wrap items-start max-w-[600px] tablet:flex-row tablet:justify-center ${
                animated &&
                'translate-x-[1000px] opacity-0 duration-[2s] ease-in-out'
              }`,
              animated && skillsSectionVisible && 'opacity-1 translate-x-0'
            )}
          >
            {Object.entries(SKILLS).map(([title, { skills, theme }]) => {
              const skillsTitle: SkillsTitle = t(title as SkillsTitle)

              return (
                <Skills
                  key={title}
                  title={skillsTitle}
                  skills={skills}
                  theme={theme}
                  className="phone:max-w-[196px]"
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
