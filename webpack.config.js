const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',
    entry: [path.join(__dirname, './src/index.js'), path.join(__dirname, './src/styles/styles.scss')],
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3030
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new CopyWebpackPlugin({

            patterns: [{
                from: './src/assets',
                to: './src/assets'
            }]

        })


    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff)$/,
                use: ['file-loader']
            }
        ]
    }
}