import { Stats } from "./Stats";
import { Level } from "./Level";
import { Round } from "./Round";

export interface Game {
  level: Level;
  actualRound: number;
  rounds: Round[];
  stats: Stats;

  startGame: () => void;
  endGame: () => void;
  getNextRound: () => Round | null;
  hasMoreRounds: () => boolean;
}
