var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../src/client/scripts/client.js')
    ],
    output: {
        path: path.resolve(__dirname, '../src/client/scripts/build'),
        filename: 'bundle.js',
        publicPath: '/scripts/build/'
    },
    module: {
        loaders: [
            {
                test: /src\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /src\/.+.js$/,
                loaders: ['react-hot', 'jsx?harmony'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
    //devServer: {
    //    contentBase: "src/client/scripts/build/",
    //    info: false, //  --no-info option
    //    hot: true,
    //    inline: true,
    //    port: 8181
    //}
};
