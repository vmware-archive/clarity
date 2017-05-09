Understanding the build
=======================
We currently use Gulp as the build system. 

Our stack
---------
Without going into too much detail, the main tools we use in our build are:
* [Typescript](http://www.typescriptlang.org/), which we transpile to ES5.
* [Sass](http://sass-lang.com/) as CSS preprocessor.
* [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure consistent cross-browser styles.
* [SystemJS Build Tool](https://github.com/systemjs/builder) as bundler and minifier.
* [Jasmine](http://jasmine.github.io/) as test framework
* [Karma](http://karma-runner.github.io/) as test runner, running by default on [PhantomJS]
(http://phantomjs.org/)
* [Browsersync](http://www.browsersync.io/) as live development server.
* [TSLint](http://palantir.github.io/tslint/) as linter for Typescript. (Do not use it yet, we 
  still need to configure it with our preferences)

Gulp tasks
----------
If you look at the npm scripts defined in `package.json`, you'll notice that they are just 
shortcuts for the most used gulp commands. Going a bit lower-level (but not detailing every 
single task), here is the list of tasks you might want to run manually at some point:

##### `gulp build` and `gulp build --prod`
By default, this task builds the project in development mode and puts all the compiled files for 
both Clarity itself and the sample app in various subfolders of the `dist/` folder. If you add the 
`--prod` flag, it builds for production instead and puts all the Clarity deliverables in the 
`dist/bundles/` folder, while the sample app remains in the other subfolders of `dist/`.

##### `gulp serve` and `gulp serve --prod`
These build the project, then serve it through a live-server, watching source file changes an 
triggering auto-reloads. Every compiled file has a sourcemap pointing to the original Typescript 
or SCSS sources, so debugging should work seamlessly in all development-appropriate browsers.
With the `--prod` flag, the sample application is wired to use Clarity's minified production 
bundles.

##### `gulp aot`
This task uses the ngc to compile clarity-angular components into es5 es2015 format, and additionally
produces the umd bundle file. This happens out of band from the development compilation. In other words,
this task compiles the ts files from our src directly into es5 es2015 javascript files.

##### `gulp test`
Runs all the unit tests found in `*.spec.ts` files in the clarity source folder, and outputs 
detailed results in the console. Note that tests are always run in "production mode", on the 
minified bundles.

##### `gulp test:watch`
Same as `gulp test`, but watches changes in both test files and source files to re-run the tests.
Useful when writing new tests.

##### `gulp clean`
Removes all build artifacts. Don't worry about calling this yourself all the time, all tasks 
described before this already do it for you before running. Just use it when you want for some 
reason to clean the project without rebuilding.

##### `gulp tslint`
This gulp task runs tslint using the config file `build/tslint.json`. When initially running the app,
each subtask `tslint:*` will run and halt the process if tslint fails. For each subtask `tslint:*`,
there's a corresponding `tslint:*:no-error` task that is run when a watch task detects a change in
the ts file. These `no-error` tasks output the tslint errors on console but doesn't halt the process.

##### `gulp sample`
This gulp task assumes that npm packages have been produced under the `dist/npm` folder to be published, 
and that they are locally installed. We recommend that you run `npm run sample-app` instead, which will
locally install the packages that exist under the `dist/npm` folder as a pre-step. 
This task starts up a simple web application to test consuming of our npm packages in an AoT compiled application.

Under the hood
--------------
All the build-related scripts and the various configuration files needed can be found in the 
`build/` folder. Actual gulp tasks are grouped in the `build/tasks/` subfolder.

#### Pit stops and targets
The build process itself uses 3 folders:
* `src/` (version controlled): Of course, the source files. The important part is that the build 
  _never_ writes anything to this folder, as it is version controlled. This folder is used as 
  read-only.
* `tmp/` (not version controlled): When intermediate processing and writing of a file is needed, we 
  output it to `tmp/`. At the end of the build, nothing of value should end up here, as we simply 
  remove the folder to clean up.
* `dist/` (not version controlled): This is where we output the sample app, transpiled tests, 
  sourcemaps and all clarity deliverables. Basically everything. Because of that, it is itself 
  divided into several subfolders:
  * `app/`: The sample app that contains demo components for development and testing.
  * `bundles/`: As the name suggest, this is where the production deliverables end up. When 
    running tests or the sample application in production mode, these bundles will actually be 
    referenced and used directly by other files in `dist/`, to really test the final product.
  * `clarity-angular/`: This will contain the clarity components compiled in commonjs format. Note that
    this version is not what gets ultimately packaged into the npm package. We package the compiled version
    produced by the `aot` gulp task so that Clarity components are AoT ready.
  * `clarity-icons/`: This will contain the compiled js files and d.ts files from clarity icons. 
  * `sample-app/`: This will contain a simple application with no router to test consuming of our 
    npm packages in an AoT compiled application. 
  * `npm/`: When publishing to the NPM registry, this will contain the various packages we 
    currently publish, pre-compiled and trimmed of all development tools. At the moment, we produce
    three packages:
    * `clarity-icons`: clarity icons package
    * `clarity-ui`: pure static styles
    * `clarity-angular`: contains the Angular components and depends on `clarity-ui` for look-and-feel
  * `tests/`: The name says it all.

#### The process itself

##### Clean
We simply clean up the project before building anything.

##### HTML
* All the HTML files for the sample application are copied to the `dist/app` folder, respecting 
  their path relative to `src/`. Only `index.html` is processed to produce different files based 
  on the environment, dev or prod.
* The HTML files for clarity components are inlined and compiled into the js.

##### Sass
* All the SCSS files for the sample application are compiled with Sass and moved to `dist/`, once
 again respecting their path relative to `src/`.
* All `*.clarity.scss` files found in `src/clarity/` are compiled by Sass into a minified bundle 
  and moved to `dist/` or `dist/bundles/`, depending on the environment.
* All other SCSS files in `src/clarity-angular/` are considered to be behaviour-driven styles, so they 
  are compiled by Sass and inlined in the Typescript declarations of the
  components (see below).
* Every single CSS file output by Sass goes through Autoprefixer, before potential inlining or 
  bundling.
  
##### Typescript
* All the Typescript files for the sample application are transpiled to ES5 and moved to `dist/`,
  respecting their path relative to `src/`. This means templates and styles should use relative 
  paths, they will still be in the same place after the build.
* All the Typescript files for clarity components are inlined, transpiled to ES5, and moved to 
  `dist/clarity-angular/`. This way, each component fits neatly 
  into a single Javascript file, without external HTML or CSS. Also note that during this 
  transpilation, we produce Typescript declaration files (`*.d.ts`) for each of these components.
* All `*.spec.ts` and `*.mock.ts` files, containing the unit tests and mocks for Clarity's 
  components, are transpiled to ES5 and moved to `dist/tests/`.

##### Bundle
Bundling only happens when building for a production environment. We take all Javascript files for 
Clarity components obtained in the previous step (which should be in `tmp/` at that time) in a 
single, minified one, and place that new file in `dist/bundles/`.
After that, we create a ZIP archive with the minified CSS bundle, the minified JS one, and all 
our components' Typescript declaration files (preserving their folder structure), which we move 
to `dist/bundles/` too.

##### Tests
When building for a production environment, we run all the unit tests before ending the build. If
one of them fails, the build itself fails.

##### Live server
When building to serve the sample application, we start our live server once all the previous 
steps are over.
If we are not serving, we clean the `tmp/` folder when we're done. If we are serving, we keep it 
to watch for changes more efficiently.

##### NPM publishing
When trying to publish our packages to NPM, we first prepare a `dist/npm/` folder with the exact 
state of the packages we want to publish: a correct `package.json`, pre-compiled bundles, 
Typescript declaration files... To do this, we first run a whole production build, then handpick 
the various files we want from  `tmp/` and `dist/` and copy them to `dist/npm/<package-name>/`.
Note that because we only allow publishing all packages at the same time, they share a single 
version number and are always bumped synchronously.