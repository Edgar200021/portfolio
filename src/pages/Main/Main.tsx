import { useTranslation } from 'react-i18next'
import {
  AnimateVariants,
  AnimatedComponent,
} from '../../components/ui/AnimatedComponent/AnimatedComponent'
import { Hero } from '../../components/Hero/Hero'
import { Quote } from '../../components/Quote/Quote'
import { AppLink } from '../../components/ui/AppLink/AppLink'
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle'
import { Paths } from '../../routes/routesConfig'
import { ProjectList } from '../../components/ProjectList/ProjectList'
import { Project } from '../../components/Project/Project'
import { Frame, FrameTheme } from '../../components/ui/Frame/Frame'
import { SkillsSection } from '../../components/SkillsSection/SkillsSection'
import { AboutSection } from '../../components/AboutSection/AboutSection'
import { ContactsSection } from '../../components/ContactsSection/ContactsSection'
import { PROJECTS } from '../../constants/constants'

const Main = () => {
  const { t } = useTranslation('')

  return (
    <>
      <AnimatedComponent
        variants={AnimateVariants.BOTTOM_TO_TOP}
        className="w-full h-1/2 bg-black absolute right-0 top-0 z-[100]"
      />
      <AnimatedComponent
        variants={AnimateVariants.TOP_TO_BOTTOM}
        className="w-full h-1/2 bg-black absolute right-0 bottom-0 z-[100]"
      />
      <Hero className="desktop:mb-28" />
      <Quote animated={true} className="mb-[74px]" />
      <section className="relative mb-24">
        <div className="max-w-7xl px-16 phone:px-4 mx-auto">
          <div className="flex justify-between items-center flex-wrap gap-5 mb-12">
            <SectionTitle className="max-w-[700px]" title="projects" />
            <AppLink
              className="font-medium text-white hover:translate-x-2 transition-transform duration-300 ease"
              to={Paths.WORKS}
            >
              {t('View all') as string} {`~~>`}
            </AppLink>
          </div>
          <ProjectList>
            {PROJECTS.slice(1, 4).map(project => (
              <Project
                key={project.title}
                project={project}
                animated={true}
                animationDelay={0.2}
              />
            ))}
          </ProjectList>
        </div>

        <Frame
          theme={FrameTheme.GRID}
          className="absolute -left-12 top-10 -z-10 phone:hidden"
        ></Frame>
        <Frame
          theme={FrameTheme.NORMAL}
          className="w-40 h-40 absolute -right-16 bottom-20 -z-10 phone:hidden"
        />
      </section>
      <SkillsSection className="mb-28" animated={true} />
      <AboutSection className="mb-28" animated={true} />
      <ContactsSection className="mb-36" animated={true} />
    </>
  )
}

export default Main
