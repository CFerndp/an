import { Flex, Link, Tag } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");

  return (
    <Flex
      p={3}
      borderBottom="5px"
      borderBottomColor="green.400"
      borderStyle="solid"
      borderTop="1px"
      borderTopColor="green.100"
      boxShadow="base"
      alignItems="flex-start"
      justifyContent="space-evenly"
      h="100%"
      direction="column"
    >
      <Tag borderRadius="full" variant="solid" colorScheme="blue" fontSize="xs">
        <Link href="https://github.com/CFerndp/an" isExternal>
          {t("desc")}
        </Link>
      </Tag>
      <Tag borderRadius="full" variant="solid" colorScheme="red" fontSize="xs">
        <Link href="https://github.com/CFerndp" isExternal>
          {t("copy", { year: moment().format("YYYY") })}
        </Link>
      </Tag>
    </Flex>
  );
};

export default Footer;
