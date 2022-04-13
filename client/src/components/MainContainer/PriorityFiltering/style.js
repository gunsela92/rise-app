import styled from "styled-components";
import {ReactComponent as ArrowIcon} from "../../../assets/svg/arrow.svg";

export const PriorityFilterWrapper = styled.div`
  border: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  border-radius: 3px;
  cursor: pointer;
font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({theme}) => theme.colors.white};
  margin-left: 10px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    margin: 0;
  }
`;

export const PriorityFilterPlaceHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  color: ${({theme, disabled}) => disabled ? theme.colors.labelColors : theme.colors.black};
`;

export const PriorityFilterSelectorWrapper = styled.div`
  position: absolute;
  border-radius: 3px;
  margin-top: 5px;
  border: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  width: 100%;
  max-width: 288px;
  user-select: none;
  background: ${({theme}) => theme.colors.white};
  height: ${({active}) => active ? "auto" : "0"};
  opacity: ${({active}) => active ? "1" : "0"};
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    max-width: calc(100% - 42px);
  }
`;

export const PriorityFilterItems = styled.div`
  padding: 10px;
  border-bottom: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
font-size: ${({ theme }) => theme.fontSizes.small};
  user-select: none;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.inputBorders};
  }
`;

export const PriorityFilterIcon = styled(ArrowIcon)`
  margin-left: 10px;
  transform: ${({active}) => active ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  width: 10px;
`;
