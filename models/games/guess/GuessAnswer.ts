import { getAudioNote, Note } from './../Note';
import { Answer } from './../Answer';

export class GuessAnswer implements Answer {

    private note: Note;

    constructor(note: Note) {
        this.note = note;
    }

    getNoteSound() {
        return getAudioNote(this.note);
    }
    
    getNote() {
        return this.note;
    }

}