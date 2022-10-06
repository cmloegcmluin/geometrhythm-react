const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: "./src/index.js",
    mode: "none",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: "development",
        }),
        new webpack.ProvidePlugin({process: "process/browser"}),
    ],
    devServer: {
        static: {
            directory: "dist",
        },
    },
}
