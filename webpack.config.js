const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        index: "./src/index.js"
    },
    output:{
        path: __dirname + "/build",
        filename: "index.bundle.js"
    },
    devServer:{
        hot:true
    },
    module:{
        rules:[
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}   