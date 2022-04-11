import React, { useRef } from "react";
import PropTypes from "prop-types";
import {ModalBackDrop, ModalChildren, ModalCloseIcon, ModalCloseIconWrapper, ModalContainer, ModalTitle} from "./style";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ show, close, title, children }) => {
  const ref = useRef();

  const closeModal = () => {
    close();
  }

  //useOnClickOutside(ref, () => close());

  return (
    <ModalBackDrop show={show}>
      <ModalContainer show={show} ref={ref}>
        <ModalTitle>
          {title}
          <ModalCloseIconWrapper onClick={closeModal}>
            <ModalCloseIcon icon={faTimes} />
          </ModalCloseIconWrapper>
        </ModalTitle>
        <ModalChildren>
          {children}
        </ModalChildren>
      </ModalContainer>
    </ModalBackDrop>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;