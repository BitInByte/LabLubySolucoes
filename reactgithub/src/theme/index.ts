import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: "#2A2A2A",
    black: "#030202",
    yellow: "#FDCE03",
    red: "#EF5E5E",
    white: "#FFFFFF",
    headerPage: "#202020",
    green: "#5BBA29",
    numberInformation: "#383838",
    navLinkNotSelected: "#A5A5A5",
    navLinkSelected: "#282828",
    rowBorder: "#434343",
  },
  sizes: {
    elementSize: "35rem",
    avatar: 13,
    h2: "2.5rem",
    h3: "2rem",
  },
  paddings: {
    elementPadding: "1.5rem",
  },
  fontSize: {
    element: "2.5rem",
  },
  mediaQueries: {
    maxBreakPoint: "only screen and (max-width: 65.625em)",
    small: "only screen and (max-width: 28.125em)",
  },
};

export default theme;
