const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // your main JS file
  output: {
    filename: 'bundle.js',   // name of the bundled JS
    path: path.resolve(__dirname, 'dist'),
    clean: true,             // cleans old files in dist automatically
  },
  mode: 'development',
  devServer: {
    static: './dist',        // serve files from dist
    hot: true,               // enable hot reload
    port: 8080,              // optional: specify port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',  // your HTML skeleton
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,      // load CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
