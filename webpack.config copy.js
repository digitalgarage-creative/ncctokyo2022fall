const path = require('path');

module.exports = {
 mode: 'development',
entry:{
    bundle: path.resolve(__dirname, 'src/index.js'),
},
output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist' )
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,

    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:  {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/, 
                type: 'asset/resource',
                
                
            },
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, './')
        ]
    },

}





