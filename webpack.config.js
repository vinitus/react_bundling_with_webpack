// mjs와 cjs 중 무엇이 옳은지는 모르겠음..
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 진입점 설정
  entry: './src/index.tsx',
  // 아웃풋 설정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // 타입 스크립트를 사용하는 경우, babel-loader를 사용하지 않아도 됨
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  // resolve는 웹팩이 지정한 파일을 해석하는 방법을 지정하는 것이고
  // extensions는 추가로 해석할 파일을 지정하는 것
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    // filename이 index.html이라면 필요가 없음
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
