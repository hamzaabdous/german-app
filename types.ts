
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export interface VocabularyItem {
  de: string;
  en: string;
  ar: string;
  phonetic?: string;
}

export interface ExampleSentence {
  de: string;
  en: string;
  ar: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  type: 'mcq' | 'fill';
}

export interface GermanLesson {
  level: Level;
  unit: string;
  vocabulary: VocabularyItem[];
  grammar: string;
  examples: ExampleSentence[];
  speaking: {
    dialogue: string;
    roleplay: string;
  };
  listening: {
    script: string;
  };
  reading: {
    text: string;
    questions: { q: string; options: string[]; correct: string }[];
  };
  writing: {
    prompt: string;
    sample: string;
  };
  pronunciation: string;
  quiz: QuizQuestion[];
  culture: string;
}
