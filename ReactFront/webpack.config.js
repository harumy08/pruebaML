const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DefineEnvsPlugin = require("webpack-define-envs-plugin");

module.exports = env => {
    return {
    
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    mode: 'development',
    resolve:  {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@utilities': path.resolve(__dirname, 'src/utilities/'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@img': path.resolve(__dirname, 'src/assets/img/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
          }
    },
    module: {
        rules: [
            {
              test:/\.(js|jsx)$/,
              exclude:/node_modules/,
              use:{
                loader:'babel-loader'
              }
            },
            {
                test: /\.html$/,
                use:[
                    {
                    loader:'html-loader'
                }
            ]
            },
            {
               test: /\.(css|scss)$/,
               use:[
                "style-loader",
                "css-loader",
                "sass-loader",
               ]
            },
            {
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename:'[name].css'
        }), 
        new webpack.DefinePlugin({
            "process.env.API_URL": JSON.stringify("http://localhost:3002/")
        })
      
    ],
    devServer:{
        historyApiFallback: true,
    }
}
}