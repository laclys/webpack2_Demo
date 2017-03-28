var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
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
                exclude: path.resolve(__dirname, 'node_modules'), //把它解释为绝对路径
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader' //从右到左处理
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader' //从右到左处理
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader' //从右到左处理
            },
            {
                test: /\.html$/,
                loader: 'html-loader' 
            },
            { //处理图片
                test: /\.(jpg|png|gif|svg)$/i,
                loader: 'file-loader' 
            }

        ]
    },
    // postcss:[
    //     require('autoprefixer')({
    //         browsers:['last 5 versions']
    //     })
    // ],
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
        }),
        //webpack2 postcss配置
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [require("autoprefixer")({

                        browsers: ["last 5 versions"]

                    })

                ]

            }

        })

    ]

}