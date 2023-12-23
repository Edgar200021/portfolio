import { useEffect, useRef } from 'react'

export const useOutsideClick = (close: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: any) => {
      if (!ref.current) return

      if (!ref.current.contains(e.target)) {
        close()
      }
    }

    document.addEventListener('click', handler, true)

    return () => document.removeEventListener('click', handler, true)
  }, [])

  return { ref }
}
