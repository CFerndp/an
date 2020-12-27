import { GuessAnswer } from './GuessAnswer';
import { getAudioNote, Note } from './../Note';
import { Question } from './../Question';

export class GuessQuestion implements Question {

    private noteToGuess: Note;

    constructor(note: Note) {
        this.noteToGuess = note;
    }

    getNoteSound() {
        return getAudioNote(this.noteToGuess);
    }
    
    checkAnswer(answer: GuessAnswer) {
        return this.noteToGuess === answer.getNote();
    }
}