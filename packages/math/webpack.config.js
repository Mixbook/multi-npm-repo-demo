module.exports = {
    entry: "./src/math.ts",

    output: {
        path: __dirname + "/dist",
        filename: "math.js",
        library: "math",
        libraryTarget: "commonjs2",
    },

    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ]
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    },
};
