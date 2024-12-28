export interface FAQQuestionType {
  question: string;
  answer: string;
  slug: string;
}

export interface FAQCategoryType {
  title: string;
  questions: FAQQuestionType[];
}

export type FAQDataType = FAQCategoryType[];