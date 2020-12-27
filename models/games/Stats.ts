export type Stats = {
  numberRounds: number;
  errors: number;
  success: number;
  startTime: number;
  endTime: number;
};

export const getInitStats = (numberRounds: number) => ({
  numberRounds,
  errors: 0,
  success: 0,
  startTime: -1,
  endTime: -1,
});
