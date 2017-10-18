const fs = require('fs');
const path = require('path');
const ConcatPlugin = require('webpack-concat-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SuppressChunksPlugin = require('suppress-chunks-webpack-plugin').default;


const { NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin } = require('webpack');
const { InsertConcatAssetsWebpackPlugin, NamedLazyChunksWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;
const { AotPlugin } = require('@ngtools/webpack');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');
const entryPoints = ["inline","polyfills","sw-register","styles","vendor","main"];
const baseHref = "";
const deployUrl = "";
const postcssPlugins = function () {
        // safe settings based on: https://github.com/ben-eb/cssnano/issues/358#issuecomment-28369619
        return [
            postcssUrl({
                url: (URL) => {
                    // Only convert root relative URLs, which CSS-Loader won't process into require().
                    if (!URL.startsWith('/') || URL.startsWith('//')) {
                        return URL;
                    }
                    if (deployUrl.match(/:\/\//)) {
                        // If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
                        return `${deployUrl.replace(/\/$/, '')}${URL}`;
                    }
                    else if (baseHref.match(/:\/\//)) {
                        // If baseHref contains a scheme, include it as is.
                        return baseHref.replace(/\/$/, '') +
                            `/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
                    }
                    else {
                        // Join together base-href, deploy-url and the original URL.
                        // Also dedupe multiple slashes into single ones.
                        return `/${baseHref}/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
                    }
                }
            }),
            autoprefixer({
                browsers: ['last 2 versions','ie 11','> 5%','Firefox > 35','Chrome > 35'],
                cascade: false
            }),
        ];
    };

module.exports = {
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      "./node_modules"
    ],
    "symlinks": true
  },
  "resolveLoader": {
    "modules": [
      "./node_modules"
    ]
  },
  "entry": {
    "main": [
      "./src/main.ts",
      "./src/clarity-icons/index.ts"
    ],
    "polyfills": [
      "./src/polyfills.ts"
    ],
    "styles": [
      "./node_modules/prismjs/themes/prism-solarizedlight.css",
      "./node_modules/font-awesome/css/font-awesome.min.css",
    ],
    "clarity-ui/clarity-ui": "./src/clarity-angular/main.scss",
    "clarity-ui/clarity-ui.min": "./src/clarity-angular/main.scss",
    "clarity-icons/clarity-icons": "./src/clarity-icons/clarity-icons.scss",
    "clarity-icons/clarity-icons.min": "./src/clarity-icons/clarity-icons.scss"
  },
  "output": {
    "path": path.join(process.cwd(), "dist"),
    "filename": "[name].js"
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.js$/,
        "loader": "source-map-loader",
        "exclude": [
          /(\\|\/)node_modules(\\|\/)/
        ]
      },
      {
        "test": /\.html$/,
        "loader": "raw-loader"
      },
      {
        "test": /\.(eot|svg|cur)$/,
        "loader": "file-loader?name=[name].[hash:20].[ext]"
      },
      {
        "test": /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        "loader": "url-loader?name=[name].[hash:20].[ext]&limit=10000"
      },
      {
        "test": /main\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: 'text-transform-loader',
              options: {
                  transformText: function(content, loaderOptions) {
                      return content.replace(/@VERSION/g, require('./package.json').version);
                  }
              }
            },
            {
              "loader": "css-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                  "ident": "postcss",
                  "plugins": postcssPlugins
              }
            },
            {
              "loader": "sass-loader"
            }
          ]
        })
      },
      {
        "test": /clarity-icons\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: [
                {
                    loader: 'text-transform-loader',
                    options: {
                        transformText: function(content, loaderOptions) {
                            return content.replace(/@VERSION/g, require('./package.json').version);
                        }
                    }
                },
                {
                    "loader": "css-loader"
                },
                {
                    "loader": "postcss-loader",
                    "options": {
                        "ident": "postcss",
                        "plugins": postcssPlugins
                    }
                },
                {
                    "loader": "sass-loader"
                }
            ]
        })
      },
      {
        "test": /\.scss$/,
        "exclude": [
          path.join(process.cwd(), "src/clarity-angular/main.scss"),
          path.join(process.cwd(), "src/clarity-icons/clarity-icons.scss")
        ],
        "use": [
          "exports-loader?module.exports.toString()",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "importLoaders": 1
            }
          },
          {
            "loader": "postcss-loader",
            "options": {
              "ident": "postcss",
              "plugins": postcssPlugins
            }
          },
          {
            "loader": "sass-loader",
            "options": {
              "sourceMap": false,
              "precision": 8,
              "includePaths": []
            }
          }
        ]
      },
      {
        "test": /\.css$/,
        "include": [
          path.join(process.cwd(), "node_modules/prismjs/themes/prism-solarizedlight.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.min.css")
        ],
        "use": [
          "style-loader",
          {
            "loader": "css-loader"
          }
        ]
      },
      {
        "test": /\.ts$/,
        "loader": "@ngtools/webpack"
      }
    ]
  },
  "plugins": [
    new NoEmitOnErrorsPlugin(),
    new ConcatPlugin({
      "uglify": false,
      "sourceMap": true,
      "name": "scripts",
      "fileName": "[name].bundle.js",
      "filesToConcat": [
        "./node_modules/prismjs/prism.js",
        "./node_modules/prismjs/components/prism-typescript.min.js"
      ]
    }),
    new InsertConcatAssetsWebpackPlugin([
      "scripts"
    ]),
    new CopyWebpackPlugin([
        {
            context: "./src/",
            from: {
              glob: "favicon.ico",
              dot: true
            }
        },
        {
            context: "./src/",
            from: {
                glob: "assets/**/*",
                dot: true
            }
        },
        {
            context: './src/clarity-angular',
            from: {
                glob: "**/*.clarity.scss",
                dot: true
            },
            to: 'clarity-ui/src/'
        },
        {
            context: './src/clarity-angular',
            from: 'main.scss',
            to: 'clarity-ui/src/'
        },
        {
            context: './npm/',
            from: '**/*',
            transform: function(content, path) {
                return content.toString().replace(/@VERSION/g, require('./package.json').version);
            }
        }

    ], {
      "ignore": [
        ".gitkeep"
      ],
      "debug": "warning"
    }),
    new ProgressPlugin(),
    new CircularDependencyPlugin({
      "exclude": /(\\|\/)node_modules(\\|\/)/,
      "failOnError": false
    }),
    new NamedLazyChunksWebpackPlugin(),
    new HtmlWebpackPlugin({
      "template": "./src/index.html",
      "filename": "./index.html",
      "hash": false,
      "inject": true,
      "compile": true,
      "favicon": false,
      "minify": false,
      "cache": true,
      "showErrors": true,
      "chunks": "all",
      "excludeChunks": [],
      "title": "Webpack App",
      "xhtml": true,
      "chunksSortMode": function sort(left, right) {
        let leftIndex = entryPoints.indexOf(left.names[0]);
        let rightindex = entryPoints.indexOf(right.names[0]);
        if (leftIndex > rightindex) {
            return 1;
        }
        else if (leftIndex < rightindex) {
            return -1;
        }
        else {
            return 0;
        }
    }
    }),
    new BaseHrefWebpackPlugin({}),
    new CommonsChunkPlugin({
      "name": [
        "inline"
      ],
      "minChunks": null
    }),
    new CommonsChunkPlugin({
      "name": [
        "vendor"
      ],
      "minChunks": (module) => {
                return module.resource
                    && (module.resource.startsWith(nodeModules)
                        || module.resource.startsWith(genDirNodeModules)
                        || module.resource.startsWith(realNodeModules));
            },
      "chunks": [
        "main"
      ]
    }),
    new SourceMapDevToolPlugin({
      "filename": "[file].map[query]",
      "moduleFilenameTemplate": "[resource-path]",
      "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
      "sourceRoot": "webpack:///"
    }),
    new CommonsChunkPlugin({
      "name": [
        "main"
      ],
      "minChunks": 2,
      "async": "common"
    }),
    new NamedModulesPlugin({}),
    new AotPlugin({
      "mainPath": "main.ts",
      "replaceExport": false,
      "hostReplacementPaths": {
        "environments/environment.ts": "environments/environment.ts"
      },
      "exclude": [],
      "tsConfigPath": "src/tsconfig.app.json",
      "skipCodeGeneration": true
    }),
      new ExtractTextPlugin("[name].css"),
      new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.min\.css$/,
          cssProcessorOptions: {
              autoprefixer: false,
              safe: true,
              mergeLonghand: false,
              discardComments: {remove: (comment) => !(/Copyright|@preserve|@license|[@#]\s*source(?:Mapping)?URL|^!/i.test(comment))}
          }
      }),
      new SuppressChunksPlugin([
          { name: 'clarity-ui/clarity-ui', match: /\.js(\.map)?$/ },
          { name: 'clarity-ui/clarity-ui.min', match: /\.js(\.map)?$/ },
          { name: 'clarity-icons/clarity-icons', match: /\.js(\.map)?$/ },
          { name: 'clarity-icons/clarity-icons.min', match: /\.js(\.map)?$/ }
      ])
  ],
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false
  },
  "devServer": {
    "historyApiFallback": true,
    "disableHostCheck": true
  }
};
