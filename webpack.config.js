const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
module.exports = {
    entry: path.join(__dirname, 'src/public/scripts/index.js'), // 已多次提及的唯一入口文件
    output: {
        path: path.join(__dirname, '/build/public'), // 打包后的文件存放的地方
        filename: 'scripts/[name]-[hash:5].js', // 打包后输出文件的文件名,带有md5 hash戳
        publicPath: 'http://localhost:3000/' //打包后输出在HTML文件里的根路径
    },
    devServer: {
        contentBase: './views', // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/ // 不进行编译的目录
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: {
                    loader: "css-loader"
                }
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../views/layout.html',   //插件里的filename都是相对于output路径（path）的
            template: path.join(__dirname, 'src/widget/layout.html'), // new 一个这个插件的实例，并传入相关的参数
            inject: false //静态资源插入位置 'body' | 'head' 默认为'body'
        }),
        new HtmlWebpackPlugin({
            filename: '../views/index.html',
            inject: false, //静态资源插入位置 'body' | 'head' 默认为'body'
            chunks: ['vendor', 'main'],   //传递给下方index.js的参数，需要插入的scripts
            template: path.join(__dirname, 'src/views/index.js'), // new 一个这个插件的实例，并传入相关的参数
        }),
        new HtmlWebpackPlugin({
            filename: '../widget/index.html',
            template: path.join(__dirname, 'src/widget/index.html'), // new 一个这个插件的实例，并传入相关的参数
            inject: false //静态资源插入位置 'body' | 'head' 默认为'body'
        }),
        new ExtractTextPlugin("styles/style-[hash:5].css"),
        new CleanWebpackPlugin('build/public/*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'scripts/common/vendor-[hash:5].js'
        })
    ]
}