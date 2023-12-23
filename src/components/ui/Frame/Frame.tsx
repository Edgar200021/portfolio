import { twMerge } from 'tailwind-merge'

export enum FrameTheme {
  GRID = 'grid',
  NORMAL = 'normal',
}

interface FrameProps {
  theme: FrameTheme
  count?: number
  className?: string
}

export const Frame = ({ className, theme, count = 20 }: FrameProps) => {
  if (theme === FrameTheme.GRID)
    return (
      <div
        className={twMerge(
          `grid grid-cols-5 gap-4 max-w-[84px] phone:max-w-[54px] w-full`,
          className
        )}
      >
        {[...Array(count)].map((_, i) => (
          <span key={i} className="w-1 h-1 bg-typography rounded-full"></span>
        ))}
      </div>
    )

  if (theme === FrameTheme.NORMAL) {
    return (
      <div
        className={twMerge(`border-typography border-2 w-20 h-20`, className)}
      ></div>
    )
  }
}
