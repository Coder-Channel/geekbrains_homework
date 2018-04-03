const path = require("path");

module.exports = {
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
            }
        ]
    }
};