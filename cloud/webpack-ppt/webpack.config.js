
// 学习要点： 不要纠结在api和命令
// Webpack是属于Node的程序，Node环境下的环境变量，Webpack可以配置，可以灵活读取。

module.exports = {
  // +-----------------------------------------------------------------------------------------
  // | 上下文：如果我们不设置context的值，context默认的值就是项目的根目录
  // +-----------------------------------------------------------------------------------------	
  context: path.resolve(__dirname, '../'),
  // +-----------------------------------------------------------------------------------------
  // | mode - 模式： 告诉webpack是生产环境还是开发环境；"production" | "development" | "none"
  // +-----------------------------------------------------------------------------------------
  mode: "production",
  // +-----------------------------------------------------------------------------------------
  // | entry - 入口：工程依赖入口
  // | 可以指定多个入口起点
  // +-----------------------------------------------------------------------------------------
  entry: {
    app: './src/main.js'
  },
  // +-----------------------------------------------------------------------------------------
  // | output - 输出：只可指定一个输出配置；必须是绝对路径
  // +-----------------------------------------------------------------------------------------
  output: {
    path: path.join(__dirname, 'dist') // 输出的路径；必须是绝对luj
    filename: '[name].js', // 输出文件的名称
  },
  // +-----------------------------------------------------------------------------------------
  // | resolve - 解决：解决模块请求的选项
  // +-----------------------------------------------------------------------------------------
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.json'], // 在导入语句没有带文件后缀的时候，自动带上这些后缀去尝试访问文件。 import router from './router'
    alias: { // 通过别名来将原导入路径映射成一个新的导入路径
      'vue$': 'vue/dist/vue.esm.js', // $ 缩小范围符
      '@': resolve('src')
    }
  },
  // +-----------------------------------------------------------------------------------------
  // | 重点
  // | loader: 用于对模块的源代码进行转换
  // | 特点：①什么时候用 ②用哪个
  // +-----------------------------------------------------------------------------------------
  module: {
    rules: [
	  // 处理.css文件
	  {
	    test: /\.css$/,
		loader: "style!css"
	  },
	  // 处理.less文件
	  {
	    test: /\.less/,
	    loader: 'style-loader!css-loader!less-loader'
	  },
	  // 处理.js文件 - es6
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
        ]
      },
	  // 处理.vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
	  // svg
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
	  // 图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
	  // 视频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
	  // 字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // +-----------------------------------------------------------------------------------------
  // | 重点
  // | plugins - 插件：①什么时候用 ②用哪个
  // | 特点：①什么时候用 ②用哪个
  // +-----------------------------------------------------------------------------------------
  plugins: [
	new UglifyJsPlugin(), // 压缩js代码，如：注释，换行，变量名称
	new FriendlyErrorsWebpackPlugin(), // 识别某些类别的webpack错误，并清理，聚合和优先级，以提供更好的开发人员体验。
	new VueLoaderPlugin(),
	new CopyWebpackPlugin([ // 将单个文件或整个目录复制到构建目录
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ],
  // +-----------------------------------------------------------------------------------------
  // | 重点
  // | 代理服务： 
  // +-----------------------------------------------------------------------------------------
  devServer: {
	host: HOST || config.dev.host, // 用于配置devServer服务监听的地址，默认：127.0.0.1
    port: PORT || config.dev.port, // 用于配置devServer服务监听的端口，默认：8080
	hot: true, // 热模块替换。取决于HotModuleReplacementPlugin
    proxy: {
      '/api': 'http://localhost:3000' // 代理url
    },
	publicPath: '/dist',
    contentBase: path.join(__dirname, 'public'), // 服务器的文件根目录。 boolean | string | array, static file location
    compress: true, // 支持gzip压缩
    historyApiFallback: true, // html在404，对象为多个路径
    https: false, 
    noInfo: true,
	allowedHosts: [ // 白名单
	  'www.baidu.com'
	]
  },
  // +-----------------------------------------------------------------------------------------
  // | 
  // +-----------------------------------------------------------------------------------------
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}