var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devServer: {
        port: 9090,
    },
    module: {
        loaders: [
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
  ]

}
