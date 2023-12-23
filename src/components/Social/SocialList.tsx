import { ISocials } from '../../types/socials'

interface SocialListProps {
  className?: string
  iconSize?: number
  icons: ISocials[]
  iconCount?: number
}

export const SocialList = ({
  className,
  iconSize,
  icons,
  iconCount = 3,
}: SocialListProps) => {
  return (
    <ul className={className}>
      {icons.slice(0, iconCount).map(({ href, Icon }) => (
        <li
          key={href}
          className="hover:scale-125 transition-transform duration-300 ease"
        >
          <a href={href} target="_blank">
            {!iconSize ? (
              <img src={Icon} />
            ) : (
              <img src={Icon} width={iconSize} height={iconSize} />
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
