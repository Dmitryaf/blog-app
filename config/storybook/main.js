module.exports = {
  stories: ['../../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-addon-themes',
    '@storybook/addon-backgrounds',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
