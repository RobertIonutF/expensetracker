import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <button onClick={onClose} className="float-right p-2 text-gray-500 hover:text-gray-800">
              &times;
            </button>
            {children}
          </div>
        </div>
      </div>
    ),
    document.body  // This places the modal at the top level of the DOM hierarchy
  );
}

export default Modal;