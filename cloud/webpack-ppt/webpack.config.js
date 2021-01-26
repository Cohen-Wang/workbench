
// 学习要点： 不要纠结在api和命令
// Webpack是属于Node的程序，Node环境下的环境变量，Webpack可以配置，可以灵活读取。

module.exports = {
  // +-----------------------------------------------------------------------------------------
  // | entry概念 - context - 上下文：webpack在寻找相对路径的文件时，会以context为根目录。默认值：项目的根目录
  // +-----------------------------------------------------------------------------------------	
  // context: path.resolve(__dirname, '../'),
  // +-----------------------------------------------------------------------------------------
  // | entry概念 - entry - 入口：工程依赖入口（必填）
  // | 可以指定多个入口起点
  // +-----------------------------------------------------------------------------------------
  entry: {
    app: './src/main.js'
  },
  // +-----------------------------------------------------------------------------------------
  // | mode - 模式： 告诉webpack4 是生产环境还是开发环境；"production" | "development" | "none"
  // +-----------------------------------------------------------------------------------------
  // mode: "production",
  // +-----------------------------------------------------------------------------------------
  // | output - 输出：只可指定一个输出配置；必须是绝对路径
  // +-----------------------------------------------------------------------------------------
  output: {
    path: path.join(__dirname, 'dist') // 输出的路径；必须是绝对路径
    filename: 'bundle.js', // 输出文件的名称，'[name].js'; bundle n. 束；捆
	// 其他
	chunkFilename: '',
	publicPath: '',
	crossOriginLoading: '',
	libraryTarget: '',
	library: '',
	libraryExport: ''
  },
  // +-----------------------------------------------------------------------------------------
  // | resolve - 解决：resolve配置webpack【如何】寻找模块对应文件
  // +-----------------------------------------------------------------------------------------
  resolve: {
	// 在导入语句没有带文件后缀的时候，自动带上这些后缀去尝试访问文件。 import router from './router'
	// 优化：尽可能少；频率高放在前；
    extensions: ['.js', '.vue', '.ts', '.json'],
    alias: { // 通过别名来将原导入路径映射成一个新的导入路径
      'vue$': 'vue/dist/vue.esm.js', // $ 缩小范围符
      '@': resolve('src')
    },
	modules: [path.resolve(__dirname, 'node_modules')], // 优化概念：模块导入路径，不用根据node.js的模块寻找机制来到处找
	// 其它
	mainFileds: '', // webpack会根据mainFileds的配置去决定优先采用哪份代码
	descriptionFiles: ['package.json'], // 配置描述第三方模块文件名称，也就是package.json
	enforceExtension: true, // 导入文件，必须带有后缀；例如：必须写成 import './foo.js'
	enforceModuleExtension: true, // 第三方模块必须带文件后缀，一般设置为false 来兼容
  },
  // +-----------------------------------------------------------------------------------------
  // | 重点 - 优化概念
  // | watch - 监听：监听文件更新，在文件发生变化时，重新编译。
  // +-----------------------------------------------------------------------------------------
  watch: true, //  是否开启监听模式，默认：false，也就是不开启
  watchOptions: {
	// 不监听的文件或文件夹，支持正则匹配
    // 默认为空
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    // 默认为 300ms  
    aggregateTimeout: 300, // aggregate  /ˈæɡrɪɡət/  n. 合计；集合体；总计；集料
    // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
    // 默认每隔1000毫秒询问一次
    poll: 1000 
  },
  // +-----------------------------------------------------------------------------------------
  // | 重点
  // | devtool - 源程序映射 - SourceMap是一种映射关系。当项目运行后，如果出现错误，错误信息只能定位到打包后文件中错误的位置。如果想查看在源文件中错误的位置，则需要使用映射关系，找到对应的位置。
  // +-----------------------------------------------------------------------------------------
  devtool: 'source-map', // 会生成map格式的文件，里面包含映射关系的代码
  devtool: 'cheap-source-map', // 我们用的，更小
  // 其他
  devtool: false, // 默认false，及不生成source map
  devtool: 'inline-source-map', // 不会生成map格式的文件，包含映射关系的代码会放在打包后生成的代码中
  devtool: 'inline-cheap-source-map', // cheap有两种作用：一是将错误只定位到行，不定位到列。二是映射业务代码，不映射loader和第三方库等。会提升打包构建的速度。
  devtool: 'inline-cheap-module-source-map', // module会映射loader和第三方库
  devtool: 'eval', // 用eval的方式生成映射关系代码，效率和性能最佳。但是当代码复杂时，提示信息可能不精确。
  devtool: 'cheap-module-eval-source-map', // 开发环境
  devtool: 'cheap-module-source-map', // 生产环境
  // +-----------------------------------------------------------------------------------------
  // | 重点
  // | loader: 用于对模块的源代码进行转换
  // | 特点：①什么时候用 ②用哪个
  // +-----------------------------------------------------------------------------------------
  module: {
    rules: [
	  // 处理.less文件
	  {
	    test: /\.less/,
	    loader: 'style-loader!css-loader!less-loader'
	  },
	  // 处理.js文件 - es6
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory', // ?cacheDirectory: 用于缓存babel的编译结果，加快重新编译的速度
        include: [ // 加快webpack的搜索速度
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
        ],
		exclude: path.resolve(__dirname, 'node_modules')
      },
	  // 处理.vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
	  // 图片：给美术看看url-loader
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 30 * 1024, // 30KB以下大小，才使用url-loader
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
	  // svg
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
	  // 视频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 30 * 1024, // 30KB以下大小，才使用url-loader
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
	  // 字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 30 * 1024, // 30KB以下大小，才使用url-loader
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
	// 优化概念：压缩输出的JavaScript代码
    new UglifyJsPlugin({
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句，可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      }
    }),
	// 识别某些类别的webpack错误，并清理，聚合和优先级，以提供更好的开发人员体验。
	new FriendlyErrorsWebpackPlugin(),
	// 提取 JavaScript 中的 CSS 代码到单独的文件中
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css`,// 给输出的 CSS 文件名称加上 Hash 值
    }),
	// 优化概念：
	new DefinePlugin({
      // 定义 NODE_ENV 环境变量为 production，以去除源码中只有开发时才需要的部分
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
	// 该插件的作用就是实现模块热替换，实际上当启动时带上 `--hot` 参数，会注入该插件，生成 .hot-update.json 文件。
    new HotModuleReplacementPlugin(),
	// ...
	new VueLoaderPlugin(),
	// ...
	new CopyWebpackPlugin([ // 将单个文件或整个目录复制到构建目录
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
	// 使用本文的主角 WebPlugin，一个 WebPlugin 对应一个 HTML 文件
    new WebPlugin({
      template: './template.html', // HTML 模版文件所在的文件路径
      filename: 'index.html' // 输出的 HTML 的文件名称
    })
  ],
  // +-----------------------------------------------------------------------------------------
  // | 重点
  // | devServer - 代理服务： 
  // +-----------------------------------------------------------------------------------------
  devServer: {
	host: '127.0.0.1', // 用于配置devServer服务监听的地址；host 的默认值是 127.0.0.1 即只有本地可以访问 DevServer 的 HTTP 服务。
    port: 9527, // 用于配置devServer服务监听的端口（启动时的端口）；默认：8080
	open: true, // 构建完成后，自动打开浏览器
	hot: true, // 热模块替换
	// devServer中其实还有一个proxy属性，可以用做代理，简单来说，配好了他，就可以用来实现跨域
	// 
    proxy: {
	  // 代理url，如：请求到/api/users现在会被代理到请求http://localhost:3000/api/user
      '/api': 'http://192.168.0.106:9180',
	  // 如果不想始终传递/api，可以重写路径：
	  "/api": {
		target: "http://192.168.0.106:9180",
		pathRewrite: {"^/api" : ""}
	  }
    },
	// 还可以同时代理多个
	proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true // 如果接口跨域，要设置
      },
      '/foo': {
        target: '<other_url>'
      }
    },
	// 其他
	publicPath: '/dist',
    contentBase: path.join(__dirname, 'public'), // devServer.contentBase 配置 DevServer HTTP 服务器的文件根目录。默认情况下为当前执行目录，通常是项目根目录，所有一般情况下你不必设置它，
    compress: true, // 支持gzip压缩
	inline: true, // DevServer 的实时预览功能依赖一个注入到页面里的代理客户端去接受来自 DevServer 的命令和负责刷新网页的工作。
    historyApiFallback: true, // devServer.historyApiFallback 用于方便的开发使用了 HTML5 History API 的单页应用。 这类单页应用要求服务器在针对任何命中的路由时都返回一个对应的 HTML 文件，例如在访问 http://localhost/user 和 http://localhost/home 时都返回 index.html 文件， 浏览器端的 JavaScript 代码会从 URL 里解析出当前页面的状态，显示出对应的界面。
    https: false, // 是否使用https协议；DevServer 默认使用 HTTP 协议服务，它也能通过 HTTPS 协议服务。
    noInfo: true,
	allowedHosts: [ // 白名单
	  'www.baidu.com'
	],
	headers: { // HTTP相应中注入一些HTTP响应头
	  'X-foo': 'bar' 
	},
	disableHostCheck: '', // devServer.disableHostCheck 配置项用于配置是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查。 DevServer 默认只接受来自本地的请求，关闭后可以接受来自任何 HOST 的请求。
  },
  // +-----------------------------------------------------------------------------------------
  // | resolveLoader - 解决loader: 告诉webpack如何去寻找loader
  // | 通常，我们都使用的默认值，如：文件地址，文件名称，文件后缀。
  // +-----------------------------------------------------------------------------------------
  resolveLoader:{
    // 去哪个目录下寻找 Loader
    modules: ['node_modules'],
    // 入口文件的后缀
    extensions: ['.js', '.json'],
    // 指明入口文件位置的字段
    mainFields: ['loader', 'main']
  }
}