var path = require('path');
//html-webpack-plugin插件，这个插件可以创建html文件，并自动将依赖写入html文件中。
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    // 多入口配置的方式
    entry: {
        index: path.resolve(__dirname, '../src/main.js'),
        vendors: [
            'Vue', 'jquery'
        ]
    },
    // 输出配置
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: 'img/[name].[ext]?[hash:7]'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //输出路径，相对于output path的路径
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            inject: true
        })
    ]
}