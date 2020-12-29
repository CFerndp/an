import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FocusableElement } from "@chakra-ui/utils";
import { Note } from "@/models/games/Note";
import { useTranslation } from "react-i18next";
import MusicBox from "@/components/MusicBox";

interface GuessFeedbackModalProps {
  question: Note;
  answer: Note;
  onClose: () => void;
  isOpen: boolean;
}

const GuessFeedbackModal: React.FC<GuessFeedbackModalProps> = ({
  question,
  answer,
  onClose,
  isOpen,
}) => {
  const cancelRef = useRef<FocusableElement>();
  const { t } = useTranslation("guess");

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef as React.RefObject<FocusableElement>}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{t("modal.title")}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <Grid>
            <GridItem>
              <Text>{t("modal.descrAnswer")}</Text>
            </GridItem>
            <GridItem>
              <MusicBox note={question} />
            </GridItem>
            <GridItem>
              <Text>{t("modal.descrGuess")}</Text>
            </GridItem>
            <GridItem>
              <MusicBox note={answer} isError />
            </GridItem>
          </Grid>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button colorScheme="green" onClick={onClose}>
            {t("common:accept")}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default GuessFeedbackModal;
