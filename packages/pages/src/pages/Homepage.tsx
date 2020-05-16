import React from 'react';

import { withController } from 'cra-ts-styled-boilerplate-core';
import { Welcome } from 'cra-ts-styled-boilerplate-uikit';
import { Trans, useTranslation } from 'react-i18next';
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';

// import { ReactComponent as Logo } from '../assets/logo.svg';
import { Layout } from '../layout/Layout';
import { accentColor } from '../styles/theme';

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const SpinningLogo = styled(Logo)`
//   height: 40vh;
//   color: ${accentColor};
//   fill: currentColor;

//   @media (prefers-reduced-motion: no-preference) {
//     animation: ${rotate} infinite 15s linear;
//   }
// `;

const Button = styled.a`
  display: inline-block;
  color: white;
  background-color: ${accentColor};
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 3px;
  border: 2px solid ${accentColor};
  transition: background-color 0.2s ease-out;
  transition: color 0.2s ease-out;
  font-weight: bold;

  &:hover {
    background-color: transparent;
    color: ${accentColor};
  }
`;

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <Layout center>
      {/* <SpinningLogo /> */}
      <p>
        <Trans i18nKey="welcome_message">
          Edit <code>src/pages/Homepage.js</code> and save to reload1.
        </Trans>
        <Welcome />
      </p>
      <Button href="https://reactjs.org">{t('learn_react')}</Button>
    </Layout>
  );
};

Homepage.displayName = 'Demo.Homepage';

export default withController(Homepage);
