
import React from 'react';
import { action } from '@storybook/addon-actions';
import { radios } from '@storybook/addon-knobs';
import { Welcome } from 'cra-ts-styled-boilerplate-uikit';
// import { Welcome } from './Welcome';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import 'i18n';


export default {
  title: 'Docgen/Welcome',
  component: Welcome,
};

export const SimpleWelcome = () => {
  return <Welcome></Welcome>;
};

