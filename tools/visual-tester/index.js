const path = require('path');
const glob = require('glob');
const Runner = require('./src/runner');

const RUNNER_CONFIG = {
  BASE_PATH: path.join(__dirname, 'snapshots/dev/base'),
  TMP_PATH: path.join(__dirname, 'snapshots/dev/current'),
  DIFF_PATH: path.join(__dirname, 'snapshots/dev/diff'),
  REPORTER: 'dot',
};

console.log('Dirname', __dirname);

const argv = require('minimist')(process.argv.slice(2), {
  default: {
    baseUrl: 'http://localhost:4200/',
    reporter: RUNNER_CONFIG.REPORTER,
    overwrite: false,
    basePath: RUNNER_CONFIG.BASE_PATH,
    currentPath: RUNNER_CONFIG.TMP_PATH,
    diffPath: RUNNER_CONFIG.DIFF_PATH,
  },
});

const r = new Runner({
  baseUrl: argv.baseUrl,
  overwrite: argv.overwrite,
  reporter: argv.reporter,
  basePath: argv.basePath,
  currentPath: argv.currentPath,
  diffPath: argv.diffPath,
});

/** Work on this, to improve the testing interface */
global.it = r.it.bind(r);
global.xit = r.xit.bind(r);
global.fit = r.fit.bind(r);
global.setup = r.setup.bind(r);

const specs = glob.sync(path.join(__dirname, './specs/**/*.spec.js'));

r.reporter.info(`Found ${specs.length} spec${specs.length > 1 ? 's' : ''} to run`);

/** Locate specs and load them */
specs.forEach(function (file) {
  r.reporter.info(`Loading ${path.join(__dirname, file)}`);
  require(path.resolve(file));
});

/* run tests */
r.run();
