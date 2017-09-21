/*var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");*/

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname, //当前路径，，，使文件变成绝对路径
        filename: 'bulid.js'
    },
    module:{
    	loaders:[
    		{test:/\.vue$/,loader:'vue-loader'},//多个loader用感叹号链接   loader:'vue-loader ！css-loader'
    		{test:/\.js$/,loader:'babel',exclude:/node_modules/}
    	]
    },
    babel:{
    	presets:['es2015'],
    	plugins:['transform-runtime']
    }
}
