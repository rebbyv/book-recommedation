const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  // devtool: 'eval',
  module: {
    rules: [
      {
        test: /.tsx$/,
        exclude: [/node_modules/, /jsx_files/],
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
}
