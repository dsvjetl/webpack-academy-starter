const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist'
    },
    devtool: '#eval-source-map',
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
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin(
            // BS Options
            {
              files: ['assets/**/*', 'src/**/*'],
              proxy: "http://localhost:8080",
              port: 3000,
              open: false
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                // reload: false
            }
          )
    ],
    devServer: {
        contentBase: [ './' ],
        watchContentBase: true
    }
}