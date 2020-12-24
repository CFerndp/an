import React, { Fragment } from "react";

import { useTranslation } from "react-i18next";
import PageTemplate from "@/components/PageTemplate";

const Index: React.FC = () => {
  const { t } = useTranslation("index");
  return (
    <PageTemplate>
      <main>hola!</main>
    </PageTemplate>
  );
};

export default Index;
