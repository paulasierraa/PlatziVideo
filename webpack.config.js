const path = require('path');
//instanciar el plugin
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        // modulo con las reglas de nuestro proyecto
        rules:[
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                // permite trabajar con archivos html
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                //regla para css
                test:/\.(s*)css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,

                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    //añadimos plugins 
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        }),
    ]
};