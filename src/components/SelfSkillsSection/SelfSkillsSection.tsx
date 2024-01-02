import { twMerge } from 'tailwind-merge'

import { useTranslation } from 'react-i18next'
import frame from '../../assets/icons/frame.svg'
import { SectionTitle } from '../ui/SectionTitle/SectionTitle'
import { SELF_SKILLS } from '../../constants/constants'
import { FrameTheme, Frame as FrameComponent } from '../ui/Frame/Frame'

interface SelfSkillsSectionProps {
  className?: string
}

export const SelfSkillsSection = ({ className }: SelfSkillsSectionProps) => {
  const { t } = useTranslation()
  return (
    <section className={twMerge('relative', className)}>
      <div className="max-w-7xl mx-auto px-16 phone:px-4 relative">
        <SectionTitle title="self-skills" className="mb-6" hidden={true} />

        <div className="flex justify-between gap-10 items-center flex-wrap tablet:justify-center">
          <ul className="max-w-[600px] flex gap-4 flex-wrap tablet:justify-center phone:text-lg">
            {SELF_SKILLS.map(val => (
              <li
                className="p-2 border-typography border-2 capitalize"
                key={val}
              >
                {t(val)}
              </li>
            ))}
          </ul>
          <span>
            <img src={frame} />
          </span>
        </div>
      </div>
      <FrameComponent
        theme={FrameTheme.NORMAL}
        className="w-40 h-40 absolute -left-20 top-[50%] translate-y-[-50%] -z-10 desktop:hidden"
      />
      <FrameComponent
        theme={FrameTheme.GRID}
        className="absolute -right-4  bottom-0 -z-10 phone:hidden"
      />
    </section>
  )
}
