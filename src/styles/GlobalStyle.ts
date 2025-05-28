import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f9fafb;
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
    margin: 0;
    color: #222;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: #2563eb;
    text-decoration: none;
  }
`;

export default GlobalStyle; 