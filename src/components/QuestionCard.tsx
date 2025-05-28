import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import type { Question } from '../types/question';

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 2rem;
  margin: 1rem 0;
`;

const ScoreButton = styled.span<{ $isScored: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.75rem;
  background-color: ${props => props.$isScored ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.$isScored ? '#166534' : '#991b1b'};
  border: 1px solid ${props => props.$isScored ? '#86efac' : '#fecaca'};
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 640px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const QuestionImage = styled.div`
  margin: 1rem 0;
`;

const AnswerSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;

  strong {
    font-size: 1rem;
    font-weight: 600;

    @media (max-width: 640px) {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Option = styled.li<{
  $selected: boolean;
  $correct: boolean;
  $wrong: boolean;
  $disabled: boolean;
}>`
  background: ${({$selected, $correct, $wrong, $disabled}) => {
    if ($disabled) {
      if ($correct) return '#d1fae5';  // 정답일 때 초록색
      if ($wrong) return '#fee2e2';    // 오답일 때 빨간색
      if ($selected) return '#e5e7eb'; // 선택된 답변 회색
      return '#f9fafb';               // 기본 배경색
    }
    return $selected ? '#e5e7eb' : '#f9fafb';
  }};
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: ${({$disabled}) => $disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  font-size: 1rem;
  
  @media (max-width: 640px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    margin-bottom: 0.4rem;
  }
  
  &:hover {
    background: ${({$disabled}) => $disabled ? 'inherit' : '#e5e7eb'};
  }

  b {
    font-weight: 600;
    margin-right: 0.5rem;

    @media (max-width: 640px) {
      font-weight: 500;
    }
  }
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #2563eb;
  }
  
  &:disabled {
    background: #93c5fd;
    cursor: not-allowed;
  }
`;

const AnswerButton = styled(Button)`
  background: #10b981;  // 초록색으로 변경
  width: 100%;
  margin-top: 1rem;
  
  &:hover {
    background: #059669;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin: 0.5rem 0;
`;

interface Props {
  question: Question;
  selected?: string | string[];
  onSelect?: (answer: string | string[]) => void;
  showAnswer?: boolean;
  onShowAnswer?: () => void;
  hideNumber?: boolean;
  customNumber?: ReactNode;
  hideAnswerButton?: boolean;
}

export const QuestionCard: React.FC<Props> = ({ 
  question, 
  selected, 
  onSelect, 
  showAnswer = false,
  onShowAnswer,
  hideNumber = false,
  customNumber,
  hideAnswerButton = false
}) => {
  const isAnswerCorrect = (letter: string) => {
    if (!showAnswer) return false;
    if (question.isMultipleChoice) {
      return question.answer.includes(letter);
    }
    return letter === question.answer;
  };

  const isAnswerWrong = (letter: string) => {
    if (!showAnswer || !selected) return false;
    if (question.isMultipleChoice) {
      return Array.isArray(selected) && selected.includes(letter) && !question.answer.includes(letter);
    }
    return selected === letter && !isAnswerCorrect(letter);
  };

  const isSelected = (letter: string) => {
    if (!selected) return false;
    if (question.isMultipleChoice) {
      return Array.isArray(selected) && selected.includes(letter);
    }
    return selected === letter;
  };

  const handleSelect = (letter: string) => {
    if (showAnswer || !onSelect) return;

    if (question.isMultipleChoice) {
      const currentSelected = Array.isArray(selected) ? selected : [];
      const newSelected = currentSelected.includes(letter)
        ? currentSelected.filter(l => l !== letter)
        : [...currentSelected, letter].sort();
      onSelect(newSelected);
    } else {
      onSelect(letter);
    }
  };

  const handleShowAnswer = () => {
    if (onShowAnswer) {
      onShowAnswer();
    }
  };  

  const renderCustomNumber = () => {
    if (!customNumber) return null;
    
    if (typeof customNumber === 'string') {
      // 실전 모드에서 채점 포함/제외 표시
      if (customNumber.includes('[채점 포함]')) {
        return (
          <>
            <ScoreButton $isScored={true}>채점 포함</ScoreButton>
            <span>{customNumber.replace('[채점 포함]', '').trim()}</span>
          </>
        );
      }
      if (customNumber.includes('[채점 제외]')) {
        return (
          <>
            <ScoreButton $isScored={false}>채점 제외</ScoreButton>
            <span>{customNumber.replace('[채점 제외]', '').trim()}</span>
          </>
        );
      }
      return customNumber;
    }
    
    return customNumber;
  };

  return (
    <Card>
      <Title>
        {!hideNumber && (
          <>
            {renderCustomNumber() || `${question.number}.`}
            <br />
          </>
        )}
        {question.text}
      </Title>
      {question.images?.question && (
        <QuestionImage>
          {question.images.question.map((src, i) => (
            <Img key={'question'+i} src={src} alt="문제 이미지" />
          ))}
        </QuestionImage>
      )}
      <OptionList>
        {question.options.map((opt, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const correct = isAnswerCorrect(letter);
          const wrong = isAnswerWrong(letter);
          return (
            <Option
              key={letter}
              $selected={isSelected(letter)}
              $correct={correct}
              $wrong={wrong}
              $disabled={showAnswer}
              onClick={() => handleSelect(letter)}
            >
              <b>{letter}.</b> {opt}
            </Option>
          );
        })}
      </OptionList>
      
      {!hideAnswerButton && (selected || question.images?.answer) && (
        <AnswerButton onClick={handleShowAnswer}>
          {showAnswer ? '정답 숨기기' : '정답 확인'}
        </AnswerButton>
      )}

      {showAnswer && (
        <AnswerSection>
          <strong>정답: {question.answer}</strong>
          {question.images?.answer && (
            <div>
              {question.images.answer.map((src, i) => (
                <Img key={'answer'+i} src={src} alt="정답 이미지" />
              ))}
            </div>
          )}
        </AnswerSection>
      )}
      {question.link && (
        <a href={question.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '1rem' }}>
          원문보기
        </a>
      )}
    </Card>
  );
}; 