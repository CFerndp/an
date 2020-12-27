import { Flex, Link, Skeleton, Tag } from "@chakra-ui/react";
import moment from "moment";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");

  return (
    <Fragment>
      <Flex
        p={3}
        borderStyle="solid"
        borderTop="1px"
        borderTopColor="green.100"
        boxShadow="base"
        alignItems="center"
        justifyContent="space-between"
        h="97%"
        direction="row"
      >
        <Tag
          borderRadius="full"
          variant="solid"
          colorScheme="blue"
          fontSize="xs"
        >
          <Link href="https://github.com/CFerndp/an" isExternal>
            {t("desc")}
          </Link>
        </Tag>
        <Tag
          borderRadius="full"
          variant="solid"
          colorScheme="red"
          fontSize="xs"
        >
          <Link href="https://github.com/CFerndp" isExternal>
            {t("copy", { year: moment().format("YYYY") })}
          </Link>
        </Tag>
      </Flex>
      <Skeleton startColor="green.500" endColor="blue.500" height="3%" />
    </Fragment>
  );
};

export default Footer;
