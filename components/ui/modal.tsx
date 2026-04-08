"use client"

import type React from "react"

import { Fragment, useState, useRef, useEffect } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  showCloseButton?: boolean
  closeOnOutsideClick?: boolean
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
  showCloseButton = true,
  closeOnOutsideClick = true,
}: ModalProps) {
  const [open, setOpen] = useState(isOpen)
  const initialFocusRef = useRef(null)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        initialFocus={initialFocusRef}
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeOnOutsideClick ? handleClose : () => {}}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={cn(
                "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black/80 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl",
                className,
              )}
            >
              {showCloseButton && (
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              )}

              {title && (
                <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-white mb-2">
                  {title}
                </Dialog.Title>
              )}

              {description && <p className="text-sm text-white/70 mb-4">{description}</p>}

              <div ref={initialFocusRef}>{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
