module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);

      if (oneOfRule) {
        oneOfRule.oneOf.unshift({
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'static/media',
                publicPath: 'static/media',
              },
            },
          ],
        });
      }

      return webpackConfig;
    },
  },
};
