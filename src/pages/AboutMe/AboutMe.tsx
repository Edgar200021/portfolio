import { useTranslation } from 'react-i18next'
import { AboutSection } from '../../components/AboutSection/AboutSection'
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle'
import { SKILLS } from '../../constants/constants'
import { Skills, SkillsTheme } from '../../components/ui/Skills/Skills'
import { SkillsTitle } from '../../types/skills'
import { SelfSkillsSection } from '../../components/SelfSkillsSection/SelfSkillsSection'

const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="max-w-7xl mx-auto px-16 phone:px-4 mb-8">
        <h1 className="text-3xl font-semibold text-white mb-3">
          <span className="text-primary font-semibold">/</span>
          {t('about-me')}
        </h1>
        <span>{t('Who am i?')}</span>
      </div>
      <AboutSection className="mb-24" centered={true} titleHidden={true} />
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-16 phone:px-4">
          <SectionTitle title="skills" hidden={true} className="mb-12" />
          <div className="flex gap-4 flex-wrap items-start  tablet:justify-center relative">
            {Object.entries(SKILLS).map(([title, { skills }]) => {
              const skillsTitle: SkillsTitle = t(title as SkillsTitle)

              return (
                <Skills
                  key={title}
                  title={skillsTitle}
                  skills={skills}
                  theme={SkillsTheme.STANDARD}
                />
              )
            })}
          </div>
        </div>
      </section>
      <SelfSkillsSection className="mb-40" />
    </>
  )
}

export default AboutMe
