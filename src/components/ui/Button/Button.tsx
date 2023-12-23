import { ComponentProps,  ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OTHER = 'other',
}

interface ButtonProps extends ComponentProps<'button'> {
  theme: ButtonTheme
  className?: string
  children: ReactNode
}

const buttonVariants: Record<ButtonTheme, string> = {
  clear: ' bg-none border-none outline-none text-typography pointer ',
  primary:
    'inline-block bg-none min-w-[100px] border-primary border-2 py-2 px-4 hover:-translate-y-2 hover:bg-[#C778DD] active:-translate-y-1 transition-all duration-300 ease text-white text-xl font-medium',
  other:
    'inline-block border-[.2rem] border-accent text-accent transition-all duration-300 cursor:pointer',
}
export const Button = ({
  theme,
  className,
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonVariants[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
