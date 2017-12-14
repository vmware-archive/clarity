const path = require("path");
const {UglifyJsPlugin} = require('webpack').optimize;

module.exports = {
    entry: {
        "index": "./src/clr-icons/index.ts",
        "interfaces/icon-alias": "./src/clr-icons/interfaces/icon-alias.ts",
        "interfaces/icon-template": "./src/clr-icons/interfaces/icon-template.ts",
        "utils/descriptor-config": "./src/clr-icons/utils/descriptor-config.ts",
        "clr-icons-api": "./src/clr-icons/clr-icons-api.ts",
        "clr-icons-element": "./src/clr-icons/clr-icons-element.ts",
        "clr-icons-lite.min": "./src/clr-icons/index.ts",
        "clr-icons.min": "./src/clr-icons/clr-icons-sfx.ts",
        "shapes/all-shapes": "./src/clr-icons/shapes/all-shapes.ts",
        "shapes/all-shapes.min": "./src/clr-icons/shapes/all-shapes.ts",
        "shapes/commerce-shapes": "./src/clr-icons/shapes/commerce-shapes.ts",
        "shapes/commerce-shapes.min": "./src/clr-icons/shapes/commerce-shapes.ts",
        "shapes/core-shapes": "./src/clr-icons/shapes/core-shapes.ts",
        "shapes/core-shapes.min": "./src/clr-icons/shapes/core-shapes.ts",
        "shapes/essential-shapes": "./src/clr-icons/shapes/essential-shapes.ts",
        "shapes/essential-shapes.min": "./src/clr-icons/shapes/essential-shapes.ts",
        "shapes/media-shapes": "./src/clr-icons/shapes/media-shapes.ts",
        "shapes/media-shapes.min": "./src/clr-icons/shapes/media-shapes.ts",
        "shapes/social-shapes": "./src/clr-icons/shapes/social-shapes.ts",
        "shapes/social-shapes.min": "./src/clr-icons/shapes/social-shapes.ts",
        "shapes/travel-shapes": "./src/clr-icons/shapes/travel-shapes.ts",
        "shapes/travel-shapes.min": "./src/clr-icons/shapes/travel-shapes.ts",
        "shapes/technology-shapes": "./src/clr-icons/shapes/technology-shapes.ts",
        "shapes/technology-shapes.min": "./src/clr-icons/shapes/technology-shapes.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist/clr-icons'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    resolve: {
        modules: [
            "./node_modules"
        ],
        extensions: ['.ts', '.ts', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: 'tsconfig.icons.json'
                    }
                }]
            }
        ]
    }
};
