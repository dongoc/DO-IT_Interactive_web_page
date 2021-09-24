import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

  html {
    --white: #ffffff;
    --black: #000000;

    --spacing-xxs: 5px;
    --spacing-xs: 10px;
    --spacing-s: 15px;
    --spacing-m: 20px;
    --spacing-l: 25px;
    --spacing-xl: 30px;
    --spacing-xxl: 50px;
    --spacing-xxl-2: 100px;
    --spacing-xxl-3: 200px;
  }

  div, span {
    box-sizing: border-box;
  }
`;
