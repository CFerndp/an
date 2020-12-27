import { getEnumLength, randomEnum } from "@/utils/randomEnum";

export enum Note {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
}

export const getAmericanRep = (note: Note) => {
  switch (note) {
    case Note.A:
      return "A";
    case Note.B:
      return "B";
    case Note.C:
      return "C";
    case Note.D:
      return "D";
    case Note.E:
      return "E";
    case Note.F:
      return "F";
    case Note.G:
      return "G";
  }
};

export const getEuropeanRep = (note: Note) => {
  switch (note) {
    case Note.A:
      return "LA";
    case Note.B:
      return "SI";
    case Note.C:
      return "DO";
    case Note.D:
      return "RE";
    case Note.E:
      return "MI";
    case Note.F:
      return "FA";
    case Note.G:
      return "SOL";
  }
};

export const getAudioNote = (note: Note) => {
  return new Audio(`/notes/${getAmericanRep(note)}.mp3`);
};

export const getRandomNote = (notesToAvoid: Note[] = []) => {
  if (notesToAvoid.length !== 0 && notesToAvoid.length < getEnumLength(Note)) {
    let note = randomEnum(Note);

    while (notesToAvoid.indexOf(note) >= 0) {
      note = randomEnum(Note);
    }

    return note;
  } else {
    return randomEnum(Note);
  }
};
