const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 9000
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jp(e*)g|ico)$/,
        loader: 'url-loader',
        options: { 
          limit: 8000,
          name: 'images/[hash]-[name].[ext]'
        }
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './font/[hash].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin(),
  ]
};
