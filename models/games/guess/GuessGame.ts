import { Level } from "./../Level";
import { Game } from "./../Game";
import { GuessRound } from "./GuessRound";
import { getInitStats, Stats } from "../Stats";

const NUMBER_OF_ROUNDS = 10;

export class GuessGame implements Game {
  level: Level;
  actualRound: number;
  rounds: GuessRound[];
  stats: Stats;

  constructor(level: Level) {
    this.actualRound = -1;
    this.level = level;
    this.rounds = [];

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
      this.rounds.push(new GuessRound(level));
    }

    this.stats = getInitStats(this.rounds.length);
  }

  startGame() {
    this.stats.startTime = Date.now();
  }

  endGame() {
    this.stats.endTime = Date.now();
  }

  hasMoreRounds() {
    return this.actualRound < this.rounds.length;
  }

  getNextRound() {
    if (this.hasMoreRounds()) {
      this.actualRound++;
      const round = this.rounds[this.actualRound];

      return round;
    } else {
      return null;
    }
  }
}
