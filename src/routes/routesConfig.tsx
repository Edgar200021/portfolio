import { ReactNode } from 'react'
import Projects from '../pages/Projects/Projects'
import Main from '../pages/Main/Main'
import AboutMe from '../pages/AboutMe/AboutMe'
import Contacts from '../pages/Contacts/Contacts'

export enum RoutesValue {
  MAIN = 'home',
  WORKS = 'projects',
  ABOUT = 'about-me',
  CONTACTS = 'contacts',
}

export enum Paths {
  MAIN = '/',
  WORKS = '/projects',
  ABOUT = '/about',
  CONTACTS = '/contacts',
}

export interface IRoutes {
  element: ReactNode
  path: Paths
  value: RoutesValue
}

export const routesConfig: IRoutes[] = [
  { element: <Main />, path: Paths.MAIN, value: RoutesValue.MAIN },
  { element: <Projects />, path: Paths.WORKS, value: RoutesValue.WORKS },
  { element: <AboutMe />, path: Paths.ABOUT, value: RoutesValue.ABOUT },
  {
    element: <Contacts />,
    path: Paths.CONTACTS,
    value: RoutesValue.CONTACTS,
  },
]
