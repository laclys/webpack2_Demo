var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    // entry:['./src/script/main.js','./src/script/a.js'],
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js',
        // publicPath: 'http://cdn.com'
    },
    //插件
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            // exclude: '/node_modules/', //exclude排除这个文件夹不处理,include指定包含的范围
            // include: '/src/',
            exclude: path.resolve(__dirname,'node_modules'),//把它解释为绝对路径
            include: path.resolve(__dirname,'src')
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]

}