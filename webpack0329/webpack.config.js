var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js',
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            // { //处理图片
            //     test: /\.(jpg|png|gif|svg)$/i,
            //     loader: 'file-loader'
            // }
            {　　　　　　
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [require("autoprefixer")({

                    browsers: ["last 5 versions"]
                })]
            }
        })
    ]
}