import { Box, Center } from "@chakra-ui/react";
import React from "react";

const Main: React.FC = ({ children }) => {
  return (
    <Center w="100%" h="100%">
      <Box
        width={[
          "100%", // 0-30em
          "70%", // 30em-48em
          null, // 48em-62em
          "50%", // 62em+
        ]}
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
