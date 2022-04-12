import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const DataFiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto;
  align-items: center;
  padding: 20px;
  background-color: #F1F4FF;
  border: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  width: calc(100% - 40px);
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: calc(100% - 10px);
    padding: 20px 10px;
    grid-template-columns: 1fr;
  }
`;

export const JobNameSearchInput = styled.input`
  border: ${({theme}) => `1px solid ${theme.colors.inputBorders}`};
  border-radius: 3px;
  font-size: 14px;
  padding: 15px 0 15px 30px;
  outline: none;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    margin-bottom: 10px;
  }
`;

export const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 14px;
  margin-left: 10px;
  margin-top: -7px;
  color: ${({theme}) => theme.colors.placeHolderColors};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    margin-top: -36px;
  }
`;