const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './js/[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              url: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pug/index.pug'),
      filename: 'index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*', '**/commons.*'],
    }),
  ],
};
