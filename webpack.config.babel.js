import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

require('dotenv').config();

const distFolder = path.resolve(__dirname, 'dist');

export default {
  entry: ['react-hot-loader/patch', './src/index.js'],
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
      templateParameters: {
        openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
      },
    }),
  ],
};
