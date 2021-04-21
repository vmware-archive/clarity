import glob from 'glob';
import path from 'path';
import { Context } from './context';

/**
 * Pollute everything with global assignment and local
 * variables - but it's quick and it works.
 */
import './runner';
import { runSpec } from './runner';
import { SpecReporter } from '../runner/reporters/specReporter';
import { DotReporter } from '../runner/reporters/dotReporter';

/**
 * SETUP RUNNING CONTEXT
 */
global.VDIFF_CONTEXT = true;

export const defaultOptions = {
  specs: './**/*.vspec.js',
  reporter: 'spec',
  basePath: './images/base',
  currentPath: './images/current',
  diffPath: './images/diff',
  showBanner: true,
};

const reporterList: Record<string, any> = {
  spec: SpecReporter,
  dots: DotReporter,
};

export async function run(userOptions = {}) {
  const options = { ...defaultOptions, ...userOptions };
  const initialTime = new Date().getTime();

  const specReports: any[] = [];

  /**
   * Glob, have hard time working with single files so this is why we need
   * to check if there is a '*' that require the use of global search path.
   */
  const specLocation = path.join(process.cwd(), options.specs);
  const files = specLocation.includes('*') ? glob.sync(specLocation) : [specLocation];

  console.log(`\nLocated ${files.length} specs.\n`);

  const filesLength = files.length;
  /** Every spec files is it's own run  */

  /**
   * @TODO maybe here is a place to make some changes on running multiple specs in parallel
   * @TODO first make sure that parsing specs won't leak between each other.
   */
  for (let fileIndex = 0; fileIndex < filesLength; fileIndex++) {
    const specName = files[fileIndex];

    console.log(`Running ${specName}`);

    const ctx = new Context(specName);

    const foundReporter = reporterList[options.reporter];
    if (foundReporter) {
      ctx.reporter = new foundReporter();
    } else {
      // default reporter
      ctx.reporter = new SpecReporter();
    }

    await runSpec(ctx);

    specReports.push({ spec: specName, reporter: ctx.reporter });
  }

  specReports.forEach((result: any) => {
    console.log('\n' + result.spec);
    result.reporter.report();
  });

  console.log(`Done. (${(new Date().getTime() - initialTime) / 1000} s)`);

  // make sure to quit
  process.exitCode = 0;
  process.exit();
}
