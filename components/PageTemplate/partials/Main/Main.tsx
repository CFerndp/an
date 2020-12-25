import { Box, Center } from "@chakra-ui/react";
import React from "react";

const Main: React.FC = ({ children }) => {
  return (
    <Center w="100%" h="100%">
      <Box
        maxW="xxl"
        w="100%"
        h="80%"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="base"
        p={4}
      >
        {children}
      </Box>
    </Center>
  );
};

export default Main;
