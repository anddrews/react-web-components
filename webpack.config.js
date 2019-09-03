const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

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
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
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
  ],
};
