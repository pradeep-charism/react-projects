const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.html']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
            test: /\.js|\.jsx$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
    ]
    }

}