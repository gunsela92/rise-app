import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ModalBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.58);
  height: 100%;
  width: 100%;
  position: absolute;
  top: ${({ show }) => show ? "0" : "-1500px"};
  z-index: 11;
  left: 0;
  transition: top .2s;
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: ${({ show }) => show ? "50%" : "-1500px"};
  transform: translate(-50%,-50%);
  background-color: white;
  min-height: ${({type}) => type === "error" ? "250px" : type === "edit" ? "200px" : "375px"};
  width: ${({type}) => type === "error" ? "400px" : "550px"};
  border-radius: 5px;
  transition: all .5s;
  max-width: calc(100% - 20px);
`;

export const ModalHeader = styled.div`
  max-width: 100%;
  height: 20px;
  color: ${({theme}) => theme.colors.black};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalTitle = styled.span`
  width: 100%;
  font-size: ${({theme}) => theme.fontSizes.extraLarge};
  text-align: center;
  display: block;
  margin-bottom: 10px;
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
  margin-top: 10px;
  &:hover {
    background-color: red;
    color: ${({theme}) => theme.colors.white};
  }
`;

export const ModalCloseIcon = styled(FontAwesomeIcon)`
  font-size: ${({theme}) => theme.fontSizes.medium};
`;
