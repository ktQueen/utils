const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

getPaths('./*/src/').forEach(function (v) {
    webpack({
        // 入口文件
        entry: path.resolve(__dirname, `${v}/src/index.js`),
        // 出口文件
        output: {
            path: path.resolve(__dirname, v),
            // 所有资源的基础路径，而且一定是/结尾
            publicPath: "/",
            filename: 'index.js',
            //通用模块定义
            libraryTarget: 'umd'
        },
        // 模块配置loader
        module: {
            rules: [
                // js脚本
                {
                    test: /\.js$/,
                    use: [{
                        loader: "babel-loader"
                    }],
                    exclude: [
                        path.resolve(__dirname, '/node_modules'),
                        path.resolve(__dirname, '/out')
                    ]
                }
            ]
        },
        // 插件
        plugins:[
            // 压缩代码
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: false,
                }
            }),
        ]
    },function (err) {
        //console.log(err);
    });
});

//获取路径
function getPaths(globPath) {
    var entries = [],
        basename,
        tmp,
        pathname;

    glob.sync(globPath).forEach(function (entry) {
        // basename = path.basename(entry, path.extname(entry));  //basename 为：detail
        tmp = entry.split('/').splice(-3);
        //pathname = tmp.splice(0, 1) + '\/' + basename; // 正确输出js和html的路径
        // pathname = tmp[0] + '\/' + tmp[1] + '\/' + basename; // modify by ls正确输出js和html的路径
        entries.push(tmp[0]);
    });
    return entries;
}