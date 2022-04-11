import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const CreateTodoWrapper = styled.div`
  display: block;
  width: 100%;
  min-height: 300px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const CreateTitle = styled.h4``;

export const InputLabels = styled.label`
  color: ${({theme}) => theme.colors.labelColors};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: 14px;
  }
`;

export const InputContainer = styled.div`
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

export const PlusIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 18px;
`;