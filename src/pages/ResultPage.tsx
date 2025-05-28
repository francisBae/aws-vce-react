import React from 'react';
import { useQuizStore } from '../store/quizStore';
import { QuestionCard } from '../components/QuestionCard';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ScoreContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const ScoreBar = styled.div<{ $score: number; $isPassing: boolean }>`
  width: 100%;
  height: 24px;
  background: #e5e7eb;
  border-radius: 12px;
  margin: 1rem 0;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.$score}%;
    background: ${props => props.$isPassing ? '#3b82f6' : '#ef4444'};
    transition: width 0.5s ease-in-out;
  }
`;

const ScoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
  font-size: 1.1rem;
`;

const ScoreLabel = styled.div`
  color: #4b5563;
  font-weight: 500;
`;

const ScoreValue = styled.div<{ $isPassing?: boolean }>`
  color: ${props => props.$isPassing === undefined ? '#1f2937' : props.$isPassing ? '#3b82f6' : '#ef4444'};
  font-weight: 600;
`;

const StatsContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const StatsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1f2937;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StatsItem = styled.div`
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
`;

const StatsLabel = styled.div`
  color: #4b5563;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const StatsValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #2563eb;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ResultPage: React.FC = () => {
  const { filtered, answers, reset, retryWrongAnswers } = useQuizStore();
  const navigate = useNavigate();
  
  // 정답 계산
  const correctAnswers = filtered.filter(q => {
    if (q.isMultipleChoice) {
      return answers[q.number] === q.answer;
    }
    return answers[q.number] === q.answer;
  });

  // 점수 계산
  const totalQuestions = filtered.length;
  const pointsPerQuestion = 1000 / totalQuestions;
  const score = Math.round(correctAnswers.length * pointsPerQuestion);
  const isPassing = score >= 700;
  const scorePercentage = (score / 1000) * 100;

  // 통계 계산
  const correctCount = correctAnswers.length;
  const wrongCount = totalQuestions - correctCount;
  const correctPercentage = Math.round((correctCount / totalQuestions) * 100);
  const wrongPercentage = 100 - correctPercentage;

  const handleRetryWrongAnswers = () => {
    retryWrongAnswers();
    navigate('/');
  };

  return (
    <Container>
      <Title>시험 결과</Title>
      
      <ScoreContainer>
        <ScoreBar $score={scorePercentage} $isPassing={isPassing} />
        <ScoreInfo>
          <ScoreLabel>Passing Score</ScoreLabel>
          <ScoreValue>700/1000</ScoreValue>
          <ScoreLabel>Your Score</ScoreLabel>
          <ScoreValue $isPassing={isPassing}>{score}/1000</ScoreValue>
          <ScoreLabel>Grade</ScoreLabel>
          <ScoreValue $isPassing={isPassing}>{isPassing ? 'Pass' : 'Fail'}</ScoreValue>
        </ScoreInfo>
      </ScoreContainer>

      <StatsContainer>
        <StatsTitle>정답률</StatsTitle>
        <StatsGrid>
          <StatsItem>
            <StatsLabel>정답</StatsLabel>
            <StatsValue>{correctCount} ({correctPercentage}%)</StatsValue>
          </StatsItem>
          <StatsItem>
            <StatsLabel>오답</StatsLabel>
            <StatsValue>{wrongCount} ({wrongPercentage}%)</StatsValue>
          </StatsItem>
        </StatsGrid>
      </StatsContainer>

      {wrongCount > 0 && (
        <>
          <h2>오답 문제</h2>
          {filtered.filter(q => !correctAnswers.includes(q)).map(q => (
            <QuestionCard
              key={q.number}
              question={q}
              selected={answers[q.number]}
              showAnswer={true}
            />
          ))}
        </>
      )}
      <ButtonGroup>
        <Button onClick={handleRetryWrongAnswers} disabled={wrongCount === 0}>
          틀린 문제만 다시 풀기
        </Button>
        <Button onClick={() => {
          reset();
          navigate('/exam-setting');
        }}>
          새로운 시험 시작
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default ResultPage; 