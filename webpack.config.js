var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
      "richVoiceEditor": "./src/index.js",
      "richVoiceEditor.min": "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'var',
        library: 'RichVoiceEditor'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      })
    ],
    devtool: 'source-map'
};
