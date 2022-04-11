import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ModalBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.58);
  height: 100%;
  width: 100%;
  position: absolute;
  top: ${({ show }) => show ? "0" : "-900px"};
  z-index: 11;
  left: 0;
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: ${({ show }) => show ? "50%" : "-900px"};
  transform: translate(-50%,-50%);
  background-color: white;
  min-height: 450px;
  min-width: 750px;
  border-radius: 5px;
  transition: all .5s;
`;

export const ModalTitle = styled.div`
  max-width: 100%;
  height: 20px;
  padding: 15px 10px;
  color: ${({theme}) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.grayBorder};
`;

export const ModalChildren = styled.div`
  padding: 10px;
  font-size: ${({theme}) => theme.fontSizes.small};
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #919191;
    border-radius: 10px;
    border: 1px solid #000000;
  }
`;

export const ModalCloseIconWrapper = styled.div`
  cursor: pointer;
  color: ${({theme}) => theme.colors.black};
  height: 15px;
  width: 15px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  &:hover {
    background-color: red;
    color: ${({theme}) => theme.colors.white};
  }
`;

export const ModalCloseIcon = styled(FontAwesomeIcon)`
  font-size: ${({theme}) => theme.fontSizes.medium};
`;