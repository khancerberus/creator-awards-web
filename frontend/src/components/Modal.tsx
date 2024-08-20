import { useEffect, useRef } from 'react'

interface ModalProps {
  visible: boolean
  closeModal: () => void
  children: React.ReactNode
}

export const Modal = ({ visible, closeModal, children }: ModalProps): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (dialogRef.current?.hasAttribute('open')) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [visible])

  return (
    <dialog
      ref={dialogRef}
      onCancel={closeModal}
      className="backdrop:bg-black backdrop:opacity-80 relative z-10 focus:outline-none"
    >
      <button onClick={closeModal} className="border p-2 active:bg-red-950 z-50">
        Close
      </button>
      {children}
    </dialog>
  )
}
