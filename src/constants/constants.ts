import { z } from 'zod'

import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import telegram from '../assets/icons/telegram.svg'
import discord from '../assets/icons/discord.svg'
import email from '../assets/icons/email.svg'

import drivereasy from '../assets/img/projects/drivereasy.jpg'
import coffeehouse from '../assets/img/projects/coffeehouse.jpg'
import dm from '../assets/img/projects/dm.jpg'
import godofwar from '../assets/img/projects/godofwar.jpg'

import { Languages } from '../types/langSwitcher'
import { ISocials } from '../types/socials'
import { SkillsTheme } from '../components/ui/Skills/Skills'
import { SkillsTitle } from '../types/skills'
import { IProject } from '../types/projects'

export const LANGUAGES: Languages[] = [Languages.RU, Languages.EN]
export const SOCIALS: ISocials[] = [
  { Icon: github, href: 'https://github.com/Edgar200021' },
  {
    Icon: linkedin,
    href: 'https://www.linkedin.com/in/edgar-asatryan-0235a2281/',
  },
  { Icon: telegram, href: 'https://t.me/Edgarasatryan2000' },
  { Icon: email, href: 'mailto:easatryan2000@gmail.com' },
  { Icon: discord, href: 'https://discordapp.com/users/423166093129941013' },
]

export const PROJECTS: IProject[] = [
  {
    image: dm,
    title: 'D&M Leasing',
    tools: ['HTML', 'SASS', 'JavaScript'],
    url: 'https://d-m-z8ku.vercel.app/',
    description:
      'The site offers a user-friendly interface for exploring car leasing options, ensuring a seamless experience across various devices',
  },
  {
    image: coffeehouse,
    title: 'Coffee House',
    tools: ['HTML', 'SASS', 'JavaScript'],
    url: 'https://coffee-house.vercel.app/',
    description:
      'The site invites visitors into the cozy ambiance of the coffee experience, providing an intuitive interface to explore the menu, events, and ambiance',
  },
  {
    image: drivereasy,
    title: 'Driver Easy',
    tools: ['HTML', 'SASS', 'JavaScript'],
    url: 'https://driver-easy.vercel.app/',
    description:
      'Developed an efficient and user-friendly application, Driver Easy, designed to simplify the driver management process.',
  },
  {
    image: godofwar,
    title: 'God Of War',
    tools: ['HTML', 'SASS', 'JavaScript'],
    url: 'https://god-of-war-wine.vercel.app/',
    description:
      'Embark on an epic journey with the God of War presentation, a homage to the iconic gaming saga.',
  },
]

export const SKILLS: Record<
  SkillsTitle,
  { skills: string[]; theme: SkillsTheme }
> = {
  tools: {
    skills: ['VSCode', 'Git', 'Figma', 'DevTools'],
    theme: SkillsTheme.STANDARD,
  },
  databases: {
    skills: ['PostgreSQL', 'MongoDB'],
    theme: SkillsTheme.SMALL,
  },
  languages: {
    skills: ['TypeScript', 'JavaScript'],
    theme: SkillsTheme.SMALL,
  },
  frameworks: {
    skills: ['React'],
    theme: SkillsTheme.STANDARD,
  },
  other: {
    skills: [
      'HTML',
      'CSS',
      'SASS/SCSS',
      'Tailwind CSS',
      'Redux',
      'Redux Toolkit',
      'Redux Thunk',
      'RTK Query',
      'Storybook',
      'React Hook Form',
      'Framer Motion',
    ],
    theme: SkillsTheme.SMALL,
  },
}

export const SELF_SKILLS: string[] = [
  'problem-solving',
  'time management',
  'dependability',
  'self-motivation',
  'critical thinking',
]

export const formSchema = z.object({
  name: z.string().min(3, 'Name must contain at least 3 character(s)'),
  email: z.string().email('Invalid email'),
  title: z.string().min(5, 'Title must contain at least 5 character(s)'),
  message: z
    .string()
    .min(10, 'Message must contain at least 10 character(s)')
    .max(200),
})
