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
    clearExamMode
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

  useEffect(() => {
    if (completed) {
      navigate('/result');
    }
  }, [completed, navigate]);

  if (filtered.length === 0) return <div>문제가 없습니다.</div>;

  const q = filtered[current];

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleRestart = () => {
    if (window.confirm('시험을 다시 시작하시겠습니까? 모든 진행 상황이 초기화됩니다.')) {
      clearExamMode();
      navigate('/exam-setting');
    }
  };

  const handleNext = () => {
    if (current === filtered.length - 1) {
      if (window.confirm('시험을 종료하시겠습니까?')) {
        next();
        navigate('/result');
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
              : `${examMode.startNumber}번 ~ ${examMode.endNumber}번 문제 시험 모드`}
          </ExamModeInfo>
          <RestartButton onClick={handleRestart}>
            시험 다시 시작
          </RestartButton>
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
        hideNumber={!!examMode && (examMode.mode === 'random' || examMode.isRandom)}
      />
    </Container>
  );
};

const ExamModeBanner = styled.div`
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExamModeInfo = styled.div`
  font-weight: 500;
  color: #1f2937;
`;

const RestartButton = styled(Button).attrs({ variant: 'danger' })``;

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

export default QuizPage; 