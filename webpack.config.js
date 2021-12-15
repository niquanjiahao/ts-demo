const path = require('path')
module.exports = {
    entry: './lib/index.tsx',
    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'yui',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    //设置开发者工具的端口号,不设置则默认为8080端口
    devServer: {
        static: { // static: ['assets']
            directory: path.join(__dirname, 'dist')
        },
        open: true,               		 //自动打开浏览器
        port: 8081,               		 //设置端口号
        compress: true,                  //启动服务器压缩
    },
    module: {
        // 规则
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
}