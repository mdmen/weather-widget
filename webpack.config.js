const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

const sourceFolder = path.resolve(__dirname, 'src');
const distFolder = path.resolve(__dirname, 'dist');

module.exports = {
  entry: ['react-hot-loader/patch', `${sourceFolder}/index.js`],
  output: {
    path: distFolder,
    filename: 'widget.min.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: distFolder,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: ['css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', sourceFolder],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      templateParameters: {
        openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
      },
    }),
  ],
};
