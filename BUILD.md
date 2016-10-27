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

##### TODO: tasks for linting and formatting
These are wired in, but not configured yet.

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
  * `app/`: The sample app.
  * `clarity-angular/`: When building for development, this will contain the clarity components 
    themselves, excluding the demo components. When building for production, this folder will 
    not be created, since the components will be declared in `bundles/clarity-angular.min.js`.
  * `clarity-demos`: When building for development, this will contain the clarity demo components 
    that were under the demo subfolder of each component. When building for production, this folder 
    will not be created, since the components will be declared in `bundles/clarity-demos.min.js`.    
  * `bundles/`: As the name suggest, this is where the production deliverables end up. When 
    running tests or the sample application in production mode, these bundles will actually be 
    referenced and used directly by other files in `dist/`, to really test the final product.
  * `tests/`: The name says it all.
  * `npm/`: When publishing to the NPM registry, this will contain the various packages we 
    currently publish, pre-compiled and trimmed of all development tools. At the moment, we produce
    three packages:
    * `clarity-ui`: pure static styles
    * `clarity-angular`: contains the Angular 2 components and depends on `clarity-ui` for look-and-feel
    * `clarity-demos`: contains demo components that contain the Angular 2 components

#### The process itself

##### Clean
We simply clean up the project before building anything.

##### Auto-discovery of demos
Before anything gets compiled, we scan `src/clarity/` for folders named `demo/`. For each of 
these folders, if it contains a file named `*.demo.ts` exporting a component, we create a route 
for it and add it to `app/routes.js`. This is done so that simply creating a `demo/` folder for a
 component will automatically add it to the demo, with its own navigation link.

##### HTML
* All the HTML files for the sample application are copied to the `dist/` folder, respecting 
  their path relative to `src/`. Only `index.html` is processed to produce different files based 
  on the environment, dev or prod.
* All the HTML files for the demos are copied to the `dist/demos/` folder, respecting their path 
  relative to `src/clarity/`.
* The HTML files for clarity components are moved to `tmp/` to be inlined in the Typescript 
  declarations of the components (see below).

##### Sass
* All the SCSS files for the sample application are compiled with Sass and moved to `dist/`, once
 again respecting their path relative to `src/`.
* All the SCSS files for the demos are compiled with Sass and moved to `dist/demos/`, once again 
  respecting their path relative to `src/clarity/`.
* All `*.clarity.scss` files found in `src/clarity/` are compiled by Sass into a minified bundle 
  and moved to `dist/` or `dist/bundles/`, depending on the environment.
* All other SCSS files in `src/clarity/` are considered to be behaviour-driven styles, so they 
  are compiled by Sass and moved to `tmp/` too, to be inlined in the Typescript declarations of the
  components (see below).
* Every single CSS file output by Sass goes through Autoprefixer, before potential inlining or 
  bundling.
  
##### Typescript
* All the Typescript files for the sample application are transpiled to ES5 and moved to `dist/`,
  respecting their path relative to `src/`. This means templates and styles should use relative 
  paths, they will still be in the same place after the build.
* All the Typescript files for clarity components excluding the demo components (which means 
  all Typescript files in `src/clarity/` that are not `*.spec.ts`, `*.mock.ts` or under the `demo`
  directories) are first moved to `tmp/clarity-angular`, next to their templates and compiled styles. 
  Similarly, all the Typescript files for the demo components are first moved to `tmp/clarity-demos`.
  In the case of demo components, we then convert the relative path import for the components into
  absolute paths. After that, we inline said templates and styles in the `@Component` decorator. 
  We then transpile them to ES5, and move them directly to `dist/clarity-angular/` and 
  `dist/clarity-demos` if we are building for a dev environment. This way, each component fits neatly 
  into a single Javascript file, without external HTML or CSS. Also note that during this 
  transpilation, we produce Typescript declaration files (`*.d.ts`) for each of these components 
  and move them to `tmp/definitions`.
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