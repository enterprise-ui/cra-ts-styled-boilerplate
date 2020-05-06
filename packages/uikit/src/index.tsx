import React, { FunctionComponent } from 'react'; // importing FunctionComponent

import { Trans } from 'react-i18next';


type WelcomeProps = {
    postfix?: string
}

export const Welcome: FunctionComponent<WelcomeProps> = ({ postfix }) => (
  <Trans i18nKey="welcome_message">
  </Trans>
)