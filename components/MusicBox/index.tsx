import {
  getAmericanRep,
  getEuropeanRep,
  Note,
  getAudioNote,
} from "@/models/games/Note";
import { Box, Text } from "@chakra-ui/react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

interface MusicBoxProps {
  note: Note;
  isAmerican?: boolean;
  isError?: Boolean;
  isPlayable?: boolean;
  isHidden?: boolean;
  onClick?: () => void;
}

const MusicBox: React.FC<MusicBoxProps> = ({
  note,
  isAmerican = true,
  isHidden = false,
  isError = false,
  isPlayable = true,
  onClick = () => {},
}) => {
  const audioNote = getAudioNote(note);

  const onClickHandle = () => {
    if (isPlayable) {
      audioNote.play();
    }
  };

  useEffect(() => {
    if (isHidden) {
      audioNote.play();
    }
  }, []);

  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="green.200"
      bg={`${isError ? "red" : "green"}.100`}
      overflow="hidden"
      onClick={onClickHandle}
      onDoubleClick={onClick}
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
