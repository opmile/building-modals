import { useEffect, useRef } from "react";
import Button from "./Button";
import ModalTitle from "./ModalTitle";

export default function Dialog({ isOpen, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    isOpen ? dialog.showModal() : dialog.close()
  }, [isOpen])

  return (
    <>
      <dialog 
        ref={dialogRef} 
        className="w-sm m-auto rounded-2xl p-6"
        onClose={onClose}
        >
        <div className="flex flex-col w-full gap-8">
          <ModalTitle className="text-center">{title}</ModalTitle>

          <div className="flex flex-col gap-4 w-full items-center">
            {children}
          </div>

          <Button onClick={onClose} className="bg-red-500 px-5 self-center">
            close
          </Button>
        </div>
      </dialog>
    </>
  );
}
