import MusicBox from "@/components/MusicBox";
import { GuessAnswer } from "@/models/games/guess/GuessAnswer";
import { GuessRound } from "@/models/games/guess/GuessRound";
import { Level } from "@/models/games/Level";
import {
  Button,
  Flex,
  useDisclosure,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { Fragment, useCallback, useEffect, useState } from "react";
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
  const [answer, setAnswer] = useState<GuessAnswer | null>(() => null);

  const getOnClick = useCallback(
    (answer: GuessAnswer) => () => {
      setAnswer(answer);
    },
    []
  );

  const onClickNext = useCallback(() => {
    if (answer) {
      if (!round.question.checkAnswer(answer)) {
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
    }
  }, [answer]);

  const onCloseModal = useCallback(() => {
    if (answer) {
      onToggle();
      onNext(answer);
    }
  }, [answer]);

  useEffect(() => setAnswer(null), [round]);

  return (
    <Fragment>
      <Flex direction="column" w="100%">
        <MusicBox note={round.question.noteToGuess} isHidden />
        <Wrap marginTop={5} align="center" justify="center">
          {round.answers.map((itemAnswer, index) => (
            <WrapItem w="7rem" key={`musicboxresponse-${index}`}>
              <MusicBox
                isSelected={itemAnswer === answer}
                note={itemAnswer.getNote()}
                onClick={getOnClick(itemAnswer)}
                isPlayable={level === "easy"}
              />
            </WrapItem>
          ))}
        </Wrap>
        <Button marginTop={5} onClick={onClickNext} isDisabled={!answer}>
          {t("nextButton")}
        </Button>
      </Flex>
      {isOpen && answer && (
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
