import React, { useEffect } from 'react';
import { useQuizStore } from '../store/quizStore';
import { QuestionCard } from '../components/QuestionCard';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const CompletionContainer = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  margin: 2rem 0;
`;

const CompletionTitle = styled.h1`
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const CompletionMessage = styled.p`
  font-size: 1.2rem;
  color: #4b5563;
  margin-bottom: 2rem;
`;

const ExamModeBanner = styled.div`
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ExamModeInfo = styled.div`
  font-weight: 500;
  color: #1f2937;
  font-size: 1rem;

  @media (max-width: 640px) {
    text-align: center;
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: center;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.4rem;
  }
`;

const RestartButton = styled(Button).attrs({ variant: 'danger' })`
  @media (max-width: 640px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

const EndButton = styled(Button).attrs({ variant: 'primary' })`
  @media (max-width: 640px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #f9fafb;
  border-radius: 8px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Progress = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #1f2937;
`;

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    filtered,
    current,
    answers,
    setAnswer,
    next,
    prev,
    completed,
    showAnswer,
    examMode,
    setShowAnswer,
    load,
    save,
    clearExamMode,
    reset
  } = useQuizStore();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (examMode) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [examMode]);

  useEffect(() => {
    if (examMode) {
      load();
    }
  }, [examMode, load]);

  useEffect(() => {
    save();
  }, [current, answers, completed, showAnswer, examMode, save]);

  if (filtered.length === 0) return <div>문제가 없습니다.</div>;
  if (completed) {
    return (
      <Container>
        <CompletionContainer>
          <CompletionTitle>퀴즈가 완료되었습니다!</CompletionTitle>
          <CompletionMessage>
            {filtered.length}문제 중 {Object.keys(answers).length}문제를 풀었습니다.<br />
            결과를 확인해보세요.
          </CompletionMessage>
          <ButtonGroup>
            <Button onClick={() => navigate('/result')}>
              결과 보기
            </Button>
            <Button onClick={reset} variant="secondary">
              다시 풀기
            </Button>
          </ButtonGroup>
        </CompletionContainer>
      </Container>
    );
  }

  const q = filtered[current];

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleRestart = () => {
    if (window.confirm('시험을 다시 시작하시겠습니까? 모든 진행 상황이 초기화됩니다.')) {
      clearExamMode();
      navigate('/');
    }
  };

  const handleExamEnd = () => {
    if (window.confirm('시험을 종료하시겠습니까?')) {
      navigate('/result');
    }
  };

  const handleNext = () => {
    if (current === filtered.length - 1) {
      if (window.confirm('시험을 종료하시겠습니까?')) {
        next();
      }
    } else {
      next();
    }
  };

  return (
    <Container>
      {examMode && (
        <ExamModeBanner>
          <ExamModeInfo>
            {examMode.mode === 'random' 
              ? `${examMode.questionCount}문제 랜덤 시험 모드` 
              : examMode.mode === 'practice'
              ? '실전 모드 (65문제 중 50문제 채점)'
              : `${examMode.startNumber}번 ~ ${examMode.endNumber}번 문제 시험 모드`}
          </ExamModeInfo>
          <ButtonGroup>
            <RestartButton onClick={handleRestart}>
              시험 다시 시작
            </RestartButton>
            <EndButton onClick={handleExamEnd}>
              시험 종료
            </EndButton>
          </ButtonGroup>
        </ExamModeBanner>
      )}
      <Navigation>
        <Button 
          onClick={prev} 
          disabled={current === 0}
          variant="secondary"
        >
          이전 문제
        </Button>
        <Progress>
          {current + 1} / {filtered.length}
        </Progress>
        <Button 
          onClick={handleNext} 
          variant="secondary"
        >
          {current === filtered.length - 1 ? '완료' : '다음 문제'}
        </Button>
      </Navigation>
      <QuestionCard
        question={q}
        selected={answers[q.number]}
        onSelect={ans => {
          setAnswer(q.number, ans);
          setShowAnswer(false);
        }}
        showAnswer={showAnswer}
        onShowAnswer={handleShowAnswer}
        hideNumber={!!examMode && (examMode.mode === 'random' || examMode.isRandom || examMode.mode === 'practice')}
      />
    </Container>
  );
};

export default QuizPage; 