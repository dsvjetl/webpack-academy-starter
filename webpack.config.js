const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                    {
                        loader: 'file-loader',
                        options: {}  
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}