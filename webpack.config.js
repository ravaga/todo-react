var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '_/assets/js/app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }, {
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: '/dist'
            })
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: 'errors-only',
        open: true,
        openPage: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TODO LIST G-Global',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/assets/index.html'
        }),
        new ExtractTextPlugin({
            filename: '_/assets/css/app.bundle.css',
            disable: false,
            allChunks: true
        })
    ],
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    }
}