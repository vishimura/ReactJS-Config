const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
        filename: './app.js',
        path: __dirname + '/public'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: 'file-loader'
        }, {
            test: /\.tsx?$/,
            use: {
                loader: 'ts-loader'
            },
            exclude: /(node_modules|bower_components)/,
        }, {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        }
        ]
    }
}