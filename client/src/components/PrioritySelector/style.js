import styled from "styled-components";
import {ReactComponent as ArrowIcon} from "../../assets/svg/arrow.svg";

export const PrioritySelectorWrapper = styled.div`
  border: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  margin-top: 10px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const SelectorPlaceHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  color: ${({theme, disabled}) => disabled ? theme.colors.labelColors : theme.colors.black};
`;

export const SelectorWrapper = styled.div`
  position: absolute;
  border-radius: 3px;
  margin-top: 10px;
  border: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  width: ${({type}) => type === "edit" ? "550px" : "100%"};
  max-width: ${({type}) => type === "edit" ? "calc(100% - 25px)" : "198px"};
  user-select: none;
  background: ${({theme}) => theme.colors.white};
  height: ${({active}) => active ? "auto" : "0"};
  opacity: ${({active}) => active ? "1" : "0"};
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    max-width: ${({type}) => type === "edit" ? "calc(100% - 25px)" : "calc(100% - 42px);"};
  }
`;

export const SelectorItems = styled.div`
  padding: 10px;
  border-bottom: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  user-select: none;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.inputBorders};
  }
`;

export const SelectorIcon = styled(ArrowIcon)`
  margin-left: 10px;
  transform: ${({active}) => active ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  width: 10px;
`;
