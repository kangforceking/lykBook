// 用于Gzip
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 可视化依赖关系图
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    productionSourceMap: false,
    // 把第三方文件库等分片，以防js文件过体积过于巨大
    configureWebpack: config => {
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    antDesign: {
                        test: /[\\/]node_modules[\\/](ant-design-vue)[\\/]/,
                        name: 'antDesign',
                        chunks: 'all'
                    },
                    vue: {
                        test: /[\\/]node_modules[\\/](vue|vuex|vue-[a-zA-Z]+)[\\/]/,
                        name: 'vue',
                        chunks: 'all'
                    }
                }
            }
        }
        if (process.env.NODE_ENV === 'production') {
            let plugins = [
                // 开启gzip压缩
                new CompressionWebpackPlugin({
                    // 正在匹配需要压缩的文件后缀
                    test: /.(js|css|svg|woff|ttf|json|html)$/,
                    // 大于10kb的会压缩
                    threshold: 10240
                    // 其余配置查看compression-webpack-plugin
                })
            ]
            /**
             * 要查看模块分析图请确保有环境变量
             * NODE_ENV=production
             * 并运行 npm run build --report, yarn build --report是无效的
             */
            if (process.env.npm_config_report) {
                // 生成依赖关系图
                plugins.push(new BundleAnalyzerPlugin())
            }
            return {
                plugins
            }
        }
    }
    // 配置参考 https://www.webpackjs.com/configuration/dev-server/
    // devServer: {
    //     proxy: {
    //         '/api/': 'https://manage.blty.test/api/'
    //     }
    // }

}
