import webpack from 'webpack';

import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolves from './buildResolves';
import buildWebpackDevServer from './buildWebpackDevServer';
import { BuildOptions } from './types/config';

function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildWebpackDevServer(options) : undefined,
  };
}

export default buildWebpackConfig;
