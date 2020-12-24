import { ThemeProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { Fragment } from "react";
import "@/lang/i18n";

import { useTranslation } from "react-i18next";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <Head>
        <title>{t("appName")}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
