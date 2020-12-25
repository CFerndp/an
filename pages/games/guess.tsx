import React from "react";
import { useRouter } from "next/router";

import { useTranslation } from "react-i18next";
import PageTemplate from "@/components/PageTemplate";
import { Grid, GridItem, Heading } from "@chakra-ui/react";

const GuessGame: React.FC = () => {
  const { t } = useTranslation("guess");
  const router = useRouter();
  const { level } = router.query;

  console.log(level);

  return (
    <PageTemplate>
      <Grid h="100%" templateRows="1fr 1fr 9fr">
        <GridItem>
          <Heading textAlign="center">{t("title")}</Heading>
        </GridItem>
      </Grid>
    </PageTemplate>
  );
};

export default GuessGame;
