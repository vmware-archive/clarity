# Local setup

Clarity uses NodeJS 14+ and Yarn 1.22.4+ for development, so ensure you have them installed and up to date. To find the exact
version you could check `.nvmrc` file.

It also uses Docker for running visual diff tests, so if you plan to run those tests, you'll have to have Docker installed and running.

The project structure is as follow:

```bash
packages

packages
├── angular                           # Angular wrappers
├── core                              # Web Components
├── eslint-plugin-clarity-adoption    # ESLint rules to help with migration to Core
├── react                             # React Wrappers Components
├── schematics                        # Angular schematics
```

## Understanding the build

We have several packages:

- `@cds/angular` - Clarity Angular package for easier consumption of Clarity Core with Angular
- `@clr/core` - Clarity Web Components and common utilities.
- `@cds/react` - Clarity React package for easier consumption of Clarity Core with React

Each package has a slightly different build process, and this guide describes them each separately.
Many of these commands have a corresponding command that enables watch
mode while you develop.

## Full Project Build

To build the entire repo and all projects run the command `yarn build`.
This command is useful to run before submitting a PR to ensure everything will
pass the CI build.

## `@cds/core`

Build Clarity Core by running `yarn core:build`, which calls the following tasks to build the package.

- `core:build` - Builds the Core package for production
- `core:start` - Run the test project for Clarity Core Web Components
- `core:test` - Run all tests for Clarity Core
- `core:test:watch` - Continually run all tests for Clarity Core

## Additional NPM Scripts

There are a few other NPM scripts that can be useful during build and development.

##### `yarn start`

The start command starts up our demo app using the Angular CLI on port 4200 and watches for file changes for live reload.

##### `yarn build`

This script builds npm package candidates for all four packages we currently publish: `@clr/angular`, `@clr/ui`,
`@clr/icons`, and `@cds/core` under the `/dist` folder.

##### `yarn test` and `yarn angular:test:watch`

This entry file now lives in src/clr-angular/test.tsand is now confined to what's under clr-angular. It used to be that the file was a single entry point across multiple packages. You can run the tests in watch mode, so they run continuously `yarn angular:test:watch`.

##### `yarn build:ci`

The `build:ci` script is used by Github CI to run all of the library build checks, such as format, lint, and unit tests.
If the code doesn't pass both the format and lint checkers, then the build fails before running the unit tests.

##### `yarn format` and `yarn format:fix`

We use [prettier](https://prettier.io) as formatter for our code. `yarn format` will not
actually format the file but only check if there are any files that would be changed.

The `yarn format:fix` does the actual formatting of any staged files, which should happen as a precommit hook.

##### `yarn angular:build`

This script produces the `@clr/angular` package using [ng-packagr](https://github.com/dherges/ng-packagr).

The script copies over the `package.json` template from our `npm` folder (this contains templates for `package.json` and
`README.md` for all of our packages) into `src/clr-angular` and sets the correct version number. This step is necessary
because `ng-packagr` requires the `package.json` to be at the root of the `src` (defined in `ng-package.json`).

##### `yarn core:build`

This script produces the `@cds/core` package that is used to consume the Clarity Core Web Components.

##### `yarn lint` and `yarn lint:fix`

The `lint` script runs the linter and fails if linting fails. The `lint:fix` script is very similar but
is run with the `--fix` flag to auto-fix some rules if possible. Some lint rules cannot be auto fixed, so you have
to fix those manually.

##### `yarn format:file -- path/to/file`

When contributing to Clarity, there is a post-commit hook installed and run with
[husky](https://github.com/typicode/husky) that formats the files staged before they are committed. There are
corner cases and editors that may not behave as expected, and it is possible to create a pull request that fails because
the files are not correctly formatted. This command can be used to format a specific file or a space-separated list of files.
