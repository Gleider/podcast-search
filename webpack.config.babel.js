import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './index',
  output:{
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'podcastSearch',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {test:/\.js$/, use: 'babel-loader'},
    ]
  }
}