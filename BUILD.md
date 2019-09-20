# Local setup

Clarity uses NodeJS 8+ and NPM 5+ for development, so ensure you have them installed and up to date. To find the exact
version you could check `.nvmrc` file.

It also uses Docker for running visual diff tests, so if you plan to run those tests you'll have to have Docker installed and running.

Project structure is as fallow:

```bash
src
├── clr-angular   # All Angular Clarity components and styles
├── clr-base      # Web Components
├── clr-icons     # Clarity Icons
├── dev           # Development Application
└── website       # Website and Documentation
```

# Understanding the build

We have three packages:

* `@clr/icons` - Clarity Icons package, which is a standalone web component library for icons
* `@clr/ui` - Clarity UI package, which is a standalone CSS library for Clarity styles
* `@clr/angular` - Clarty Angular package, which depends upon the other two packages to implement a set of Angular components

Each package has a slightly different build process, and this guide describes them each separately.

### `@clr/icons`

Clarity Icons is built by running `npm run icons:build`, which calls the following tasks to build the package.

1.  `icons:build:web` - Webpack compiles and bundles the TypeScript assets
2.  `icons:build:css` - Sass compiles the styles
3.  `icons:build:optimize` - CSSO optimizes the CSS
4.  `icons:build:package` - Copy the `package.json` into the package, and set the version number
5.  `icons:build:web` - Build the raw svg files and zip directories for designers

### `@clr/ui`

Clarity UI is built by running `npm run ui:build`, which calls the following tasks to build the package.

1.  `ui:build:css` - Sass compiles the light and dark theme files
2.  `ui:build:prefix` - Autoprefixer adds prefixes to CSS properties based on brower compatibility
3.  `ui:build:src` - Copy in the source files for anyone building directly
4.  `ui:build:optimize` - CSSO Optimize the CSS
5.  `ui:build:package` - Copy the `package.json` into the package, and set the version number

### `@clr/angular`

Clarity Angular is built by running `npm run angular:build`, which calls the following tasks to build the package.

1.  `angular:build:ngpackagr` - Angular CLI and ng-packagr build the Angular modules
2.  `angular:build:package` - Copy the `package.json` into the package, and set the version number

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

##### `npm test` and `npm run angular:test:watch`

The `test` script runs the unit tests using karma. The entry point for the tests is `tests/tests.entry.ts`.
You may locally modify this file to constrain which tests to run if you are testing for specific components and don't want
to run all the tests. You can run the tests in watch mode so they run continuously `npm run angular:test:watch`.

##### `npm run build:ci`

The `test:travis` script is used by Travis-CI to run all of the checks, such as format, lint, and unit tests.
If the code doesn't pass both the format and lint checkers, then the build fails before running the unit tests.

##### `npm run format` and `npm run format:fix`

We use [clang-format](https://github.com/angular/clang-format) as formatter for our code. `npm run format` will not
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

##### `npm run lint` and `npm run lint:fix`

The `lint` script will run the linter and fail if linting fails. The `lint:fix` script is very similar but
is run with the `--fix` flag to auto-fix some rules if possible. Some lint rules cannot be auto fixed so you will have
to manually fix those.

##### `npm run gemini` and `npm run gemini:fix`

These scripts use Docker to start up a container with selenium and chrome to run the Gemini tests. Currently there are 4 sets
in our code base and these are arbitrary sets to parallelize running them in Travis builds. You must pass in the set(s) for both
of these scripts (e.g. `npm run gemini set1 set3`).

##### `npm run format:file -- path/to/file`

When contributing to clarity there is a post commit hook installed and run with
[husky](https://github.com/typicode/husky) that will only format the files staged before they are committed. There are
corner cases and editors that may not behave as expected and it is possible to create a pull request that fails because
the files are not properly formatted. This command can be used to format a specific file or a space separated list of files.

##### `npm run angular:golden` and `npm run angular:golden:fix`

To update and test for changes against `clr-angular.d.ts`.
