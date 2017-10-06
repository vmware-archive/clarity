const path = require("path");
const {UglifyJsPlugin} = require('webpack').optimize;

module.exports = {
    entry: {
        "index": "./src/clarity-icons/index.ts",
        "interfaces/icon-alias": "./src/clarity-icons/interfaces/icon-alias.ts",
        "interfaces/icon-template": "./src/clarity-icons/interfaces/icon-template.ts",
        "utils/descriptor-config": "./src/clarity-icons/utils/descriptor-config.ts",
        "clarity-icons-api": "./src/clarity-icons/clarity-icons-api.ts",
        "clarity-icons-element": "./src/clarity-icons/clarity-icons-element.ts",
        "clarity-icons-lite.min": "./src/clarity-icons/index.ts",
        "clarity-icons.min": "./src/clarity-icons/clarity-icons-sfx.ts",
        "shapes/all-shapes": "./src/clarity-icons/shapes/all-shapes.ts",
        "shapes/all-shapes.min": "./src/clarity-icons/shapes/all-shapes.ts",
        "shapes/commerce-shapes": "./src/clarity-icons/shapes/commerce-shapes.ts",
        "shapes/commerce-shapes.min": "./src/clarity-icons/shapes/commerce-shapes.ts",
        "shapes/core-shapes": "./src/clarity-icons/shapes/core-shapes.ts",
        "shapes/core-shapes.min": "./src/clarity-icons/shapes/core-shapes.ts",
        "shapes/essential-shapes": "./src/clarity-icons/shapes/essential-shapes.ts",
        "shapes/essential-shapes.min": "./src/clarity-icons/shapes/essential-shapes.ts",
        "shapes/media-shapes": "./src/clarity-icons/shapes/media-shapes.ts",
        "shapes/media-shapes.min": "./src/clarity-icons/shapes/media-shapes.ts",
        "shapes/social-shapes": "./src/clarity-icons/shapes/social-shapes.ts",
        "shapes/social-shapes.min": "./src/clarity-icons/shapes/social-shapes.ts",
        "shapes/travel-shapes": "./src/clarity-icons/shapes/travel-shapes.ts",
        "shapes/travel-shapes.min": "./src/clarity-icons/shapes/travel-shapes.ts",
        "shapes/technology-shapes": "./src/clarity-icons/shapes/technology-shapes.ts",
        "shapes/technology-shapes.min": "./src/clarity-icons/shapes/technology-shapes.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist/clarity-icons'),
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
