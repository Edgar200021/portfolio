import { twMerge } from 'tailwind-merge'
import { SkillsTitle } from '../../../types/skills'

export enum SkillsTheme {
  SMALL = 'small',
  STANDARD = 'standard',
}

interface SkillsProps {
  className?: string
  title: SkillsTitle
  skills: string[]
  theme: SkillsTheme
}

const skillsTheme: Record<SkillsTheme, string> = {
  small: 'border-typography border-2 max-w-[178px] w-full',
  standard: 'border-typography border-2 max-w-[196px] w-full',
}

export const Skills = ({ title, skills, theme, className }: SkillsProps) => {
  return (
    <div className={twMerge(skillsTheme[theme], className)}>
      <span className="capitalize block p-2 text-white font-bold border-typography border-b-2">
        {title}
      </span>
      <ul className='flex flex-wrap items-center gap-2 p-2'>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
