// webpack.config.js (ESM version)
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

// Needed because __dirname isn’t defined in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: ['./dist', './public'],
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
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

