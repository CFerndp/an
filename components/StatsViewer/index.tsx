import { Stats } from "@/models/games/Stats";
import { Stat, StatLabel, StatNumber, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";

interface StatsProps {
  stats: Stats;
}

const StatsViewer: React.FC<StatsProps> = ({ stats }) => {
  const { t } = useTranslation("common");
  return (
    <Wrap align="center" justify="center">
      <WrapItem>
        <Stat>
          <StatLabel>{t("stats.numberRounds")}</StatLabel>
          <StatNumber>{stats.numberRounds}</StatNumber>
        </Stat>
      </WrapItem>
      <WrapItem>
        <Stat>
          <StatLabel>{t("stats.success")}</StatLabel>
          <StatNumber>{stats.success}</StatNumber>
        </Stat>
      </WrapItem>
      <WrapItem>
        <Stat>
          <StatLabel>{t("stats.errors")}</StatLabel>
          <StatNumber>{stats.errors}</StatNumber>
        </Stat>
      </WrapItem>
      <WrapItem>
        <Stat>
          <StatLabel>{t("stats.time")}</StatLabel>
          <StatNumber>
            {moment
              .utc(moment(stats.endTime).diff(moment(stats.startTime)))
              .format("HH:mm:ss")}
          </StatNumber>
        </Stat>
      </WrapItem>
    </Wrap>
  );
};

export default StatsViewer;
