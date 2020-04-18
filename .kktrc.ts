import path from 'path';
import { OptionConf, ModuleScopePluginOpts } from 'kkt';
import webpack, { Configuration } from 'webpack';

type Webpack = typeof webpack;

export const moduleScopePluginOpts: ModuleScopePluginOpts = [
  path.resolve(process.cwd(), 'README.md')
];

export default (conf: Configuration, opts: OptionConf, webpack: Webpack) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  // Webpack parses md file text
  conf.module!.rules.map((item) => {
    if (item.oneOf) {
      item.oneOf.unshift({
        test: /\.md$/,
        use: require.resolve('raw-loader'),
      });
    }
    return item;
  });

  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );

  conf.output = { ...conf.output, publicPath: './' }

  return conf;
}

