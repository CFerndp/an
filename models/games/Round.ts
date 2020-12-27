import { Answer } from "./Answer";
import { Question } from "./Question";

export interface Round {
  question: Question;
  answers: Answer[];
  correctAnswer: Answer;
}
