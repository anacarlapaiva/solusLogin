import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;


      background_primary: string;
      text: string;
    };
  }
}