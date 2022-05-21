const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // mode: 'production',
  resolve: {
    fallback: {
      url: false,
    }
  },
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
      static: './dist',
      hot: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement',
    // })
    // ,
    new MiniCssExtractPlugin({
      filename: './style.css'
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
        test: /\.css/,
        use: [
            // 'style-loader',
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
        ],
        },
        {

        }
    ] // end rules
  }
};