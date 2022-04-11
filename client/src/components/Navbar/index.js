import React from "react";
import {NavbarLogo, NavbarWrapper} from "./style";
import AppLogo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLogo src={AppLogo} />
    </NavbarWrapper>
  );
};

export default Navbar;
