/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        "wireframe-builder": "./src/index.ts"
    },
    output: {
        filename: "[name].js",
        sourceMapFilename: "[name].js.map",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                use: "ts-loader", 
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/assets/samples", to: "assets/assets/samples" },
                { from: "src/index.html", to: "index.html" }
            ]
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: "source-map"
};
