import {
  ReactNode,
  Dispatch,
  useContext,
  createContext,
  useState,
  ReactElement,
  SetStateAction,
} from 'react'
import { createPortal } from 'react-dom'
import { Button, ButtonTheme } from '../ui/Button/Button'
import { useOutsideClick } from '../../hooks/useOutsideClick'

interface IModalContext {
  openName: string
  open: Dispatch<React.SetStateAction<string>>
  close: () => void
}

const ModalContext = createContext<IModalContext | null>(null)

interface ModalProviderProps {
  children: ReactNode
}
const Modal = ({ children }: ModalProviderProps) => {
  const [openName, setOpenName] = useState('')

  const close = () => setOpenName('')
  const open = setOpenName

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  )
}

interface OpenProps {
  renderButton: (fn: Dispatch<SetStateAction<string>>) => ReactElement
}

const Open = ({ renderButton }: OpenProps) => {
  const { open } = useContext(ModalContext)!

  return renderButton(open)
}

interface WindowProps {
  name: string
  renderChildren: (onCloseModal: () => void) => ReactElement
}

const Window = ({ name, renderChildren }: WindowProps) => {
  const { openName, close } = useContext(ModalContext)!
  const { ref } = useOutsideClick(close)

  if (openName !== name) return

  return createPortal(
    <div className="w-full h-full fixed left-0 top-0 backdrop-blur-md z-[100] ">
      <div
        ref={ref}
        className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl"
      >
        {renderChildren(close)}
        <Button
          className="absolute top-2 right-2 phone:top-1 phone:right-1"
          theme={ButtonTheme.CLEAR}
          onClick={close}
        >
          X
        </Button>
      </div>
    </div>,
    document.body
  )
}

Modal.Open = Open
Modal.Window = Window

export { Modal }
