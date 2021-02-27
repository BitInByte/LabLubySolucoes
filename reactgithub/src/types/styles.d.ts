// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      yellow: string;
      black: string;
      red: string;
      white: string;
      headerPage: string;
      green: string;
      numberInformation: string;
    };
    sizes: {
      elementSize: string;
      avatar: number;
      h2: string;
      h3: string;
    };
    paddings: {
      elementPadding: string;
    };
    fontSize: {
      small?: string;
      normal?: string;
      medium?: string;
      big?: string;
      h1?: string;
      element: string;
    };
    mediaQueries: {
      small: string;
    };
  }
}
