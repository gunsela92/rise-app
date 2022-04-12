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
  overflow: scroll;
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
