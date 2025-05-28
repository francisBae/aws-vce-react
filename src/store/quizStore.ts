import { create } from 'zustand';
import type { Question } from '../types/question';
import { questions as questionData } from '../data/questions';

interface ExamMode {
  mode: 'random' | 'range';
  questionCount: number;
  startNumber: number;
  endNumber: number;
  isRandom?: boolean;  // 범위 지정 모드에서 랜덤 여부
  randomOrder?: number[];  // 랜덤 순서를 저장하는 배열 (문제 번호 배열)
}

interface QuizState {
  questions: Question[];
  current: number;
  answers: Record<number, string | string[]>;
  completed: boolean;
  search: string;
  filtered: Question[];
  showAnswer: boolean;
  examMode: ExamMode | null;
  setAnswer: (number: number, answer: string | string[]) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  setSearch: (q: string) => void;
  filter: () => void;
  load: () => void;
  save: () => void;
  setShowAnswer: (show: boolean) => void;
  setExamMode: (mode: ExamMode) => void;
  clearExamMode: () => void;
  retryWrongAnswers: () => void;  // 틀린 문제만 다시 풀기
}

const getInitial = () => {
  try {
    const saved = localStorage.getItem('quiz-progress');
    if (saved) {
      const parsed = JSON.parse(saved);
      // examMode가 있는 경우 randomOrder도 함께 복원
      if (parsed.examMode) {
        return {
          ...parsed,
          examMode: {
            ...parsed.examMode,
            randomOrder: parsed.examMode.randomOrder || undefined
          }
        };
      }
      return parsed;
    }
  } catch (e) {
    console.error('Failed to load saved progress:', e);
  }
  return { current: 0, answers: {}, completed: false, showAnswer: false, examMode: null };
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [],
  current: getInitial().current,
  answers: getInitial().answers,
  completed: getInitial().completed,
  search: '',
  filtered: [],
  showAnswer: getInitial().showAnswer,
  examMode: getInitial().examMode,
  setAnswer: (number, answer) => set(state => {
    const answers = { ...state.answers, [number]: answer };
    return { answers };
  }),
  next: () => set(state => {
    const next = state.current + 1;
    if (next >= state.filtered.length) {
      return { completed: true };
    }
    return { current: next, showAnswer: false };
  }),
  prev: () => set(state => {
    if (state.current > 0) {
      return { current: state.current - 1, showAnswer: false };
    }
    return state;
  }),
  reset: () => set(() => {
    localStorage.removeItem('quiz-progress');
    return { 
      current: 0, 
      answers: {}, 
      completed: false, 
      showAnswer: false,
      examMode: null,
      filtered: get().questions
    };
  }),
  setSearch: (q) => set({ search: q }),
  filter: () => set(state => {
    const filtered = state.questions.filter(q =>
      q.text.includes(state.search) ||
      q.options.some(opt => opt.includes(state.search))
    );
    return { filtered, current: 0, completed: false, showAnswer: false };
  }),
  load: () => set(state => {
    const questions = questionData;
    let filtered = questions;

    // 시험 모드가 설정되어 있다면 해당 모드에 맞게 문제 필터링
    if (state.examMode) {
      const { mode, questionCount, startNumber, endNumber, isRandom, randomOrder } = state.examMode;

      // randomOrder가 있으면 먼저 그 순서대로 정렬
      if (randomOrder) {
        if (mode === 'random') {
          // 랜덤 모드에서는 randomOrder에 있는 문제 번호들만 필터링
          filtered = questions.filter(q => randomOrder.includes(q.number));
          // randomOrder 순서대로 정렬
          const orderMap = new Map(randomOrder.map((num, idx) => [num, idx]));
          filtered.sort((a, b) => (orderMap.get(a.number) ?? 0) - (orderMap.get(b.number) ?? 0));
        } else if (mode === 'range') {
          // 범위 모드에서는 먼저 범위에 맞게 필터링
          filtered = questions.filter(q => 
            q.number >= startNumber && q.number <= endNumber
          );
          // randomOrder 순서대로 정렬
          const orderMap = new Map(randomOrder.map((num, idx) => [num, idx]));
          filtered.sort((a, b) => (orderMap.get(a.number) ?? 0) - (orderMap.get(b.number) ?? 0));
        }
      } else {
        // randomOrder가 없는 경우 새로운 순서 생성
        if (mode === 'random') {
          // 랜덤 모드에서는 전체 문제에서 랜덤하게 선택
          filtered = shuffleArray(questions).slice(0, questionCount);
          // 새로운 랜덤 순서를 examMode에 저장
          const newRandomOrder = filtered.map(q => q.number);
          set(state => ({
            examMode: { ...state.examMode!, randomOrder: newRandomOrder }
          }));
        } else if (mode === 'range') {
          // 범위 모드에서는 먼저 범위에 맞게 필터링
          filtered = questions.filter(q => 
            q.number >= startNumber && q.number <= endNumber
          );
          // 랜덤이 필요한 경우에만 섞기
          if (isRandom) {
            filtered = shuffleArray(filtered);
            // 새로운 랜덤 순서를 examMode에 저장
            const newRandomOrder = filtered.map(q => q.number);
            set(state => ({
              examMode: { ...state.examMode!, randomOrder: newRandomOrder }
            }));
          }
        }
      }
    }

    return {
      ...state,
      questions,
      filtered
    };
  }),
  save: () => {
    const { current, answers, completed, showAnswer, examMode, filtered } = get();
    localStorage.setItem('quiz-progress', JSON.stringify({ 
      current, 
      answers, 
      completed, 
      showAnswer,
      examMode,
      filtered: filtered.map(q => q.number)  // 문제 번호만 저장
    }));
  },
  setShowAnswer: (show) => set({ showAnswer: show }),
  setExamMode: (mode) => set(state => {
    let filtered = state.questions;
    let randomOrder: number[] | undefined;
    
    if (mode.mode === 'random') {
      filtered = shuffleArray(state.questions).slice(0, mode.questionCount);
      randomOrder = filtered.map(q => q.number);
    } else {
      filtered = state.questions.filter(q => 
        q.number >= mode.startNumber && q.number <= mode.endNumber
      );
      if (mode.isRandom) {
        filtered = shuffleArray(filtered);
        randomOrder = filtered.map(q => q.number);
      }
    }

    return { 
      examMode: { ...mode, randomOrder },
      filtered,
      current: 0,
      completed: false,
      showAnswer: false,
      answers: {}
    };
  }),
  clearExamMode: () => set(state => {
    localStorage.removeItem('quiz-progress');
    return {
      examMode: null,
      filtered: state.questions,
      current: 0,
      completed: false,
      showAnswer: false,
      answers: {}
    };
  }),
  retryWrongAnswers: () => set(state => {
    // 틀린 문제 찾기
    const wrongQuestions = state.filtered.filter(q => {
      const userAnswer = state.answers[q.number];
      return userAnswer !== q.answer;
    });

    if (wrongQuestions.length === 0) {
      alert('틀린 문제가 없습니다.');
      return state;
    }

    // 틀린 문제만 필터링하고 순서 섞기
    const shuffledWrongQuestions = shuffleArray(wrongQuestions);

    return {
      filtered: shuffledWrongQuestions,
      current: 0,
      completed: false,
      showAnswer: false,
      answers: {},
      examMode: {
        mode: 'range',
        questionCount: wrongQuestions.length,
        startNumber: Math.min(...wrongQuestions.map(q => q.number)),
        endNumber: Math.max(...wrongQuestions.map(q => q.number)),
        isRandom: true,
        randomOrder: shuffledWrongQuestions.map(q => q.number)
      }
    };
  })
})); 