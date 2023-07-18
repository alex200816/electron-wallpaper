module.exports = {
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    //zhengkai.blog.csdn.net
    publicPath: './', // 相对路径，file模式和web模式都可以使用
    runtimeCompiler: true,
    configureWebpack: (config) => {
        config["performance"] = {
            "maxEntrypointSize": 10000000,
            "maxAssetSize": 30000000,
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                //args[0].title= '' // 设置title
                return args
            })
    },
    devServer: {
        port: 33820,
        proxy: {
            '/360wallpaper/': {
                'target': 'http://wallpaper.apc.360.cn', //壁纸接口地址
                'secure': false, // false为http访问，true为https访问
                'changeOrigin': true, // 跨域访问设置，true代表跨域
                'pathRewrite': { // 路径改写规则
                    '^/360wallpaper': '' // 以/proxy/为开头的改写为''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    //在此处设置，也可以设置直角、边框色、字体大小等
                    'primary-color': '#07C160',
                },
                javascriptEnabled: true
            }
        }
    },
}
