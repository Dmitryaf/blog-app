import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { BuildPaths } from '../build/types/config';
import buildCssLoaders from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.unshift(paths.src);

  config.resolve?.extensions?.push('.ts', '.tsx');
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoaders(true));

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true,
    }),
  );

  return config;
};
