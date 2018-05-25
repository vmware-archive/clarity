# Local setup

Clarity uses NodeJS 8+ and NPM 5+ for development, so ensure you have them installed and up to date.

It also uses Docker for running visual diff tests, so if you plan to run those tests you'll have to have Docker installed and running.

# Understanding the build

We have three packages:

* `@clr/icons` - Clarity Icons package, which is a standalone web component library for icons
* `@clr/ui` - Clarity UI package, which is a standalone CSS library for Clarity styles
* `@clr/angular` - Clarty Angular package, which depends upon the other two packages to implement a set of Angular components

Each package has a slightly different build process, and this guide describes them each separately.

### `@clr/icons`

Clarity Icons is built by running `npm run build:icons`, which calls the following tasks to build the package.

1.  `build:icons:web` - Webpack compiles and bundles the TypeScript assets
2.  `build:icons:css` - Sass compiles the styles
3.  `build:icons:optimize` - CSSO optimizes the CSS
4.  `build:icons:package` - Copy the `package.json` into the package, and set the version number
5.  `build:icons:web` - Build the raw svg files and zip directories for designers

### `@clr/ui`

Clarity UI is built by running `npm run build:ui`, which calls the following tasks to build the package.

1.  `build:ui:css` - Sass compiles the light and dark theme files
2.  `build:ui:prefix` - Autoprefixer adds prefixes to CSS properties based on brower compatibility
3.  `build:ui:src` - Copy in the source files for anyone building directly
4.  `build:ui:optimize` - CSSO Optimize the CSS
5.  `build:ui:package` - Copy the `package.json` into the package, and set the version number

### `@clr/angular`

Clarity Angular is built by running `npm run build:angular`, which calls the following tasks to build the package.

1.  `build:angular:ngpackagr` - Angular CLI and ng-packagr build the Angular modules
2.  `build:angular:package` - Copy the `package.json` into the package, and set the version number

# Globally Installed NPM packages

The following packages are installed globally in development environment. The purpose for each is listed below.
You won't need to install these for general development but may wish to do so if you want to run specific scripts for testing or publishing that require them:

* [@angular/cli](https://cli.angular.io/): This is used by the whole project for build, preview, and testing.
* [gemini](https://gemini-testing.github.io/): this is used to run cli commands to run visual diff regression tests.
* [html-reporter](https://www.npmjs.com/package/html-reporter): plugin for gemini to produce an html report of the css regression tests.
* [surge](https://surge.sh/): for publishing static website. We use this to publish the kitchen sink app.

# Additional NPM Scripts

There are a few other NPM scripts that can be useful during build and development.

##### `npm start`

This will start up our demo app using the Angular CLI on port 4200 and watch for file changes for live reload.

##### `npm run build`

This script builds npm package candidates for all three packages we currently publish: `@clr/angular`, `@clr/ui`, and
`@clr/icons` under the `/dist` folder.

##### `npm test` and `npm run test:watch`

The `test` script runs the unit tests using karma. The entry point for the tests is `tests/tests.entry.ts`.
You may locally modify this file to constrain which tests to run if you are testing for specific components and don't want
to run all the tests. You can run the tests in watch mode so they run continuously `npm run test:watch`.

##### `npm run test:travis`

The `test:travis` script is used by Travis-CI to run all of the checks, such as format, lint, and unit tests.
If the code doesn't pass both the format and lint checkers, then the build fails before running the unit tests.

##### `npm run test:format` and `npm run format:fix`

We use [clang-format](https://github.com/angular/clang-format) as formatter for our code. `npm run test:format` will not
actually format the file but only check if there are any files that would be changed. We do this via a shell script (`./scripts/clang-check.sh`),
which runs the clang-format command (with `-output-replacements-xml` flag) and greps for any replacement that would be produced.

The `npm run format:fix` does the actual formatting according to the rules specified in `.clang-format` file.

##### `npm run build:angular`

This script produces the `@clr/angular` package using [ng-packagr](https://github.com/dherges/ng-packagr).

The script simply copies over the `package.json` template from our `npm` folder (this contains templates for `package.json` and
`README.md` for all of our packages) into `src/clr-angular` and sets the correct version number. This is necessary
because `ng-packagr` requires the `package.json` to be at the root of the `src` (defined in `ng-package.json`).

##### `npm run build:icons`

This script produces the `clr-icons` package by bundling js files that can be included in consuming app.
The `post` script generates the svg files and also zipped up files for the icon sets. Note that this script partially
relies on `webpack` as well, since the `webpack` script produces the `clr-icons.css` and `clr-icons.min.css` files.
The `webpack` script also processes the `package.json` and `README.md` files for all of our packages.
This means that running `npm build: icons` by itself will NOT produce a complete package.

##### `npm run ks:publish`

This script publishes the kitchen sink app located under `src/ks-app`. Note that surge must be globally installed to be able to
publish this app. You can still locally test the kitchen sink app by `ng serve ks-app`.

##### `npm run test:lint` and `npm run lint:fix`

The `test:lint` script will run the linter and fail if linting fails. The `lint:fix` script is very similar but
is run with the `--fix` flag to auto-fix some rules if possible. Some lint rules cannot be auto fixed so you will have
to manually fix those.

##### `npm run test:visual` and `npm run visual:fix`

These scripts use Docker to start up a container with selenium and chrome to run the Gemini tests. Currently there are 4 sets
in our code base and these are arbitrary sets to parallelize running them in Travis builds. You must pass in the set(s) for both
of these scripts (e.g. `npm run test:visual set1 set3`).
