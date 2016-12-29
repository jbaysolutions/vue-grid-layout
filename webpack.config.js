var vue = require('vue-loader')
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var cssLoader = ExtractTextPlugin.extract("style-loader", "css-loader")

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: './build',
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this nessessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: cssLoader
            }
        ]
    },
    // vue: {
    //   loaders: {
    //     css: ExtractTextPlugin.extract("css"),
    //     stylus: ExtractTextPlugin.extract("css!stylus")
    //   }
    // },
    devtool: "#source-map",
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}

if (process.env.NODE_ENV === 'production') {

    delete module.exports.devtool
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
        // new ExtractTextPlugin("build.css")
    ]
} else {
    // module.exports.plugins = [
    //   new ExtractTextPlugin("build.css")
    // ]
    // module.exports.devtool = '#source-map'
}