import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> & {
  Header: FC<{ title: string }>;
  Body: FC<{ children: ReactNode }>;
  Footer: FC<{ children: ReactNode }>;
} = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            &#x2715;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.Header = ({ title }) => (
  <h2 className="text-xl font-semibold mb-4">{title}</h2>
);

Modal.Body = ({ children }) => <div className="mb-4">{children}</div>;

Modal.Footer = ({ children }) => (
  <div className="flex justify-end">{children}</div>
);

export default Modal;
