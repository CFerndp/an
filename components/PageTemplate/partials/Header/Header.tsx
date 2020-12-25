import { Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Flex
      p={2}
      borderTop="5px"
      borderTopColor="green.400"
      borderStyle="solid"
      borderBottom="1px"
      borderBottomColor="green.100"
      boxShadow="base"
      alignItems="center"
      h="100%"
    >
      <Link href="/">
        <Flex>
          <Heading as="h1" size="lg" isTruncated>
            {title}
          </Heading>
          <Icon w={8} h={8} color="green.400" marginLeft={2}>
            <FontAwesomeIcon icon={faMusic} />
          </Icon>
        </Flex>
      </Link>
    </Flex>
  );
};

export default Header;
