import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../../../assets/svg/search.svg";

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
font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 15px 0 15px 30px;
  outline: none;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    margin-bottom: 10px;
  }
`;

export const InputIcon = styled(SearchIcon)`
  position: absolute;
  width: 14px;
  margin-left: 10px;
  margin-top: -7px;
  fill: ${({theme}) => theme.colors.placeHolderColors};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    margin-top: -36px;
  }
`;