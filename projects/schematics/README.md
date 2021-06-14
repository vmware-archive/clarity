# Clarity Schematics

These schematics provide built in integrations with the Angular CLI features in order to make it easier for users to install and update Clarity.

## TODO

- Add e2e tests on travis

### Development setup

These are a bit challenging to develop for, so here are a few tricks I've used.

**Verdaccio for local NPM registry**

This is almost essential for testing npm packages without publishing them to real NPM. Its the only way I've come across that works reasonably well for approximating the experience of `ng add` and `ng update`.

Install it `npm i -g verdaccio` and then run it with `verdaccio` in a terminal window. It starts a registry at http://localhost:4873. You will then need to run `npm login --registry="http://localhost:4873`, using `admin/admin` as user/pass.

**Schematics CLI**

This is how to run schematics globally on your system.

`npm i -g @angular-devkit/schematics-cli`

**Debugging unit tests with VSCode**

Add the following configuration files to `packages/schematics/.vscode` if you want to debug the Jasmine tests in VSCode.

**.vscode/tasks.json**

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "build:test",
      "problemMatcher": [],
      "label": "npm-build-test"
    }
  ]
}
```

**.vscode/launch.json**

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "port": 9229
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Test",
      "program": "${workspaceFolder}/../../node_modules/jasmine/bin/jasmine.js",
      "args": ["**/*_spec.js"],
      "outFiles": ["${workspaceFolder}/**/*.js"],
      "preLaunchTask": "npm-build-test"
    }
  ]
}
```

## `ng add @clr/angular`

This schematic wires up with the Angular CLI to support automatically adding `@clr/angular` to an Angular CLI project.

## `ng add @cds/angular`

This schematic wires up with the Angular CLI to support automatically adding `@cds/angular` to an Angular CLI project.

##### How it works

In the `packages/angular/projects/angular/package.json` file, we have declared a line in the package, `"schematics": "./schematics/collection.json",`. Similarly, in the `packages/angular/projects/cds-angular/package.json` file, we have a line, `"schematics": "./schematics/cds-collection.json",`. This denotes to the Angular CLI that the package has a set of schematics.

Then when the schematics are parsed, there are special schematics by the name of `ng-add` in `packages/schematics/src/collection.json` and `packages/schematics/src/cds-collection.json` files. Running `ng add @clr/angular` or `ng add @cds/angular` will look for the setup script specified for the library.

##### Create a new project

No matter what you do, you'll need to have a new Angular CLI project for testing. Create a new project with `ng new ngaddtest`. Then `cd ngaddtest` and create a new file called `.npmrc` and put in this line.

```bash
echo "registry=http://localhost:4873" >> .npmrc
```

This will ensure that this project runs through your local registry before going to public NPM. I suggest committing this file so later you can always run `git reset --hard` but not lose this file.

##### How to test with npm link

You can test the schematic on a new project without the Angular CLI by using the schematics CLI directly. This is a bit easier as it doesn't require publishing to a local registry.

Start by running `yarn build` to build the whole project. Then `cd dist/clr-angular` and run `npm link`. This will link this build directory to global node modules for schematics to leverage.

Now, as you make changes run `yarn schematics:build` to build just the schematics.

Finally, in your new CLI project you can run `schematics @clr/angular:ng-add` to execute the schematic.

##### How to test package with npm registry

During local development you can run the build `yarn build` from the repo root, and then `yarn publish:local` to publish it locally. It will assume you have a local npm registry running, and that you've incremented the version number. Otherwise you may have to clear out the local registry to publish again.

```bash
rm -rf ~/.config/verdaccio/storage/@clr && yarn build:libs && yarn publish:local
```

Finally run `ng add @clr/angular` or `ng add @cds/angular` to have it install using your local registry.

## `ng update @clr/angular`

This schematic wires up with the Angular CLI to support automatically updating `@clr/angular` in an Angular CLI project.

##### How it works

In the `packages/angular/projects/angular/package.json` file, we have declared a line in the package you see below. This denotes to the Angular CLI that this package has a set of migration schematics.

```json
  "ng-update": {
    "migrations": "./schematics/migration-collection.json",
    "packageGroup": [
      "@clr/angular",
      "@clr/ui",
      "@clr/icons"
    ]
  }
```

Then when the schematics are parsed, it will attempt to determine if any migration scripts should be run based on the definitions. The migration definitions can be found in our `packages/schematics/src/migration-collection.json` file. Running `ng update` will look for scripts based on this collection.

##### Create a new project

No matter what you do, you'll need to have a new Angular CLI project for testing. Create a new project with `ng new ngaddtest`. Then `cd ngaddtest` and create a new file called `.npmrc` and put in this line.

```bash
registry=http://localhost:4873
```

This will ensure that this project runs through your local registry before going to public NPM. I suggest committing this file so later you can always run `git reset --hard` but not lose this file.

You'll also want to ensure that when you build the project that you're incrementing your installed version

##### How to test package with npm registry

During local development you can build and publish to the local registry `yarn publish:local`. It will assume you have a local npm registry running, and that you've incremented the version number. Otherwise you may have to clear out the local registry to publish again.

```bash
rm -rf ~/.config/verdaccio/storage/@clr && yarn publish:local
```

Finally run `ng update @clr/angular --from 0.12.7` (update the version number) to have it install using your local registry.

If you need to run this multiple times, reset the project so the package.json shows the original version number and run `npm install` again before attempting another update.
