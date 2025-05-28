export interface Question {
  number: number;
  text: string;
  options: string[];
  answer: string;  // 단일 정답 (예: "A") 또는 복수 정답 (예: "AD")
  link: string;
  images?: {
    question?: string[];  // 문제 텍스트 내 이미지 URL 배열
    answer?: string[];    // 정답 영역 이미지 URL 배열
  };
  isMultipleChoice?: boolean;  // 복수 정답 여부 (answer 길이가 1보다 크면 true)
} 