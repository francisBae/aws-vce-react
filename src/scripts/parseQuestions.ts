const fs = require('fs');
const path = require('path');
const { extractImages, removeImageMarkdown } = require('../utils/parseImage');
/** @typedef {import('../types/question').Question} Question */

function parseQuestions(content) {
  /** @type {Question[]} */
  const questions = [];
  const questionRegex = /## (\d+)\n\n([\s\S]*?)(?=\n\n## \d+|\n\n$)/g;
  const optionRegex = /([A-E]\.\s*[^\n]+)/g;
  
  let match;
  while ((match = questionRegex.exec(content)) !== null) {
    const [, number, content] = match;
    
    // 문제 텍스트 추출
    const questionText = content.split('\n\n')[0].trim();
    
    // 선택지 추출
    const optionsMatch = content.match(optionRegex);
    const options = optionsMatch ? optionsMatch.map(opt => opt.replace(/^[A-E]\.\s*/, '').trim()) : [];
    
    // 정답 추출
    const answerMatch = content.match(/정답:\s*([A-E]+)/);
    const answer = answerMatch ? answerMatch[1] : '';
    
    // 링크 추출
    const linkMatch = content.match(/\[원문보기\]\((https:\/\/[^)]+)\)/);
    const link = linkMatch ? linkMatch[1] : '';
    
    // 이미지 추출
    const images = {
      question: extractImages(questionText),
      answer: extractImages(content)
    };

    // 이미지 마크다운 제거
    const cleanQuestionText = removeImageMarkdown(questionText);
    
    questions.push({
      number: parseInt(number),
      text: cleanQuestionText,
      options,
      answer,
      link,
      images: {
        question: images.question.length > 0 ? images.question : undefined,
        answer: images.answer.length > 0 ? images.answer : undefined
      },
      isMultipleChoice: answer.length > 1
    });
  }

  return questions;
}

// README.md 파일 읽기
const readmePath = path.join(process.cwd(), 'README.md');
const content = fs.readFileSync(readmePath, 'utf-8');

// 문제 파싱
const questions = parseQuestions(content);

// TypeScript 파일 생성
const outputPath = path.join(process.cwd(), 'src', 'data', 'questions.ts');
const outputContent = `// 이 파일은 자동으로 생성되었습니다. 직접 수정하지 마세요.\nimport { Question } from '../types/question';\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`;

// 디렉토리가 없으면 생성
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 파일 쓰기
fs.writeFileSync(outputPath, outputContent);

console.log(`Generated ${questions.length} questions in ${outputPath}`); 