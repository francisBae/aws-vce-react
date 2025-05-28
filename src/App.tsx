import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
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
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
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

const DumpButton = styled.button`
  background: #64748b;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #475569;
  }

  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
`;

const Navigation: React.FC = () => {
  const location = useLocation();

  const handleDump = () => {
    const a = document.createElement('a');
    a.href = '/aif-c01.txt';
    a.download = 'aif-c01.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Nav>
      <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
        시험 모드
      </NavLink>
      <NavLink to="/quiz" className={location.pathname === '/quiz' ? 'active' : ''}>
        퀴즈
      </NavLink>
      <NavLink to="/result" className={location.pathname === '/result' ? 'active' : ''}>
        결과
      </NavLink>
      <DumpButton onClick={handleDump}>
        덤프 다운로드
      </DumpButton>
    </Nav>
  );
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ExamSettingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;