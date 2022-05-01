// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      orange: string;
      black: string;
      gray: string;
    };
  }
}
