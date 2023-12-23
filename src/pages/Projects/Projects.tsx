import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle'
import { ProjectList } from '../../components/ProjectList/ProjectList'
import { Project } from '../../components/Project/Project'
import { Frame, FrameTheme } from '../../components/ui/Frame/Frame'
import { PROJECTS } from '../../constants/constants'

const Projects = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="max-w-7xl mx-auto px-16 phone:px-4 mb-16">
        <h1 className="text-3xl font-semibold text-white mb-3">
          <span className="text-primary font-semibold">/</span>
          {t('projects')}
        </h1>
        <span>{t('List of my projects')}</span>
      </div>
      <section className="mb-20 relative">
        <div className="max-w-7xl mx-auto px-16 phone:px-4">
          <SectionTitle
            title={'complete-apps'}
            hidden={true}
            className="mb-12"
          />
          <ProjectList>
            {PROJECTS.map(project => (
              <Project key={project.title} project={project} />
            ))}
          </ProjectList>
        </div>
        <Frame
          theme={FrameTheme.GRID}
          className="absolute -left-6 top-20 phone:hidden"
        />
        <Frame
          theme={FrameTheme.NORMAL}
          className="absolute -right-14 -top-6 w-40 h-40 -z-10 tablet:hidden"
        />
      </section>
      <section className="mb-44 relative">
        <div className="max-w-7xl mx-auto px-16 phone:px-4">
          <SectionTitle
            title={'small-projects'}
            hidden={true}
            className="mb-12"
          />
          <ProjectList>
            {PROJECTS.map(project => (
              <Project key={project.title} project={project} />
            ))}
          </ProjectList>
        </div>
        <Frame
          theme={FrameTheme.GRID}
          className="absolute -right-4 top-28 phone:hidden -z-10"
        />
        <Frame
          theme={FrameTheme.GRID}
          className="absolute -left-12 bottom-8 phone:hidden -z-10"
        />
        <Frame
          theme={FrameTheme.NORMAL}
          className="absolute -left-20 -top-6 w-40 h-40 -z-10 tablet:hidden"
        />
      </section>
    </>
  )
}

export default Projects
