const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  
  entry: './index.js',
  
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    alias: {
      utils: path.resolve(__dirname, './src/utils'),
      ['web-components']: path.resolve(__dirname, './src/web-components'),
      const: path.resolve(__dirname, './src/const'),
    }
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /\.web-component.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            }
          },
          {
            loader: "css-loader",
            options : {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
              },
            }
          },
          {
            loader: "sass-loader",
          }
        ]
      },
      {
        test: /\.web-component.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              // includePaths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
};
