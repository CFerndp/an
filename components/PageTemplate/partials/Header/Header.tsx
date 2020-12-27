import { Flex, Heading, Icon, Link, Skeleton } from "@chakra-ui/react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Fragment>
      <Skeleton startColor="green.500" endColor="blue.500" height="5%" />
      <Flex
        p={2}
        borderStyle="solid"
        borderBottom="1px"
        borderBottomColor="green.100"
        boxShadow="base"
        alignItems="center"
        h="95%"
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
    </Fragment>
  );
};

export default Header;
