const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

config = {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        pathinfo: false
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(css)$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ]
                        }
                    }
                },
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Feed news',
            template: './public/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map'
        config.devServer = {
            contentBase: './dist',
            hot: true
        }

        config.plugins = [...config.plugins,
            new webpack.HotModuleReplacementPlugin()
        ]
    }

    if (argv.mode === 'production') {
        config.devtool = 'cheap-source-map'

        config.plugins = [...config.plugins,
            new BundleAnalyzerPlugin(),
        ]

        config.optimization = {
            noEmitOnErrors: true,
            runtimeChunk: true,
            minimizer: [
                new UglifyJsPlugin(),
                new OptimizeCSSAssetsPlugin({}),
                new TerserJSPlugin()
            ],
            splitChunks: {
                chunks: 'all'
            }
        }

    }

    return config
}



