import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import InterLight from "../assets/fonts/Inter/Inter-Light-BETA.otf";
import InterBold from "../assets/fonts/Inter/Inter-Bold.otf";
import Inter from "../assets/fonts/Inter/Inter-Regular.otf";
import InterItalic from "../assets/fonts/Inter/Inter-Italic.otf";
import InterSemibold from "../assets/fonts/Inter/Inter-SemiBold.otf"
import PropTypes from "prop-types";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Interregular';
    src: url(${Inter});
  }
  @font-face {
    font-family: 'Interlight';
    src: url(${InterLight});
  }
  @font-face {
    font-family: 'Interbold';
    src: url(${InterBold});
  }
  @font-face {
    font-family: 'Interitalic';
    src: url(${InterItalic});
  }
  @font-face {
    font-family: 'InterSemibold';
    src: url(${InterSemibold});
  }
  body {
    font-family: ${({ theme }) => theme.fonts.regular};
    margin: 0;
  }
`;

const breakPoints = {
  xs: 468,
  sm: 600,
  m: 768,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    borderColor: "rgba(210,210,210,0.41)",
    trivialColor: "#1890ff",
    urgentColor: "#d54755",
    regularColor: "#E0A800",
    infoColor: "#17A2B8",
    primaryButton: "#1890ff",
    primaryButtonHover: "#53aaff",
    primaryButtonActive: "#1890ff",
    transparentBlack: "rgba(0,0,0,0.4)",
    inputBorders: "#E0E0E0",
    labelColors: "rgba(128,128,128,0.83)",
    footerBackground: "#f1f1f1",
    buttonBackgrounds: "rgba(225,225,225,0.82)",
    dataItemBackgrounds: "rgba(236,236,236,0.73)",
  },
  backgrounds: {
    headerBackground: "#151515",
  },
  grayBorder: "#b4b4b4",
  fonts: {
    regular: "Interregular",
    light: "Interlight",
    bold: "Interbold",
    italic: "Interitalic",
    semibold: "Intersemibold",
  },
  fontSizes: {
    extraSmall: "10px",
    tiny: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "20px",
  },
  darkModal: "#ffffff",
  buttonColors: {
    dark: "#22303c",
  },
  breakPoints,
};

const MainThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

MainThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainThemeProvider;
