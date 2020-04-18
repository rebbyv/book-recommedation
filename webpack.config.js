module.exports = {
  entry: '/client/src/components/app.jsx',
  output: {
    path: '/client/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env, @babel/preset-react']
          }
        }
      }
    ]
  }
}