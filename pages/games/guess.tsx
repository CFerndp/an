import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useTranslation } from "react-i18next";
import PageTemplate from "@/components/PageTemplate";
import { Button, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { parseLevel } from "@/models/games/Level";
import { GuessGame } from "@/models/games/guess/GuessGame";

import GuessRoundComponent from "@/components/PagePartials/games/guess/GuessRound";
import { GuessAnswer } from "@/models/games/guess/GuessAnswer";
import StatsViewer from "@/components/StatsViewer";
import Paths from "@/utils/Paths";

const GuessGamePage: React.FC = () => {
  const { t } = useTranslation("guess");
  const router = useRouter();
  const { level } = router.query;

  const [realLevel] = useState(parseLevel(level as string));

  const [game] = useState(new GuessGame(realLevel));
  const [round, setRound] = useState(() => game.getNextRound());

  const goHome = () => router.push(Paths.Default);

  const onNext = useCallback(
    (guess: GuessAnswer) => {
      if (round) {
        round.question.checkAnswer(guess)
          ? game.stats.success++
          : game.stats.errors++;

        const nextRound = game.getNextRound();

        if (!nextRound) {
          game.endGame();
        }

        setRound(nextRound);
      }
    },
    [game]
  );

  useEffect(() => {
    game.startGame();
  }, []);

  return (
    <PageTemplate>
      <Grid h="100%" w="100%" templateRows="1fr 1fr 1fr 5fr">
        <GridItem>
          <Heading textAlign="center">{t("title")}</Heading>
        </GridItem>
        <GridItem>
          <Text as="h3" fontSize="3xl" textAlign="center">
            {t("instructions")}
          </Text>
        </GridItem>
        <GridItem>
          <Text as="h4" fontSize="2xl" textAlign="center">
            {round
              ? t("roundCounter", {
                  actualRound: game.actualRound + 1,
                  totalRound: game.rounds.length,
                })
              : t("wellDone")}
          </Text>
        </GridItem>
        <GridItem>
          {round ? (
            <GuessRoundComponent
              round={round}
              onNext={onNext}
              level={game.level}
            />
          ) : (
            <Flex direction="column" justifyContent="space-evenly" h="100%">
              <Text align="center">{t("finishedRound")}</Text>
              <StatsViewer stats={game.stats} />
              <Button onClick={goHome} colorScheme="green" isFullWidth>
                {t("common:accept")}
              </Button>
            </Flex>
          )}
        </GridItem>
      </Grid>
    </PageTemplate>
  );
};

export default GuessGamePage;
