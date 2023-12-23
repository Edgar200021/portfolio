import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

interface SectionTitleProps {
  className?: string
  title: string
  hidden?: boolean
}

export const SectionTitle = ({
  className,
  title,
  hidden,
}: SectionTitleProps) => {
  const { t } = useTranslation()

  return (
    <div
      className={twMerge(
        ` w-full ${hidden ? 'block' : 'grid grid-cols-[max-content,1fr] items-center gap-4'} `,
        className
      )}
    >
      <h2>
        <span className="text-primary mr-1">#</span>
        {t(title)}
      </h2>
      {!hidden && <span className="bg-primary h-[1px]"></span>}
    </div>
  )
}
