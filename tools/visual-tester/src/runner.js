const fs = require('mz/fs');
const path = require('path');
const mkdirp = require('mkdirp');
/**
 * Documentation:
 * https://pptr.dev/#?product=Puppeteer&version=v5.3.1
 */
const puppeteer = require('puppeteer');
const compareImages = require('resemblejs/compareImages');

const DotReporter = require('./reporters/dot-reporter');
const ConsoleReporter = require('./reporters/console-reporter');

const CONFIG = require('./config');

module.exports = class Runner {
  config = CONFIG;

  globalOptions = {};

  _tests = [];
  _focusTests = [];
  _ignoreTests = [];

  puppet = undefined;
  retries = 0;

  // reporter
  reporter = undefined;
  errors = [];

  // Run TYPE
  overwrite = false;

  /** Setup instance */
  constructor(props = {}) {
    this.config = Object.assign(this.config, props);

    // Too lazy to write it better at the moment
    this.reporter =
      this.config.reporter === 'console' ? new ConsoleReporter(this.config) : new DotReporter(this.config);

    /** In this mode no comparing will be made only update on the base */
    if (this.config.overwrite) {
      this.overwrite = this.config.overwrite;
    }
  }

  /**
   * Basic test that must be run
   * @param {string} url page address
   * @param {function|object} setup
   */
  it(url, setup) {
    this._tests.push(this._prepareTest(url, setup));
  }

  /**
   * Test that is focused - the runner will pick only test starting with `fit`
   * @param {string} url page address
   * @param {function|object} setup
   */
  fit(url, setup) {
    this._focusTests.push(this._prepareTest(url, setup));
  }

  /**
   * Test that will be ignored from the runner
   * @param {string} url page address
   * @param {function|object} setup
   */
  xit(url, setup) {
    this._ignoreTests.push(this._prepareTest(url, setup));
  }

  setup(options) {
    this.globalOptions = Object.assign({}, options);
  }

  /**
   * Start testing
   */
  async run() {
    /* start of the run */
    const startTime = new Date().getTime();

    /* list of all test that must be run */
    const listOfTests = this.tests();

    if (listOfTests.length === 0) {
      this.reporter.info('No tests found');
      return;
    }

    await this._beforeRun();

    this.reporter.info(
      `Prepare to run ${listOfTests.length} tests${
        this._ignoreTests.length ? `, skipping ${this._ignoreTests.length} tests` : ''
      }`
    );

    if (this.overwrite) this.reporter.info(`Overwriting base images`);

    for (const test of listOfTests) {
      await this.runTest.bind(this)(test.url, test.options);
    }

    await this._afterRun();

    this.reporter.info(`Run for ${(new Date().getTime() - startTime) / 1000}s.`);
    this.reporter.info('No more test to work with closing connection...');
  }

  /**
   * Calculate set of test that could be run based on the use of `it`, `fit` and `xit`
   */
  tests() {
    /* if we have at least one `fit` test we gonna run only them */
    if (this._focusTests.length) {
      return this._focusTests;
    }

    /* remove ignored test from the set */
    if (this._ignoreTests.length) {
      return this._tests.filter(test => {
        return !this._ignoreTests.find(ignore => ignore.url === test.url);
      });
    }

    /* return all `it` tests */
    return this._tests;
  }

  async _beforeRun() {
    /**
     * Clean working directories and recreate them
     */
    await fs.rmdir(this.config.currentPath, { recursive: true });
    await fs.rmdir(this.config.diffPath, { recursive: true });
    mkdirp(this.config.basePath);
    mkdirp(this.config.currentPath);
    mkdirp(this.config.diffPath);

    /* Use one puppet for all */
    this.puppet = await this.spawnPuppet();
  }

  async _afterRun() {
    /* close puppet connection */
    if (this.puppet) {
      await this.puppet.close();
    }

    /** report what is done */
    this.reporter.report(this.errors, {
      total: this._tests.length,
      skipped: this._ignoreTests.length,
      focused: this._focusTests.length,
      faild: this.errors.length,
      passed: this.tests().length - this.errors.length,
    });

    /* let outside commands know what we done */
    if (this.errors.length) {
      process.exitCode = 1;
    }

    process.exitCode = 0;
  }

  /**
   * Create new puppet instance
   */
  async spawnPuppet() {
    /* make sure that there is no other puppet outthere */
    if (this.puppet) {
      await this.puppet.close();
    }
    return puppeteer.launch(this.config.puppeteerConfig);
  }

  /**
   * handle retry option
   */
  async retryPuppet(url) {
    this.puppet = await this.spawnPuppet();
    this.retries++;
    this.reporter.retry(url, this.retries);
  }

  async runTest(url, options) {
    /**
     * Catch all errors and try to handle them here.
     */
    try {
      /* Create new page and navigate to it. */
      const page = await this.puppet.newPage();
      await page.goto(`${this.config.baseUrl}${url}`, {
        waitUntil: ['load', 'domcontentloaded'],
      });

      /**
       * In case that the page has animation that could mismatch the snapshots
       * we could try to disabled them - is off by default to point out that
       * this is something that we have to know before disable it.
       */
      if (options.ignoreCSSAnimations) {
        await this._disabledCSSAnimations(page);
      }

      /**
       * If there is a selector passed, use it to locate element and take screenshot
       * only on that element and ignore everything else.
       */
      if (options.selector !== '' || this.globalOptions.selector !== '') {
        const query = options.selector || this.globalOptions.selector;
        await page.waitForSelector(query);
        const selector = await page.$(query);
        const clip = await selector.boundingBox();
        await page.screenshot({ path: path.join(this.config.currentPath, this._testImage(url)), clip });
      } else {
        await page.screenshot({ path: path.join(this.config.currentPath, this._testImage(url)) });
      }
      /* make screenshot of the current page */
      /* compare them with base */
      await this.compareSnapshots(url, options);
    } catch (e) {
      /**
       * Handle retries by reconnecting and trying again.
       * There is a limit on how many times we gonna try to do this.
       */
      if (this.retries < this.config.retries) {
        await this.retryPuppet(url);
        await this.runTest.bind(this)(url, options);
        return;
      }
      /**
       * There is nothing more that we could do here so abondon ship !
       */
      this.reporter.error(`Faild to run ${url} after ${this.retries} retries with error`, e);
      this.retries = 0;
      this.errors.push({
        test: url,
        type: 'fail-to-run',
        message: e.toString(),
      });
      return;
    }
  }

  async compareSnapshots(url, options) {
    const file = this._testImage(url);
    /**
     * When we don't have base image just create one for later run.
     * It must always pass as success.
     */
    if (!fs.existsSync(path.join(this.config.basePath, file)) || this.overwrite === true) {
      await fs.copyFileSync(path.join(this.config.currentPath, file), path.join(this.config.basePath, file));
      this.reporter.pass(url);
      return;
    }

    /**
     * Create diff image to agains base and current snapshot
     */
    const diff = await compareImages(
      await fs.readFile(path.join(this.config.basePath, file)),
      await fs.readFile(path.join(this.config.currentPath, file)),
      Object.assign(this.config.resembleOptions, {
        ignoreBoxes: options.ignoreBoxes || [],
      })
    );

    /**
     * When detecting change fail the test.
     */
    if (diff.rawMisMatchPercentage > 0) {
      this.reporter.fail(url, { mismatch: diff.rawMisMatchPercentage });
      await fs.writeFile(path.join(this.config.diffPath, file), diff.getBuffer());
      this.errors.push({
        test: url,
        filename: file,
        type: 'fail-to-match',
        mismatch: diff.rawMisMatchPercentage,
      });
      return;
    }

    /* test must pass at that point */
    this.reporter.pass(url);
  }

  /**
   *
   * @param {string} url url to hit
   * @param {function| object} setup additional option that could be passed to the test runner
   */
  _prepareTest(url, setup) {
    return { url, options: typeof setup === 'function' ? setup() : setup || {} };
  }

  /**
   *
   * @param {string} url convert url into filename with extension
   */
  _testImage(url) {
    return `${url.replace(/\//g, '-')}.png`;
  }

  /**
   * Try to disabled all animation on the page before making a screenshot
   *
   * @param {Puppeteer Page Object} page
   */
  async _disabledCSSAnimations(page) {
    await page.addStyleTag({
      content: `
        *,
        *::after,
        *::before {
            transition-delay: 0s !important;
            transition-duration: 0s !important;
            animation-delay: -0.0001s !important;
            animation-duration: 0s !important;
            animation-play-state: paused !important;
            caret-color: transparent !important;
            color-adjust: exact !important;
        }
      `,
    });
  }
};
