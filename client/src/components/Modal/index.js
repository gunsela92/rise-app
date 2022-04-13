import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {
  ModalBackDrop,
  ModalChildren,
  ModalCloseIcon,
  ModalCloseIconWrapper,
  ModalContainer,
  ModalHeader, ModalTitle,
} from "./style";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ show, close, title, type, children }) => {
  const ref = useRef();

  const closeModal = () => {
    close();
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <ModalBackDrop show={show}>
      <ModalContainer show={show} ref={ref} type={type}>
        <ModalHeader>
          <ModalCloseIconWrapper onClick={closeModal}>
            <ModalCloseIcon icon={faTimes} />
          </ModalCloseIconWrapper>
        </ModalHeader>
        <ModalChildren>
          {title && (<ModalTitle>{title}</ModalTitle>)}
          {children}
        </ModalChildren>
      </ModalContainer>
    </ModalBackDrop>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  close: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Modal.defaultProps = {
  type: "edit",
}

export default Modal;
