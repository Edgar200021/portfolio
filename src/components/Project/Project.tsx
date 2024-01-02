import { useInView } from 'react-intersection-observer'

import { twMerge } from 'tailwind-merge'
import { IProject } from '../../types/projects'
import { AppLink } from '../ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface ProjectProps {
  className?: string
  animated?: boolean
  animationDelay?: number
  project: IProject
}

export const Project = ({
  className,
  animated,
  animationDelay,
  project,
}: ProjectProps) => {
  const { ref: projectRef, inView: projectIsVisible } = useInView({
    triggerOnce: true,
    rootMargin: '100px',
    threshold: 0.5,
  })

  const { t } = useTranslation('')
  console.log(t)

  return (
    <li
      ref={projectRef}
      className={twMerge(
        `border-typography border-2 max-w-[350px] min-h-[420px] flex flex-col ${
          animated &&
          ' translate-y-[300px] opacity-0 transition-all duration-500 ease'
        } ${animated && projectIsVisible && 'opacity-1 translate-y-0'}`,
        className
      )}
      style={{
        transitionDelay: `${animationDelay}s`,
      }}
    >
      <div className="max-h-[200px] min-h-[200px] h-full grow ">
        <img
          src={project.image}
          alt={project.title}
          className="h-full object-cover"
        />
      </div>
      <ul className="flex flex-wrap items-center gap-x-2 gap-y-4 border-typography border-y-2 p-2">
        {project.tools.map(tool => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-4 items-start p-4 grow">
        <span className="block text-2xl font-medium text-white">
          {t(project.title)}
        </span>
        <span className="block phone:text-lg">{t(project.description)} </span>
        <AppLink
          target="_blank"
          to={project.url}
          className="mt-auto block bg-none min-w-[100px] border-primary border-2 py-2 px-4 hover:-translate-y-2 hover:bg-[#C778DD] active:-translate-y-1 transition-all duration-300 ease text-white text-xl font-medium"
        >
          Live {`<~>`}
        </AppLink>
      </div>
    </li>
  )
}
