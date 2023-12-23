import { ReactElement } from 'react'

interface CollapsedElemProps {
  condition: boolean
  children: ReactElement | undefined
}
export const CollapsedElem = ({ condition, children }: CollapsedElemProps) => {
  return (
    <div
      className={`grid ${
        condition ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      } transition-[grid-template-rows] duration-300 ease overflow-hidden`}
    >
      <div className="min-h-0">{children}</div>
    </div>
  )
}
