import styled from "styled-components";

export const JobListTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    padding: 0 10px;
  }
`;

export const JobListText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const JobCount = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.colors.labelColors};
`;