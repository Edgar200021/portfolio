import { ReactNode } from 'react'

interface ProjectListProps {
  children: ReactNode
}

export const ProjectList = ({ children }: ProjectListProps) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 justify-items-center   ">
      {children}
    </ul>
  )
}
