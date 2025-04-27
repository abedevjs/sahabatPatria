import { Icon } from "@iconify/react/dist/iconify.js";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  return createPortal(
    // Overlay
    <div className="w-full h-screen p-2 fixed top-0 left-0 bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-md z-50 duration-300  justify-center">
      {/* StyledModal */}
      <div className=" relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bGLinearGradient rounded-md shadow-sm duration-300 flex flex-col items-center pb-6 md:pb-8 px-4 md:px-8 w-fit">
        <Icon
          onClick={onClose}
          icon="majesticons:close"
          className=" w-6 h-6 md:w-8 md:h-8 self-end text-white bg-dark cursor-pointer "
        />
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
