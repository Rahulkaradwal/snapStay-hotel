import React, { cloneElement, ReactNode, ReactElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

type ModalProps = {
  children: ReactNode;
};

type OpenProps = {
  children: ReactElement;
  modalName: string;
};

type WindowProps = {
  children: ReactElement;
  windowName: string;
};

type ModalContextType = {
  openModal: string | null;
  open: (name: string) => void;
  close: () => void;
};

const ModalContext = React.createContext<ModalContextType | undefined>(
  undefined,
);

const Modal = ({ children }: ModalProps) => {
  const [openModal, setOpenModal] = React.useState<string | null>(null);

  const open = (name: string) => setOpenModal(name);
  const close = () => setOpenModal(null);

  return (
    <ModalContext.Provider value={{ openModal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ modalName, children }: OpenProps) => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("Open must be used within a ModalContext");
  }

  const { open } = context;

  return cloneElement(children, {
    onClick: () => open(modalName),
  });
};

const Window = ({ windowName, children }: WindowProps) => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("Window must be used within a ModalContext");
  }

  const { close, openModal } = context;

  if (windowName !== openModal) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-lightDark/50 absolute inset-0 backdrop-blur-md"></div>
      <div className="relative z-10 rounded-md p-16">
        <HiXMark
          className="absolute right-7 top-5 w-9 translate-x-3 rounded-sm text-5xl text-slate-50 hover:cursor-pointer hover:text-dark"
          onClick={close}
        />

        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </div>
    </div>,
    document.body,
  );
};

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
