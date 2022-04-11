import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.footerBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
`;

export const GitHubLink = styled.div`
  color: ${({ theme }) => theme.colors.labelColors};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  & > a:visited {
    color: unset;
  }
`;

export const GitIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const AuthorText = styled.span`
  color: ${({ theme }) => theme.colors.labelColors};
`;