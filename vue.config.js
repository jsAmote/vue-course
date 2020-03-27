const path = require('path')

const resove = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resove('src'))
      .set('_c', resove('src/components'))
  },
  //打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:5000'
  }
}
