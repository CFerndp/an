import MusicBox from "@/components/MusicBox";
import { GuessAnswer } from "@/models/games/guess/GuessAnswer";
import { GuessRound } from "@/models/games/guess/GuessRound";
import { Level } from "@/models/games/Level";
import { Flex, Grid, GridItem, Wrap, WrapItem } from "@chakra-ui/react";
import React, { Fragment } from "react";

interface GuessRoundComponentProps {
  round: GuessRound;
  level: Level;
  onNext: (guess: GuessAnswer) => void;
}

const GuessRoundComponent: React.FC<GuessRoundComponentProps> = ({
  round,
  level,
  onNext,
}) => {
  const getOnClick = (answer: GuessAnswer) => () => {
    onNext(answer);
  };

  return (
    <Flex direction="column" w="100%">
      <MusicBox note={round.question.noteToGuess} isHidden />
      <Wrap marginTop={5} alignItems="center" justifyContent="center">
        {round.answers.map((answer, index) => (
          <WrapItem w="7rem">
            <MusicBox
              key={`musicboxresponse-${index}`}
              note={answer.getNote()}
              onClick={getOnClick(answer)}
              isPlayable={level === "easy"}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default GuessRoundComponent;
