export enum AnimateVariants {
  RIGHT_TO_LEFT = 'animatedRight',
  LEFT_TO_RIGHT = 'animatedLeft',
  BOTTOM_TO_TOP = 'animatedTop',
  TOP_TO_BOTTOM = 'animatedBottom',
}

interface AnimatedComponentProps {
  variants: AnimateVariants
  className?: string
}

export const AnimatedComponent = ({
  variants,
  className,
}: AnimatedComponentProps) => {
  return <span className={`${variants} ${className}`}></span>
}
