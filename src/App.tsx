import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import ExamSettingPage from './pages/ExamSettingPage';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #4b5563;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #1f2937;
  }

  &.active {
    background: #e5e7eb;
    color: #1f2937;
    font-weight: 500;
  }
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Nav>
        <NavLink to="/exam-setting">시험 모드</NavLink>
        <NavLink to="/">퀴즈</NavLink>
        <NavLink to="/result">결과</NavLink>
      </Nav>
      <Routes>
        <Route path="/exam-setting" element={<ExamSettingPage />} />
        <Route path="/" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;