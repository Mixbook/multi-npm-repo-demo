module.exports = {
    entry: "./src/main.ts",

    output: {
        path: __dirname + "/dist",
        filename: "main.js",
        libraryTarget: "commonjs2"
    },

    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ]
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    }
};
