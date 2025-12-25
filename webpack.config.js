// webpack.config.js (ESM)
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '', 
  },

  mode: 'production',

  devServer: {
    static: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public'),
    ],
    hot: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),

    
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/images'),
          to: 'images',
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};


