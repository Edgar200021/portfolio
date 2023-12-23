import { NavLink, NavLinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Paths } from '../../../routes/routesConfig'

interface AppLinkProps extends NavLinkProps {
  to: Paths | string
  className?: string
}

export const AppLink = ({
  to,
  children,
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          className,
          isActive
            ? 'text-white transition-all duration-300 ease'
            : 'transition-all duration-300 ease'
        )
      }
      to={to}
      {...otherProps}
    >
      {children}
    </NavLink>
  )
}
