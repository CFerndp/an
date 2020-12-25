import React, { Fragment, useCallback } from "react";

import { useTranslation } from "react-i18next";
import PageTemplate from "@/components/PageTemplate";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Paths from "@/utils/Paths";

const Index: React.FC = () => {
  const { t } = useTranslation("index");

  const router = useRouter();

  const onClickRouting = useCallback(
    (level) => () =>
      router.push({ pathname: Paths.Games.Guess, query: { level } }),
    [router]
  );

  return (
    <PageTemplate>
      <Grid h="100%" templateRows="1fr 1fr 9fr">
        <GridItem>
          <Heading textAlign="center">{t("title")}</Heading>
        </GridItem>
        <GridItem>
          <Text as="h3" fontSize="2xl" textAlign="center">
            {t("subtitle")}
          </Text>
        </GridItem>
        <GridItem>
          <Flex
            direction="column"
            h="100%"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Tooltip label={t("easyLevelTooltip")}>
              <Button
                onClick={onClickRouting("easy")}
                size="lg"
                colorScheme="green"
                variant="outline"
                w="100%"
              >
                {t("easyLevelButton")}
              </Button>
            </Tooltip>
            <Tooltip label={t("mediumLevelTooltip")}>
              <Button
                onClick={onClickRouting(`medium`)}
                size="lg"
                colorScheme="green"
                variant="outline"
                w="100%"
              >
                {t("mediumLevelButton")}
              </Button>
            </Tooltip>
            <Tooltip label={t("hardLevelTooltip")}>
              <Button
                onClick={onClickRouting(`hard`)}
                size="lg"
                colorScheme="green"
                variant="outline"
                w="100%"
              >
                {t("hardLevelButton")}
              </Button>
            </Tooltip>
          </Flex>
        </GridItem>
      </Grid>
    </PageTemplate>
  );
};

export default Index;
