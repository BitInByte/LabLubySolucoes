// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            yellow: string;
            black: string;
        };
        sizes: {
          elementSize: string;
        },
        paddings: {
          elementPadding: string;
        },
        fontSize: {
            small?: string;
            normal?: string;
            medium?: string;
            big?: string;
            h1?: string;
            element: string;
        };
        mediaQueries?: {
            medium?: string;
        };
    }
}
