import { Flex } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex
      p={2}
      borderBottom="5px"
      borderBottomColor="green.400"
      borderStyle="solid"
      borderTop="1px"
      borderTopColor="gray.100"
      boxShadow="base"
      alignItems="center"
      h="100%"
    >
      Footer
    </Flex>
  );
};

export default Footer;
