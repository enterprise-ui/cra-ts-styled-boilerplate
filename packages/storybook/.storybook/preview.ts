import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addParameters({
  options: {
    brandTitle: 'cra-ts-styled-boilerplate-storybook',
    brandUrl: 'https://github.com/enterprise-ui/cra-ts-styled-boilerplate',
    showRoots: true,
  },
});
