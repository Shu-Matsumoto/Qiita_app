import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import Router from './Router';

function App() {
  return <Router />;
}

export default App;

const globalStyle = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: #f5f6f6;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
`;

const container = css`
  max-width: 1080px;
  margin: 0 auto;
`;