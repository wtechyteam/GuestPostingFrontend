const Modal = ({ onClose, children }) => {
    const handleClose = () => {
      onClose(); // Call the onClose prop
      window.location.reload(); // Refresh the page
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-40 bg-gray-500 bg-opacity-50">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96"> {/* Increased padding and width */}
          <div className="text-lg text-adsy_com-black"> {/* Increased font size */}
            {children}
          </div>
          <button
            onClick={handleClose} // Use the new handleClose function
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded" // Increased padding
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  