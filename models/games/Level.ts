export type Level = "easy" | "medium" | "hard";

export const parseLevel = (level: string) => {
  const handleString = level.toLowerCase().trim();

  if (handleString === "hard") {
    return "hard" as Level;
  } else if (handleString === "medium") {
    return "medium" as Level;
  } else {
    return "easy" as Level;
  }
};
