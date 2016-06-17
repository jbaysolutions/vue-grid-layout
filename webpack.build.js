var config = require('./webpack.config.js')

config.entry = {
  'vue-grid-layout': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueGridLayout',
  libraryTarget: 'umd'
}


module.exports = config
