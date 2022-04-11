import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.borderColor}`};
  padding: 0 20px;
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    height: 50px;
    justify-content: center;
    padding: 0 10px;
  }
`;

export const NavbarLogo = styled.img`
  width: 160px;
  height: auto;
  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: 130px;
  }
`;