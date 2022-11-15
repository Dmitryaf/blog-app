import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';

addDecorator(withThemes);
addDecorator(StyleDecorator);
addDecorator(withRouter);
/* eslint-disable import/prefer-default-export */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'primary',
    icon: 'switchalt',
    list: [
      {
        name: 'primary',
        class: ['app', 'app_primary_theme'],
        color: '#fff7f2',
      },
      {
        name: 'secondary',
        class: ['app', 'app_secondary_theme'],
        color: '#1d1a2d',
      },
    ],
  },
  backgrounds: {
    disable: true,
  },
};
