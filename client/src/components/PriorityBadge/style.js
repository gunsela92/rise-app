import styled from "styled-components";

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${({theme, priority}) => priority === 1 ? theme.colors.trivialColor : priority === 2 ? theme.colors.regularColor : theme.colors.urgentColor};
  color: ${({theme}) => theme.colors.white};
  font-size: 14px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: 12px;
  }
`;
