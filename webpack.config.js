const path = require('path')

const inPath = path.join(__dirname, 'src')
const ouPath = path.join(__dirname, 'dist')

module.exports = {
  entry: [path.join(inPath, 'app.js')],
  output: {
    path: ouPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: inPath, loaders: ['babel-loader']}
    ]
  },
  devServer: {
    contentBase: ouPath
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      handsontable: path.resolve(__dirname, 'node_modules/handsontable-pro')
    }
  }
}