# Local setup

Clarity uses NodeJS 14+ and Yarn 1.22.4+ for development, so ensure you have them installed and up to date. To find the exact
version you could check `.nvmrc` file and if you have NVM installed just run `nvm use` to install the same version.

It also uses Docker for running visual diff tests, so if you plan to run those tests, you'll have to have Docker installed and running.

The project structure is as follow:

```bash
projects
├── angular     # All Angular Clarity components and styles
├── schematics  # Auto update scripts
├── ui          # Common CSS
```

## Understanding the build

We have two packages:

- `@clr/ui` - Clarity UI package, which is a standalone CSS library for Clarity styles
- `@clr/angular` - Clarity Angular package, which depends upon the other two packages to implement a set of Angular components

Each package has a slightly different build process, and this guide describes them each separately.
Many of these commands have a corresponding command that enables watch
mode while you develop.

## Full Project Build

To build the entire repo and all projects run the command `npm run build`.
This command is useful to run before submitting a PR to ensure everything will
pass the CI build.

## `@clr/angular`

Build Clarity Angular by running one of the following commands depending on your use case.

- `build:angular` - Build the Angular package for production
- `start` - Run the dev app project for Clarity Angular Components
- `test:angular` - Run all tests for Clarity Angular
- `test:angular:watch` - Continually run all tests for Clarity Angular

## `@clr/ui`

Build Clarity UI is by running `build:ui`, which calls the following tasks to build the package.

- `build:ui:css` - Sass compiles the light and dark theme files
- `build:ui:prefix` - Autoprefixer adds prefixes to CSS properties based on browser compatibility
- `build:ui:src` - Copy in the source files for anyone building directly
- `build:ui:optimize` - CSSO Optimize the CSS
- `build:ui:package` - Copy the `package.json` into the package, and set the version number

## Globally Installed NPM packages

The following packages are installed globally in the development environment. The purpose of each is listed below.
You won't need to install these for general development but may wish to do so if you want to run specific scripts for testing or publishing that require them:

- [@angular/cli](https://cli.angular.io/): The whole project uses this for build, preview, and testing.

## Additional NPM Scripts

There are a few other NPM scripts that can be useful during build and development.

##### `test`

This will run the full test suite for the project.

##### `yarn build:ci`

The `build:ci` script is used by Github CI to run all of the library build checks, such as format, lint, and unit tests.
If the code doesn't pass both the format and lint checkers, then the build fails before running the unit tests.

##### `format` and `format:fix`

We use [prettier](https://prettier.io) as formatter for our code. `format` will not
actually format the file but only check if there are any files that would be changed.

The `format:fix` does the actual formatting of any staged files, which should happen as a precommit hook.

##### `lint` and `lint:fix`

The `lint` script runs the linter and fails if linting fails. The `lint:fix` script is very similar but
is run with the `--fix` flag to auto-fix some rules if possible. Some lint rules cannot be auto fixed, so you have
to fix those manually.

##### `format:file -- path/to/file`

When contributing to Clarity, there is a post-commit hook installed and run with
[husky](https://github.com/typicode/husky) that formats the files staged before they are committed. There are
corner cases and editors that may not behave as expected, and it is possible to create a pull request that fails because
the files are not correctly formatted. This command can be used to format a specific file or a space-separated list of files.

##### `golden` and `golden:fix`

To update and test for changes against `clr-angular.d.ts`.
