import React from "react";
import {AuthorText, FooterWrapper, GitHubLink, GitIcon} from "./style";
import GitHubIcon from "../../assets/images/gitIcon.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <GitHubLink>
        <GitIcon src={GitHubIcon} alt={"Github Link"} />
      </GitHubLink>
      <AuthorText>
        © {new Date().getFullYear()} Günsel Akkemik
      </AuthorText>
    </FooterWrapper>
  );
};

export default Footer;
