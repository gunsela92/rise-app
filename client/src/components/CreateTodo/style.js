import styled from "styled-components";
import {ReactComponent as PlusSvg} from "../../assets/svg/plus.svg";
import {ReactComponent as ExclamationIcon} from "../../assets/svg/exclamation.svg";

export const CreateTodoWrapper = styled.div`
  display: block;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    padding: 0 10px;
  }
`;

export const CreateTitle = styled.h4``;

export const InputLabels = styled.label`
  color: ${({theme}) => theme.colors.labelColors};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: 14px;
  }
`;

export const InputContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 200px 100px;
  grid-gap: 20px;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreateInput = styled.input`
  outline: none;
  border: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  padding: 15px;
  margin-top: 10px;
  border-radius: 3px;
`;

export const CreateButton = styled.button`
  background: ${({theme}) => theme.colors.primaryButton};
  outline: none;
  border: none;
  color: ${({theme}) => theme.colors.white};
  padding: 15px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background: ${({theme}) => theme.colors.primaryButtonHover};
  }
  &:active {
    background: ${({theme}) => theme.colors.primaryButtonActive};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    max-width: 100px;
    margin: 0 auto;
  }
`;

export const PlusIcon = styled(PlusSvg)`
  margin-right: 10px;
  width: 18px;
  fill: ${({theme}) => theme.colors.white};
`;

export const ErrorModalInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ErrorIcon = styled(ExclamationIcon)`
  font-size: 120px;
  fill: ${({theme}) => theme.colors.red};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: 80px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 20px;
  color: ${({theme}) => theme.colors.black};
  margin-top: 20px;
  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: 16px;
  }
`;
