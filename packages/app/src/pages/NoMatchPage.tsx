import React from 'react';

import { useTranslation } from 'react-i18next';

import { Layout } from '../layout/Layout';

const NoMatchPage = () => {
  const { t } = useTranslation();

  return (
    <Layout center row>
      <h1>404</h1>
      <div>{t('error.404')}</div>
    </Layout>
  );
};

export default NoMatchPage;
