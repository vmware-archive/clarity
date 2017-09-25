Understanding the build
=======================
We currently use Webpack and npm scripts for our build

Our stack
---------
Without going into too much detail, the main tools we use in our build are:
* [Typescript](http://www.typescriptlang.org/), which we transpile to ES5.
* [Sass](http://sass-lang.com/) as CSS preprocessor.
* [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure consistent cross-browser styles.
* [webpack](https://webpack.js.org/clang) as bundler and minifier.
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) as live development server.
* [Jasmine](http://jasmine.github.io/) as test framework.
* [Karma](http://karma-runner.github.io/) as test runner, running by default on [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome).
* [TSLint](http://palantir.github.io/tslint/) as linter for Typescript.
* [clang-format](https://github.com/angular/clang-format) as formatter for Typescript.
* [Gemini](https://gemini-testing.github.io/) for screenshot-based css regression tests.
* [Docker](https://www.docker.com/) for running our Gemini css regression tests. In order to run the 
  css regression tests locally, your system must have Docker installed and running.

Globally Installed NPM packages
-------------------------------
The following packages are installed globally in development environment. The purpose for each is listed below. 
You won't need to install these for general development but may wish to do so if you want to run specific scripts 
that require them:

* [@angular/cli](https://cli.angular.io/): the kitchen sink app (`/src/ks-app`) is an angular-cli app. 
   This app is used to test our npm packages produced by consuming them in an application.
* [gemini](https://gemini-testing.github.io/): this is used to run cli commands to run css regression tests.
* [html-reporter](https://www.npmjs.com/package/html-reporter): plugin for gemini to produce an html report of the css regression tests.
* [selenium-standalone](https://github.com/vvo/selenium-standalone): for running css regression tests.
* [surge](https://surge.sh/): for publishing static website. We use this to publish the kitchen sink app.

NPM Scripts
-----------
All of our build scripts are defined in `package.json`.

##### `npm start`
This will start up our demo app using webpack-dev-server on port 4200 and watch for file changes for live reload.

##### `npm run clean`
This script deletes the `dist` folder, which contains all the produced files for bundling.

##### `npm run build`
This script builds npm package candidates for all three packages we currently publish: `clarity-angular`, `clarity-ui`, and `clarity-icons` under the `/dist` folder. 
Note that this will also produce bundle files as a result of building and bundling for the demo app. Those can be ignored for the purposes of publishing.

##### `npm run test` and `npm run test:travis`
The `test` script runs all the unit tests using karma. The entry point for the tests is `tests/tests.entry.ts`.
You may locally modify this file to constrain which tests to run if you are testing for specific components and don't want
to run all the tests.

The `test:travis` script is used by Travis-CI to run some additional format checks before running the unit tests.
If the code doesn't pass both clang-format checker and tslint, then the build fails before running the unit tests.

##### `npm run clang:check` and `npm run clang:format`
We use [clang-format](https://github.com/angular/clang-format) as formatter for our code. `npm run clang:check` will not 
actually format the file but only check if there are any files that would be changed. We do this via a shell script (`./scripts/clang-check.sh`), 
which runs the clang-format command (with `-output-replacements-xml` flag) and greps for any replacement that would be produced.

The `npm run clang:format` does the actual formatting according to the rules specified in `.clang-format` file.

##### `npm build:angular`
This script produces the `clarity-angular` package using [ng-packagr](https://github.com/dherges/ng-packagr). 
However, because of limitations of the tools we supplement this with a `pre` and `post` script. 

The `pre` script simply copies over the `package.json` template from our `npm` folder (this contains templates for `package.json` and 
`README.md` for all of our packages) into `src/clarity-angular` and sets the correct version number. This is necessary because 
`ng-packagr` requires the `package.json` to be at the root of the `src` (defined in `ng-package.json`).

The `post` script runs `npm pack` on the package to create the `tgz file`.

##### `npm build: icons`
This script produces the `clarity-icons` package by bundling js files that can be included in consuming app. 
The `post` script generates the svg files and also zipped up files for the icon sets. Note that this script partially 
relies on `webpack` as well, since the `webpack` script produces the `clarity-icons.css` and `clarity-icons.min.css` files. 
The `webpack` script also processes the `package.json` and `README.md` files for all of our packages. 
This means that running `npm build: icons` by itself will NOT produce a complete package.

##### `npm run webpack`
This is the script that bundles the demo app as well as produce the package for `clarity-ui`. Since our demo app
consumes the `clarity-ui.min.css`, it wasn't necessary to create a separate script for generating the `clarity-ui` 
package. This script also handles tasks common to all packages, such as setting the version and copying over the 
`package.json` and `README.md` files.

##### `npm run ks:publish`
This script publishes the kitchen sink app located under `src/ks-app`. Note that surge must be globally installed to be able to
publish this app to a CDN. You can still locally test the kitchen sink app by:
* `cd src/ks-app`
* `npm install`
* `ng serve --preserve-symlinks`

##### `npm run tslint:check` and `npm run tslint:fix`
The `tslint:check` script will run the tslinter and fail if linting fails. The `tslint:fix` script is very similar but 
is run with the `--fix` flag to auto-fix some rules if possible. Some lint rules cannot be auto fixed so you will have 
to manually fix those.

##### `npm run cssTest` and `npm run cssUpdate`
These scripts use Docker to start up a container with selenium and chrome to run the Gemini tests. Currently there are 4 sets 
in our code base and these are arbitrary sets to parallelize running them in Travis builds. You must pass in the set(s) for both 
of these scripts (e.g. `npm run cssTest set1 set3`).

Under the hood
--------------
Most build-related scripts and config files are either at the root of the project or under `/scripts` folder.

#### Pit stops and targets
The build process itself uses 3 folders:
* `src/` (version controlled): Of course, the source files. The important part is that the build 
  _never_ writes anything to this folder, as it is version controlled. This folder is used as 
  read-only.
* `dist/` (not version controlled): This is where we output the sample app bundles, 
  sourcemaps and all clarity deliverables. Basically everything. Because of that, it is itself 
  divided into several subfolders:
  * `assets/`: The sample app that contains demo components for development and testing.
  * `clarity-angular/`: This will contain the clarity components compiled using ng-packagr.
  * `clarity-icons/`: This will contain the compiled js files and d.ts files from clarity icons. 
  * `clarity-ui/`: This will contain the compiled .css files and source .clarity.scss files for clarity-ui. 
* `tests/`: Contains the entry point to running karma tests.

#### The process itself

##### Clean
We simply clean up the project before building anything.

##### HTML
* All the HTML files for the sample application are bundled by webpack into js and copied to the `dist/` folder.

##### Sass
* All the SCSS files for the sample application are compiled with Sass and moved to `dist/`, once
 again respecting their path relative to `src/`.
* All `*.clarity.scss` files found in `src/clarity-angular/` are compiled by Sass into a minified bundle 
  and moved to `dist/clarity-ui`.
* All other SCSS files in `src/clarity-angular/` are considered to be behaviour-driven styles, so they 
  are compiled by Sass and inlined in the Typescript declarations of the
  components (see below).
* Every single CSS file output by Sass goes through Autoprefixer, before potential inlining or 
  bundling.
  
##### Typescript
* All the Typescript files for the demo application are bundled by webpack into js and moved to `dist/` as 
    `<number>.js` files.
* All the Typescript files for clarity components are packaged by ng-packagr under `dist/clarity-angular`. 
 The Typescript declaration files (`*.d.ts`) are produced for each of these components.
* All `*.spec.ts` and `*.mock.ts` files, containing the unit tests and mocks for Clarity's 
  components, are transpiled and used by the webpack config file `webpack.test.config.js`. No output is generated.

##### Bundle
Bundling happens only when we run `npm run build`. This command bundles and produces all of our packages.

##### Tests
Running `npm test` only runs the karma tests. Travis will execute `npm test:travis`, which checks for code format and 
fails the build if the format check or linter fails.

##### Live server
We use webpack-dev-server for development.

##### NPM publishing
The `npm run build` script will produce 3 packages for publishing. This script will also run any dependent scripts, such as 
copying over the `package.json` template as well as the `README.md` from the `npm` folder.
