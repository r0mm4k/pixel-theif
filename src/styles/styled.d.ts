import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      focus: string;
    };
    fontSizes: string[];
    fontFamily: string;
    space: number;
  }
}
