module.exports = {
    entry: "./src/geom.ts",

    output: {
        path: __dirname + "/dist",
        filename: "geom.js",
        library: "geom",
        libraryTarget: "commonjs2"
    },

    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ]
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    },

    externals: [
        "math"
    ]
};
