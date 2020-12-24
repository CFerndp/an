import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { Fragment } from "react";
import "@/lang/i18n";

import { useTranslation } from "react-i18next";
import theme from "@/theme/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <Head>
        <title>{t("appName")}</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Fragment>
  );
};

export default App;
