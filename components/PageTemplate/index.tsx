import React, { Fragment } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Header from "./partials/Header/Header";
import Footer from "./partials/Footer/Footer";
import Main from "./partials/Main/Main";

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
      <Grid
        h="100vh"
        maxH="100vh"
        templateRows="10% auto 15%"
        templateColumns="1fr 7fr 1fr"
        templateAreas={`"header header header" ". main ." "footer footer footer"`}
      >
        <GridItem as="header" gridArea="header">
          <Header title={headTitle ?? t("appName")} />
        </GridItem>
        <GridItem as="main" gridArea="main">
          <Main>{children}</Main>
        </GridItem>
        <GridItem as="footer" gridArea="footer">
          <Footer />
        </GridItem>
      </Grid>
    </Fragment>
  );
};

export default PageTemplate;
