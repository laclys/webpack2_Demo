var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry:['./src/script/main.js','./src/script/a.js'],
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[hash].js',
        // publicPath: 'http://cdn.com'
    },
    //插件
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html',
            inject: false,
            title: 'webpack is good',
            date: new Date(),
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true
            }
        }),
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is a',
            excludeChunks:['b','c']

        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is b',
            chunks:['b']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is c',
            chunks:['c']
        })

    ]

}