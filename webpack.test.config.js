/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

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
            },
            {
                test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
                enforce: 'post',
                exclude: [ /\.(e2e|spec)\.ts$/, /node_modules/]
            }
        ]
    }
};
