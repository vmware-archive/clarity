const path = require("path");

module.exports = {
    cache: true,
    devtool: 'inline-source-map',
    resolve: {
        modules: [
            path.join(process.cwd(), 'src/app'),
            path.join(process.cwd(), 'src/clr-angular'),
            path.join(process.cwd(), 'src/clr-icons'),
            "./node_modules"
        ],
        extensions: [".ts", ".js", ".json"]
    },
    entry: {
        ts: path.join(process.cwd(), 'tests/tests.entry.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            }
        ]
    }
};
