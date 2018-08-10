# Clarity Schematics

These schematics provide built in integrations with the Angular CLI features in order to make it easier for users to install and update Clarity.

## TODO

* Add proper unit tests
* Add e2e tests on travis
* Clean up unnecessary utils

### Development setup

These are a bit challenging to develop for, so here are a few tricks I've used.

**Verdaccio for local NPM registry**

This is almost essential for testing npm packages without publishing them to real NPM. Its the only way I've come across that works reasonably well for approximating the experience of `ng add` and `ng update`.

Install it `npm i -g verdaccio` and then run it with `verdaccio` in a terminal window. It starts a registry at http://localhost:4873.

**Schematics CLI**

This is how to run schematics globally on your system.

`npm i -g @angular-devkit/schematics-cli`

## `ng add @clr/angular`

This schematic wires up with the Angular CLI to support automatically adding Clarity to an Angular CLI project.

##### How it works

In the `npm/clr-angular/package.json` file, we have declared a line in the package, `"schematics": "./schematics/collection.json",`. This denotes to the Angular CLI that this package has a set of schematics.

Then when the schematics are parsed, there is a special schematic by the name of `ng-add` in our `src/schematics/src/collection.json` file. Running `ng add` will look for this entry script.

##### Create a new project

No matter what you do, you'll need to have a new Angular CLI project for testing. Create a new project with `ng new ngaddtest`. Then `cd ngaddtest` and create a new file called `.npmrc` and put in this line.

```bash
registry=http://localhost:4873
```

This will ensure that this project runs through your local registry before going to public NPM. I suggest committing this file so later you can always run `git reset --hard` but not lose this file.

##### How to test with npm link

You can test the schematic on a new project without the Angular CLI by using the schematics CLI directly. This is a bit easier as it doesn't require publishing to a local registry.

Start by running `npm run build` to build the whole project. Then `cd dist/clr-angular` and run `npm link`. This will link this build directory to global node modules for schematics to leverage.

Now, as you make changes run `npm run build:schematics` to build just the schematics.

Finally, in your new CLI project you can run `schematics @clr/angular:ng-add` to execute the schematic.

##### How to test package with npm registry

During local development you can run the build `npm run build` from the repo root, and then `npm run publish:local` to publish it locally. It will assume you have a local npm registry running, and that you've incremented the version number. Otherwise you may have to clear out the local registry to publish again.

```bash
rm -rf ~/.config/verdaccio/storage/@clr && npm run build && npm run publish:local
```

Finally run `ng add @clr/angular` to have it install using your local registry.

## `ng update @clr/angular`

This schematic wires up with the Angular CLI to support automatically updating Clarity to an Angular CLI project.

##### How it works

In the `npm/clr-angular/package.json` file, we have declared a line in the package you see below. This denotes to the Angular CLI that this package has a set of migration schematics.

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

Then when the schematics are parsed, it will attempt to determine if any migration scripts should be run based on the definitions. The migration definitions can be found in our `src/schematics/src/migration-collection.json` file. Running `ng update` will look for scripts based on this collection.

##### Create a new project

No matter what you do, you'll need to have a new Angular CLI project for testing. Create a new project with `ng new ngaddtest`. Then `cd ngaddtest` and create a new file called `.npmrc` and put in this line.

```bash
registry=http://localhost:4873
```

This will ensure that this project runs through your local registry before going to public NPM. I suggest committing this file so later you can always run `git reset --hard` but not lose this file.

You'll also want to ensure that when you build the project that you're incrementing your installed version

##### How to test package with npm registry

During local development you can run the build `npm run build` from the repo root, and then `npm run publish:local` to publish it locally. It will assume you have a local npm registry running, and that you've incremented the version number. Otherwise you may have to clear out the local registry to publish again.

```bash
rm -rf ~/.config/verdaccio/storage/@clr && npm run build && npm run publish:local
```

Finally run `ng update @clr/angular --from 0.12.7` (update the version number) to have it install using your local registry.

If you need to run this multiple times, reset the project so the package.json shows the original version number and run `npm install` again before attempting another update.
