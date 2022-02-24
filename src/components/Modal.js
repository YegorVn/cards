import { useEffect } from "react";

const Modal = ({onClose, onConfirm, shown, text, ...props}) => {
    useEffect(() => {
        if(shown){
            document.body.style.overflow = "hidden"
        }
        return () => document.body.style.overflow = "visible"
    })
    
    return (
      <div
        className={
          shown
            ? "custom-modal d-flex align-items-center justify-content-center"
            : "asd"
        }
      >
        <div className="custom-modal__dialog d-flex flex-column p-4">
          <div className="custom-modal__text">{text}</div>
          <div className="mt-auto">
            <button className="ps-3 pe-3" onClick={onConfirm}>OK</button>
            <button className="ms-2 ps-3 pe-3" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        <div className="custom-modal__substrate"></div>
      </div>
    );
}

export default Modal