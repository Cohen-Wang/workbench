module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    // 反向代理
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      '/api': {
        // 配置跨域
        target: 'https://vuets-api.herokuapp.com/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: app => {}
  },
  // 基本路径，vue.cli 3.3 以前请使用baseUrl
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 用于嵌套生成的静态资源（js, css, img, fonts）的目录
  assetsDir: '',
  // 生产环境sourceMap
  productionSourceMap: true,
  // webpack配置
  configureWebpack: () => {},
  chainWebpack: () => {},
  // css相关配置
  // css: {
  //     modules: false,// 启用 css modules
  //     extract: true,// 是否使用css分离插件
  //     sourceMap: false,// 开启 css source maps?
  //     loaderOptions: {},// css 预设器配置项
  // },
  // 第三方插件
  pluginOptions: {
    // ...
  }
}
