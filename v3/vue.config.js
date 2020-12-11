// vue.config.js
const path = require('path');

function resolve(dir) {
	return path.join(__dirname, '.', dir)
}
module.exports = {
	//是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
	lintOnSave: false,
	chainWebpack: (config) => {
		// const svgRule = config.module.rule("svg");
		// svgRule.uses.clear();
		// svgRule
		// 	.use("svg-sprite-loader")
		// 	.loader("svg-sprite-loader")
		// 	.options({
		// 		symbolId: "icon-[name]",
		// 		include: ["./src/icons"]
		// 	});
		config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
		// const svgRule = config.module.rule('svg')
		// svgRule.uses.clear()
		config.module
			.rule('svg-sprite-loader')
			.test(/\.svg$/)
			.include
			.add(resolve('./src/icons')) // 处理svg目录
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})
	},
	// 选项...
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {
			// 如发现 css.modules 报错，请查看这里：http://www.web-jshtml.cn/#/detailed?id=12
			sass: {
				prependData: `@import "@/styles/main.scss";`
			}
		}
	},
	configureWebpack: (config) => {
		// 配置解析别名
		config.resolve = {
			extensions: ['.js', '.json', '.vue', '.ts'], //自动添加文件后缀名
			alias: {
				//改变vue的默认指向
				vue: "vue/dist/vue.esm-bundler.js",
				'@': path.resolve(__dirname, './src')
			}
		}
	},
	devServer: {
		open: false, //编译完成是否自动打开浏览器
		host: "0.0.0.0", //指定使用地址,默认是localhost，0.0.0.0代表可以被外界访问。
		port: 8080, //访问的端口
		https: false,
		hotOnly: false,
		//通过代理解决跨域问题
		proxy: {
			'/devApi': {
				target: 'http://localhost:5000', //API服务器的地址
				changeOrigin: true,
				pathRewrite: {
					'^/devApi': ''
				}
			}
		},
	}
}
