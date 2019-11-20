import path from 'path';

export const moduleScopePluginOpts = [
  path.resolve(process.cwd(), 'README.md')
];

export default (conf, opts, webpack) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  // Webpack parses md file text
  conf.module.rules.map((item) => {
    if (item.oneOf) {
      item.oneOf.unshift({
        test: /\.md$/,
        use: require.resolve('raw-loader'),
      });
    }
    return item;
  });

  // Get the project version.
  conf.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );

  return conf;
}

