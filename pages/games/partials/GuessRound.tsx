import MusicBox from "@/components/MusicBox";
import { GuessAnswer } from "@/models/games/guess/GuessAnswer";
import { GuessRound } from "@/models/games/guess/GuessRound";
import { Level } from "@/models/games/Level";
import {
  Flex,
  useDisclosure,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { Fragment, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import GuessFeedbackModal from "./GuessFeedbackModal";

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
  const { t } = useTranslation("guess");
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();
  const [answer, setAnswer] = useState<GuessAnswer>(round.answers[0]);

  const getOnClick = (answer: GuessAnswer) => () => {
    if (!round.question.checkAnswer(answer)) {
      setAnswer(answer);
      onToggle();
    } else {
      toast({
        title: t("toast.title"),
        description: t("toast.msg"),
        status: "success",
        duration: 800,
        isClosable: true,
      });
      onNext(answer);
    }
  };

  const onCloseModal = useCallback(() => {
    onToggle();
    onNext(answer);
  }, [answer]);

  return (
    <Fragment>
      <Flex direction="column" w="100%">
        <MusicBox note={round.question.noteToGuess} isHidden />
        <Wrap marginTop={5} align="center" justify="center">
          {round.answers.map((answer, index) => (
            <WrapItem w="7rem" key={`musicboxresponse-${index}`}>
              <MusicBox
                note={answer.getNote()}
                onClick={getOnClick(answer)}
                isPlayable={level === "easy"}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
      {isOpen && (
        <GuessFeedbackModal
          isOpen={isOpen}
          question={round.question.noteToGuess}
          answer={answer.getNote()}
          onClose={onCloseModal}
        />
      )}
    </Fragment>
  );
};

export default GuessRoundComponent;
