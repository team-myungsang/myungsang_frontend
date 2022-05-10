// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      orange: string;
      black: string;
      /** #9E9E9E */
      gray01: string;
      /** #5B5B5B */
      gray02: string;
    };
  }
}
