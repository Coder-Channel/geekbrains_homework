const path = require("path");
const CssExtract = require("mini-css-extract-plugin");
const HtmlWebpack = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: path.join(__dirname, "src", "client", "app", "index.jsx"),
    output: {
        path: path.join(__dirname, "src", "client", "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            components: path.resolve(__dirname, "src", "client", "app", "components")
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: path.join(__dirname, "src", "client", "app"),
                use: "babel-loader"
            },
            {
                test: /\.css/,
                use: [
                    CssExtract.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[path][name]__[local]--[hash:base64:5]"
                        }
                    }
                ]  
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}  
                  }
                ]
            }
        ]
    },
    plugins: [
        new CssExtract({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpack()
    ],
};