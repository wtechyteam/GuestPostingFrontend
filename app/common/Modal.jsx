// components/Modal.js
import React from "react";
import { CloseSVG } from "../common/Close";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40 bg-gray-500 bg-opacity-50" onClick={onClose}></div>

      {/* Modal content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-[80%] md:w-[60%] lg:w-[40%] relative">
          <button onClick={onClose} className="absolute top-2 right-2">
            <CloseSVG height={20} width={20} />
          </button>
          <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
          
        </div>
      </div>
    </>
  );
};

export default Modal;
