const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-transform-async-to-generator'
                    ]
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'css-loader',
                    'style-loader'
                ],
            },
            {
                test: /\.(svg|png|gif|jpe?g)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    publicPath: 'images/',
                    outputPath: 'images/'
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/about.html'
        }),
        new CleanWebpackPlugin()
    ],
}