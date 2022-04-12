import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const DataTableContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: ${({ theme }) => theme.colors.borderColor};
  padding: 0 20px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    padding: 0 10px;
  }
`;

export const DataTableItems = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 100px;
  align-items: center;
  margin-bottom: 10px;
  grid-gap: 5px;
  padding: 10px;
  font-size: 14px;
  max-height: 40px;
  :nth-child(even) {
    background: ${({ theme }) => theme.colors.dataItemBackgrounds};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: 12px;
    padding: 10px 5px;
  }
`;

export const ActionButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DataTableButton = styled(FontAwesomeIcon)`
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.buttonBackgrounds};
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.labelColors};
  cursor: pointer;
  
  &:hover {
    filter: brightness(0.9);
  }
`;

export const EditModalContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const EditModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

export const EditJobInput = styled.input`
  outline: none;
  border: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  padding: 15px;
  margin-top: 10px;
  border-radius: 3px;
`;

export const EditInputLabels = styled.label`
  color: ${({theme}) => theme.colors.labelColors};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: 14px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const SaveEditButton = styled.button`
  background-color: ${({ theme }) => theme.colors.urgentColor};
  padding: 12px 10px;
  box-sizing: border-box;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  outline: none;
  border: none;
  width: calc(50% - 5px);
  max-width: 200px;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const CancelEditButton = styled.button`
  background-color: ${({ theme }) => theme.colors.cancelColor};
  padding: 12px 10px;
  box-sizing: border-box;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.labelColors};
  cursor: pointer;
  outline: none;
  border: none;
  width: calc(50% - 5px);
  max-width: 200px;
  &:hover {
    filter: brightness(0.9);
  }
`;