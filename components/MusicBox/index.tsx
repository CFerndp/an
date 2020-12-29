import {
  getAmericanRep,
  getEuropeanRep,
  Note,
  getAudioNote,
} from "@/models/games/Note";
import { Box, Text } from "@chakra-ui/react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";

interface MusicBoxProps {
  note: Note;
  isAmerican?: boolean;
  isError?: boolean;
  isPlayable?: boolean;
  isHidden?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const getBGColor = (isError: boolean, isSelected: boolean) => {
  if (isError) {
    return "red";
  } else if (isSelected) {
    return "blue";
  } else {
    return "green";
  }
};

const MusicBox: React.FC<MusicBoxProps> = ({
  note,
  isAmerican = true,
  isHidden = false,
  isError = false,
  isPlayable = true,
  isSelected = false,
  onClick = () => {},
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const onClickHandle = useCallback(() => {
    if (isPlayable && audio) {
      audio.play();
    }

    onClick();
  }, [audio]);

  useEffect(() => {
    const audioNote = getAudioNote(note);

    setAudio(audioNote);

    if (isHidden) {
      audioNote.play();
    }
  }, [note]);

  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="green.200"
      bg={`${getBGColor(isError, isSelected)}.100`}
      overflow="hidden"
      onClick={onClickHandle}
      textAlign="center"
      textColor="blue.500"
    >
      {isHidden ? (
        <Text fontSize="6xl" color="blue.500">
          <FontAwesomeIcon icon={faMusic} />
        </Text>
      ) : (
        <Text fontSize="6xl">
          {isAmerican ? getAmericanRep(note) : getEuropeanRep(note)}
        </Text>
      )}
    </Box>
  );
};

export default MusicBox;
