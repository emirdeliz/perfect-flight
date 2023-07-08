import { Colors } from '@theme';
import { createGlobalStyle } from 'styled-components';

const BODY_MIN_WIDTH = '300px';

const Global = createGlobalStyle`
  html, body, body > div, main {
    margin: 0;
    padding: 0;
		width: 100%;
		height: 100%;
  }

  body {
    min-width: ${BODY_MIN_WIDTH};
  }

  * {
    font-family: Inter !important;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 15px;
  }
`;

export default Global;
