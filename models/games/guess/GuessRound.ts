import { Level } from "../Level";
import { getRandomNote, Note } from "../Note";
import { Round } from "../Round";
import { GuessAnswer } from "./GuessAnswer";
import { GuessQuestion } from "./GuessQuestion";

const EASY_FALSE_ASNWERS = 1;
const MEDIUM_FALSE_ASNWERS = 2;
const HARD_FALSE_ASNWERS = 3;

export class GuessRound implements Round {
  question: GuessQuestion;
  answers: GuessAnswer[];
  correctAnswer: GuessAnswer;

  constructor(level: Level) {
    const correctNote = getRandomNote();
    this.question = new GuessQuestion(correctNote);
    this.correctAnswer = new GuessAnswer(correctNote);

    this.answers = [this.correctAnswer];

    let falseAnswers = EASY_FALSE_ASNWERS;

    if (level === "medium") {
      falseAnswers = MEDIUM_FALSE_ASNWERS;
    } else if (level === "hard") {
      falseAnswers = HARD_FALSE_ASNWERS;
    }

    let answerNotes: Note[] = [];

    for (let i = 0; i < falseAnswers; i++) {
      this.answers.push(
        new GuessAnswer(getRandomNote([correctNote, ...answerNotes]))
      );
    }
  }
}
