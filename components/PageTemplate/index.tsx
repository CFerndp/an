import React, { Fragment } from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Container } from "next/app";

interface PageTemplateProps {
  headTitle?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ headTitle, children }) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <Head>
        <title>{headTitle ?? t("appName")}</title>
      </Head>
      <header>
        <Flex
          p={2}
          borderTop="5px"
          borderTopColor="green.400"
          borderStyle="solid"
          borderBottom="1px"
          borderBottomColor="gray.100"
          boxShadow="base"
          alignItems="center"
        >
          <Heading as="h1" size="lg" isTruncated>
            {headTitle ?? t("appName")}
          </Heading>
          <Icon w={8} h={8} color="green.400" marginLeft={2}>
            <FontAwesomeIcon icon={faMusic} />
          </Icon>
        </Flex>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </Fragment>
  );
};

export default PageTemplate;
